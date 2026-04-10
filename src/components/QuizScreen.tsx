import { useState, useEffect, useRef } from "react";
import type { Question } from "@/data/questions";
import { Progress } from "@/components/ui/progress";

export interface AnswerRecord {
  question: Question;
  selectedIndex: number | null;
  correct: boolean;
}

interface QuizScreenProps {
  questions: Question[];
  onComplete: (answers: AnswerRecord[]) => void;
}

const TIMER_SECONDS = 15;

const QuizScreen = ({ questions, onComplete }: QuizScreenProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [showFeedback, setShowFeedback] = useState(false);
  const answersRef = useRef<AnswerRecord[]>([]);
  const advanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const question = questions[currentIndex];
  const score = answersRef.current.filter(a => a.correct).length;
  const streak = (() => {
    let s = 0;
    for (let i = answersRef.current.length - 1; i >= 0; i--) {
      if (answersRef.current[i].correct) s++;
      else break;
    }
    return s;
  })();

  const advance = (selectedIdx: number | null) => {
    const correct = selectedIdx === question.correctIndex;
    answersRef.current.push({ question, selectedIndex: selectedIdx, correct });

    if (currentIndex + 1 >= questions.length) {
      onComplete(answersRef.current);
    } else {
      setCurrentIndex(i => i + 1);
      setSelected(null);
      setShowFeedback(false);
      setTimeLeft(TIMER_SECONDS);
    }
  };

  const handleSelect = (index: number) => {
    if (showFeedback) return;
    setSelected(index);
    setShowFeedback(true);
    advanceTimerRef.current = setTimeout(() => advance(index), 1500);
  };

  // Timer
  useEffect(() => {
    if (showFeedback) return;
    if (timeLeft <= 0) {
      setShowFeedback(true);
      advanceTimerRef.current = setTimeout(() => advance(null), 1500);
      return;
    }
    const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, showFeedback]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    };
  }, []);

  const isCorrect = selected === question.correctIndex;
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
        <div className="max-w-lg mx-auto w-full animate-slide-up" key={currentIndex}>
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
