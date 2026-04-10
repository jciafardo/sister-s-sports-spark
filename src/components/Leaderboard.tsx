import { getResults } from "@/data/storage";
import { categories } from "@/data/questions";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

interface LeaderboardProps {
  onBack: () => void;
}

const Leaderboard = ({ onBack }: LeaderboardProps) => {
  const results = getResults();
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? results : results.filter(r => r.category === filter);
  const top = filtered.slice(0, 20);

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-lg mx-auto">
        <Button variant="ghost" onClick={onBack} className="mb-4 text-muted-foreground">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>

        <h2 className="text-3xl font-extrabold text-foreground mb-4">🏅 Leaderboard</h2>

        {/* Filter */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${filter === "all" ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"}`}
          >
            All
          </button>
          {categories.filter(c => c.id !== "mixed").map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${filter === cat.id ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"}`}
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>

        {top.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <div className="text-4xl mb-3">📊</div>
            <p className="font-medium">No scores yet!</p>
            <p className="text-sm">Play a game to see your scores here.</p>
          </div>
        ) : (
          <div className="space-y-2">
            {top.map((result, i) => (
              <div
                key={result.id}
                className={`flex items-center gap-3 p-3 rounded-xl border ${i < 3 ? "bg-card border-secondary/30" : "bg-card border-border"}`}
              >
                <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold text-sm">
                  {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `${i + 1}`}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-foreground truncate">{result.playerName || "Player"}</div>
                  <div className="text-xs text-muted-foreground">
                    {categories.find(c => c.id === result.category)?.emoji} {result.difficulty} · {new Date(result.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-foreground">{result.score}/{result.totalQuestions}</div>
                  <div className="text-xs text-muted-foreground">{Math.round((result.score / result.totalQuestions) * 100)}%</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
