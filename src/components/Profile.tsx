import { getPlayerStats, getEarnedBadges, badges as allBadges } from "@/data/storage";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface ProfileProps {
  onBack: () => void;
}

const Profile = ({ onBack }: ProfileProps) => {
  const stats = getPlayerStats();
  const earned = getEarnedBadges();
  const earnedIds = new Set(earned.map(b => b.id));
  const accuracy = stats.totalQuestions > 0 ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100) : 0;

  const favCategory = Object.entries(stats.gamesPerCategory).sort(([, a], [, b]) => b - a)[0];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-lg mx-auto">
        <Button variant="ghost" onClick={onBack} className="mb-4 text-muted-foreground">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>

        <h2 className="text-3xl font-extrabold text-foreground mb-6">🎖️ Profile & Badges</h2>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-foreground">{stats.totalGamesPlayed}</div>
            <div className="text-xs text-muted-foreground">Games Played</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-foreground">{accuracy}%</div>
            <div className="text-xs text-muted-foreground">Accuracy</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-secondary">🔥 {stats.bestStreak}</div>
            <div className="text-xs text-muted-foreground">Best Streak</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-foreground">{stats.consecutiveDays}</div>
            <div className="text-xs text-muted-foreground">Day Streak</div>
          </div>
        </div>

        {favCategory && (
          <p className="text-sm text-muted-foreground mb-6">
            Favorite category: <strong className="text-foreground">{favCategory[0]}</strong> ({favCategory[1]} games)
          </p>
        )}

        {/* Badges */}
        <h3 className="text-xl font-bold text-foreground mb-3">Badges ({earned.length}/{allBadges.length})</h3>
        <div className="grid grid-cols-2 gap-3">
          {allBadges.map((badge) => {
            const isEarned = earnedIds.has(badge.id);
            return (
              <div
                key={badge.id}
                className={`rounded-xl p-4 text-center border transition-all ${
                  isEarned
                    ? "bg-card border-secondary/40 shadow-sm"
                    : "bg-muted/50 border-border opacity-50"
                }`}
              >
                <div className="text-3xl mb-1">{isEarned ? badge.emoji : "🔒"}</div>
                <div className="font-bold text-sm text-foreground">{badge.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{badge.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
