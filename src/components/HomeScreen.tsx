import { getPlayerStats } from "@/data/storage";
import { Button } from "@/components/ui/button";
import { Trophy, Zap, Target, Play } from "lucide-react";

interface HomeScreenProps {
  onStart: () => void;
  onLeaderboard: () => void;
  onProfile: () => void;
}

const HomeScreen = ({ onStart, onLeaderboard, onProfile }: HomeScreenProps) => {
  const stats = getPlayerStats();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-primary">
      <div className="animate-slide-up text-center max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="space-y-2">
          <div className="text-6xl mb-2">🏆</div>
          <h1 className="text-5xl font-extrabold tracking-tight text-primary-foreground">
            SPORTS<span className="text-secondary">TRIVIA</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg font-medium">
            Test your sports knowledge!
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <Trophy className="w-5 h-5 mx-auto mb-1 text-secondary" />
            <div className="text-2xl font-bold text-primary-foreground">{stats.bestScore}</div>
            <div className="text-xs text-primary-foreground/60">Best Score</div>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <Zap className="w-5 h-5 mx-auto mb-1 text-secondary" />
            <div className="text-2xl font-bold text-primary-foreground">{stats.bestStreak}</div>
            <div className="text-xs text-primary-foreground/60">Best Streak</div>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <Target className="w-5 h-5 mx-auto mb-1 text-secondary" />
            <div className="text-2xl font-bold text-primary-foreground">{stats.totalGamesPlayed}</div>
            <div className="text-xs text-primary-foreground/60">Games</div>
          </div>
        </div>

        {/* CTA */}
        <Button
          onClick={onStart}
          size="lg"
          className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 text-xl font-bold py-7 rounded-xl animate-pulse-glow"
        >
          <Play className="w-6 h-6 mr-2" />
          START QUIZ
        </Button>

        {/* Secondary Nav */}
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" onClick={onLeaderboard}>
            🏅 Leaderboard
          </Button>
          <Button variant="outline" className="flex-1 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" onClick={onProfile}>
            🎖️ Badges
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
