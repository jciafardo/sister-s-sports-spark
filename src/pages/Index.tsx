import { useState, useCallback } from "react";
import HomeScreen from "@/components/HomeScreen";
import CategorySelect from "@/components/CategorySelect";
import QuizScreen from "@/components/QuizScreen";
import type { AnswerRecord } from "@/components/QuizScreen";
import ResultsScreen from "@/components/ResultsScreen";
import Leaderboard from "@/components/Leaderboard";
import Profile from "@/components/Profile";
import { getQuestions, type SportCategory, type Difficulty, type Question } from "@/data/questions";
import { updateStatsAfterGame, saveResult, getPlayerStats } from "@/data/storage";

type Screen = "home" | "category" | "quiz" | "results" | "leaderboard" | "profile";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("home");
  const [category, setCategory] = useState<SportCategory>("mixed");
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [lastResult, setLastResult] = useState({ score: 0, total: 0, maxStreak: 0 });
  const [lastAnswers, setLastAnswers] = useState<AnswerRecord[]>([]);

  const handleStartCategory = useCallback((cat: SportCategory, diff: Difficulty) => {
    setCategory(cat);
    setDifficulty(diff);
    setQuizQuestions(getQuestions(cat, diff, 10));
    setScreen("quiz");
  }, []);

  const handleQuizComplete = useCallback((answers: AnswerRecord[]) => {
    const score = answers.filter(a => a.correct).length;
    const total = answers.length;
    let maxStreak = 0, currentStreak = 0;
    for (const a of answers) {
      if (a.correct) { currentStreak++; maxStreak = Math.max(maxStreak, currentStreak); }
      else currentStreak = 0;
    }

    setLastResult({ score, total, maxStreak });
    setLastAnswers(answers);
    const stats = getPlayerStats();
    updateStatsAfterGame(score, total, category, maxStreak);
    saveResult({
      id: Date.now().toString(),
      playerName: stats.playerName || "Player",
      category,
      difficulty,
      score,
      totalQuestions: total,
      date: new Date().toISOString(),
      streak: maxStreak,
    });
    setScreen("results");
  }, [category, difficulty]);

  const handlePlayAgain = useCallback(() => {
    setQuizQuestions(getQuestions(category, difficulty, 10));
    setScreen("quiz");
  }, [category, difficulty]);

  switch (screen) {
    case "home":
      return (
        <HomeScreen
          onStart={() => setScreen("category")}
          onLeaderboard={() => setScreen("leaderboard")}
          onProfile={() => setScreen("profile")}
        />
      );
    case "category":
      return <CategorySelect onSelect={handleStartCategory} onBack={() => setScreen("home")} />;
    case "quiz":
      return <QuizScreen questions={quizQuestions} onComplete={handleQuizComplete} onQuit={() => setScreen("home")} />;
    case "results":
      return (
        <ResultsScreen
          score={lastResult.score}
          total={lastResult.total}
          maxStreak={lastResult.maxStreak}
          category={category}
          answers={lastAnswers}
          onPlayAgain={handlePlayAgain}
          onChangeCategory={() => setScreen("category")}
          onHome={() => setScreen("home")}
        />
      );
    case "leaderboard":
      return <Leaderboard onBack={() => setScreen("home")} />;
    case "profile":
      return <Profile onBack={() => setScreen("home")} />;
  }
};

export default Index;
