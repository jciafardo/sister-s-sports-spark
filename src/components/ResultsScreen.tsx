import { Button } from "@/components/ui/button";
import type { SportCategory } from "@/data/questions";

interface ResultsScreenProps {
  score: number;
  total: number;
  maxStreak: number;
  category: SportCategory;
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

const ResultsScreen = ({ score, total, maxStreak, onPlayAgain, onChangeCategory, onHome }: ResultsScreenProps) => {
  const rating = getRating(score, total);
  const pct = Math.round((score / total) * 100);

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center animate-slide-up space-y-6">
        <div className="text-6xl mb-2">{score === total ? "🎉" : score >= total * 0.6 ? "💪" : "😅"}</div>

        <div>
          <h2 className="text-4xl font-extrabold text-primary-foreground">{rating.label}</h2>
          <p className="text-primary-foreground/70 mt-1">{rating.message}</p>
        </div>

        {/* Score Circle */}
        <div className="mx-auto w-36 h-36 rounded-full border-4 border-secondary flex items-center justify-center bg-primary-foreground/5">
          <div>
            <div className="text-4xl font-extrabold text-primary-foreground">{score}/{total}</div>
            <div className="text-sm text-primary-foreground/60">{pct}%</div>
          </div>
        </div>

        {/* Stats */}
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

        {/* Actions */}
        <div className="space-y-3">
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
