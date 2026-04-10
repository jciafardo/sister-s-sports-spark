import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { SportCategory } from "@/data/questions";
import type { AnswerRecord } from "@/components/QuizScreen";
import { CheckCircle2, XCircle, Clock } from "lucide-react";

interface ResultsScreenProps {
  score: number;
  total: number;
  maxStreak: number;
  category: SportCategory;
  answers: AnswerRecord[];
  onPlayAgain: () => void;
  onChangeCategory: () => void;
  onHome: () => void;
}

function getRating(score: number, total: number) {
  const pct = score / total;
  if (pct === 1) return { label: "GOAT 🐐", message: "Absolute perfection!" };
  if (pct >= 0.8) return { label: "MVP 🏆", message: "Outstanding performance!" };
  if (pct >= 0.6) return { label: "Pro ⭐", message: "Great job, keep it up!" };
  if (pct >= 0.4) return { label: "Starter 💪", message: "Not bad, room to improve!" };
  return { label: "Rookie 🌟", message: "Keep practicing, you'll get there!" };
}

const ResultsScreen = ({ score, total, maxStreak, answers, onPlayAgain, onChangeCategory, onHome }: ResultsScreenProps) => {
  const [showReview, setShowReview] = useState(false);
  const rating = getRating(score, total);
  const pct = Math.round((score / total) * 100);
  const labels = ["A", "B", "C", "D"];

  if (showReview) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-lg mx-auto">
          <Button variant="ghost" onClick={() => setShowReview(false)} className="mb-4 text-muted-foreground">
            ← Back to Results
          </Button>
          <h2 className="text-2xl font-extrabold text-foreground mb-1">📋 Quiz Review</h2>
          <p className="text-muted-foreground mb-6">{score}/{total} correct ({pct}%)</p>

          <div className="space-y-4">
            {answers.map((answer, i) => (
              <div key={i} className={`rounded-xl border-2 p-4 ${answer.correct ? "border-success/30 bg-success/5" : "border-destructive/30 bg-destructive/5"}`}>
                <div className="flex items-start gap-2 mb-3">
                  {answer.correct ? (
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  ) : answer.selectedIndex === null ? (
                    <Clock className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  )}
                  <span className="font-bold text-foreground text-sm">
                    Q{i + 1}: {answer.question.question}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-1.5 ml-7">
                  {answer.question.options.map((opt, j) => {
                    let cls = "text-muted-foreground";
                    let prefix = labels[j];
                    if (j === answer.question.correctIndex) {
                      cls = "text-success font-bold";
                      prefix = "✅ " + labels[j];
                    } else if (j === answer.selectedIndex && !answer.correct) {
                      cls = "text-destructive line-through";
                      prefix = "❌ " + labels[j];
                    }
                    return (
                      <div key={j} className={`text-sm ${cls}`}>
                        {prefix}. {opt}
                      </div>
                    );
                  })}
                </div>

                {answer.selectedIndex === null && (
                  <p className="text-xs text-muted-foreground ml-7 mt-2">⏰ Time ran out</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3">
            <Button
              onClick={onPlayAgain}
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold py-6 text-lg rounded-xl"
            >
              🔄 Play Again
            </Button>
            <Button
              variant="outline"
              onClick={onHome}
              className="w-full"
            >
              🏠 Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center animate-slide-up space-y-6">
        <div className="text-6xl mb-2">{score === total ? "🎉" : score >= total * 0.6 ? "💪" : "😅"}</div>

        <div>
          <h2 className="text-4xl font-extrabold text-primary-foreground">{rating.label}</h2>
          <p className="text-primary-foreground/70 mt-1">{rating.message}</p>
        </div>

        <div className="mx-auto w-36 h-36 rounded-full border-4 border-secondary flex items-center justify-center bg-primary-foreground/5">
          <div>
            <div className="text-4xl font-extrabold text-primary-foreground">{score}/{total}</div>
            <div className="text-sm text-primary-foreground/60">{pct}%</div>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">{score}</div>
            <div className="text-xs text-primary-foreground/60">Correct</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-destructive">{total - score}</div>
            <div className="text-xs text-primary-foreground/60">Wrong</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-foreground">🔥 {maxStreak}</div>
            <div className="text-xs text-primary-foreground/60">Best Streak</div>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            onClick={() => setShowReview(true)}
            className="w-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 font-bold py-6 text-lg rounded-xl border border-primary-foreground/20"
          >
            📋 Review Answers
          </Button>
          <Button
            onClick={onPlayAgain}
            className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold py-6 text-lg rounded-xl"
          >
            🔄 Play Again
          </Button>
          <Button
            variant="outline"
            onClick={onChangeCategory}
            className="w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 py-5 rounded-xl"
          >
            🔀 Change Category
          </Button>
          <Button
            variant="ghost"
            onClick={onHome}
            className="w-full text-primary-foreground/60 hover:text-primary-foreground"
          >
            🏠 Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;
