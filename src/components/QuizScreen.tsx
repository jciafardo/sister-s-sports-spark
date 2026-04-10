import { useState, useEffect, useCallback } from "react";
import type { Question } from "@/data/questions";
import { Progress } from "@/components/ui/progress";

interface QuizScreenProps {
  questions: Question[];
  onComplete: (score: number, total: number, maxStreak: number) => void;
}

const TIMER_SECONDS = 15;

const QuizScreen = ({ questions, onComplete }: QuizScreenProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [showFeedback, setShowFeedback] = useState(false);

  const question = questions[currentIndex];
  const isCorrect = selected === question.correctIndex;

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= questions.length) {
      onComplete(score + (isCorrect && selected !== null ? 1 : 0), questions.length, Math.max(maxStreak, streak + (isCorrect && selected !== null ? 1 : 0)));
    } else {
      setCurrentIndex(i => i + 1);
      setSelected(null);
      setShowFeedback(false);
      setTimeLeft(TIMER_SECONDS);
    }
  }, [currentIndex, questions.length, onComplete, score, isCorrect, selected, maxStreak, streak]);

  const handleSelect = (index: number) => {
    if (showFeedback) return;
    setSelected(index);
    setShowFeedback(true);
    const correct = index === question.correctIndex;
    if (correct) {
      setScore(s => s + 1);
      setStreak(s => {
        const newStreak = s + 1;
        setMaxStreak(m => Math.max(m, newStreak));
        return newStreak;
      });
    } else {
      setStreak(0);
    }
    setTimeout(handleNext, 1500);
  };

  // Timer
  useEffect(() => {
    if (showFeedback) return;
    if (timeLeft <= 0) {
      setShowFeedback(true);
      setStreak(0);
      setTimeout(handleNext, 1500);
      return;
    }
    const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, showFeedback, handleNext]);

  const labels = ["A", "B", "C", "D"];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-primary p-4">
        <div className="max-w-lg mx-auto">
          <div className="flex justify-between items-center text-primary-foreground mb-2">
            <span className="font-bold">Question {currentIndex + 1}/{questions.length}</span>
            <span className="font-bold text-secondary">Score: {score}</span>
          </div>
          <Progress value={(currentIndex / questions.length) * 100} className="h-2 bg-primary-foreground/20" />
        </div>
      </div>

      {/* Timer */}
      <div className="max-w-lg mx-auto w-full px-4 mt-4">
        <div className="flex items-center gap-2 mb-1">
          <span className={`text-sm font-bold ${timeLeft <= 5 ? "text-destructive" : "text-muted-foreground"}`}>
            ⏱️ {timeLeft}s
          </span>
          {streak > 0 && (
            <span className="text-sm font-bold text-secondary ml-auto">
              🔥 {streak} streak
            </span>
          )}
        </div>
        <Progress
          value={(timeLeft / TIMER_SECONDS) * 100}
          className={`h-1.5 ${timeLeft <= 5 ? "[&>div]:bg-destructive" : "[&>div]:bg-secondary"}`}
        />
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col justify-center p-4">
        <div className="max-w-lg mx-auto w-full animate-slide-up">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8 text-center leading-snug">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, i) => {
              let optionClass = "bg-card border-border hover:border-secondary";
              if (showFeedback) {
                if (i === question.correctIndex) {
                  optionClass = "bg-success/10 border-success text-success";
                } else if (i === selected && !isCorrect) {
                  optionClass = "bg-destructive/10 border-destructive text-destructive";
                } else {
                  optionClass = "bg-card border-border opacity-50";
                }
              }

              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={showFeedback}
                  className={`w-full border-2 rounded-xl p-4 text-left flex items-center gap-3 transition-all active:scale-[0.98] ${optionClass}`}
                >
                  <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold text-sm text-foreground shrink-0">
                    {labels[i]}
                  </span>
                  <span className="font-medium text-foreground">{option}</span>
                </button>
              );
            })}
          </div>

          {showFeedback && selected === null && (
            <p className="text-center mt-4 text-destructive font-bold">⏰ Time's up!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;
