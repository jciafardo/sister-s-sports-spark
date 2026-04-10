import type { SportCategory, Difficulty } from "./questions";

export interface GameResult {
  id: string;
  playerName: string;
  category: SportCategory;
  difficulty: Difficulty;
  score: number;
  totalQuestions: number;
  date: string;
  streak: number;
}

export interface Badge {
  id: string;
  name: string;
  emoji: string;
  description: string;
  condition: (stats: PlayerStats) => boolean;
}

export interface PlayerStats {
  playerName: string;
  totalGamesPlayed: number;
  totalCorrect: number;
  totalQuestions: number;
  bestScore: number;
  currentStreak: number;
  bestStreak: number;
  gamesPerCategory: Record<string, number>;
  lastPlayedDate: string;
  consecutiveDays: number;
}

const STATS_KEY = "sports-trivia-stats";
const RESULTS_KEY = "sports-trivia-results";

export function getPlayerStats(): PlayerStats {
  const stored = localStorage.getItem(STATS_KEY);
  if (stored) return JSON.parse(stored);
  return {
    playerName: "",
    totalGamesPlayed: 0,
    totalCorrect: 0,
    totalQuestions: 0,
    bestScore: 0,
    currentStreak: 0,
    bestStreak: 0,
    gamesPerCategory: {},
    lastPlayedDate: "",
    consecutiveDays: 0,
  };
}

export function savePlayerStats(stats: PlayerStats) {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

export function getResults(): GameResult[] {
  const stored = localStorage.getItem(RESULTS_KEY);
  if (stored) return JSON.parse(stored);
  return [];
}

export function saveResult(result: GameResult) {
  const results = getResults();
  results.push(result);
  results.sort((a, b) => b.score - a.score);
  localStorage.setItem(RESULTS_KEY, JSON.stringify(results.slice(0, 50)));
}

export function updateStatsAfterGame(score: number, total: number, category: SportCategory, streak: number) {
  const stats = getPlayerStats();
  stats.totalGamesPlayed++;
  stats.totalCorrect += score;
  stats.totalQuestions += total;
  if (score > stats.bestScore) stats.bestScore = score;
  if (streak > stats.bestStreak) stats.bestStreak = streak;

  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (stats.lastPlayedDate === yesterday) {
    stats.consecutiveDays++;
  } else if (stats.lastPlayedDate !== today) {
    stats.consecutiveDays = 1;
  }
  stats.lastPlayedDate = today;

  stats.gamesPerCategory[category] = (stats.gamesPerCategory[category] || 0) + 1;
  if (score === total) stats.currentStreak++;
  else stats.currentStreak = 0;

  savePlayerStats(stats);
  return stats;
}

export const badges: Badge[] = [
  { id: "first-game", name: "Rookie", emoji: "🌟", description: "Play your first game", condition: (s) => s.totalGamesPlayed >= 1 },
  { id: "five-games", name: "Regular", emoji: "🔥", description: "Play 5 games", condition: (s) => s.totalGamesPlayed >= 5 },
  { id: "ten-games", name: "Veteran", emoji: "🏆", description: "Play 10 games", condition: (s) => s.totalGamesPlayed >= 10 },
  { id: "perfect-10", name: "Perfect 10", emoji: "💯", description: "Get all questions right in a game", condition: (s) => s.bestScore >= 10 },
  { id: "speed-demon", name: "Speed Demon", emoji: "⚡", description: "Answer 50 total questions", condition: (s) => s.totalQuestions >= 50 },
  { id: "streak-3", name: "Hot Streak", emoji: "🔥", description: "Get a best streak of 3+", condition: (s) => s.bestStreak >= 3 },
  { id: "streak-5", name: "On Fire", emoji: "💥", description: "Get a best streak of 5+", condition: (s) => s.bestStreak >= 5 },
  { id: "day-streak-3", name: "Dedicated", emoji: "📅", description: "Play 3 days in a row", condition: (s) => s.consecutiveDays >= 3 },
  { id: "day-streak-5", name: "5-Day Streak", emoji: "🗓️", description: "Play 5 days in a row", condition: (s) => s.consecutiveDays >= 5 },
  { id: "multi-sport", name: "All-Rounder", emoji: "🏅", description: "Play 3+ different sport categories", condition: (s) => Object.keys(s.gamesPerCategory).length >= 3 },
  { id: "soccer-scholar", name: "Soccer Scholar", emoji: "⚽", description: "Play 3 soccer games", condition: (s) => (s.gamesPerCategory["soccer"] || 0) >= 3 },
  { id: "hoops-hero", name: "Hoops Hero", emoji: "🏀", description: "Play 3 basketball games", condition: (s) => (s.gamesPerCategory["basketball"] || 0) >= 3 },
];

export function getEarnedBadges(): Badge[] {
  const stats = getPlayerStats();
  return badges.filter(b => b.condition(stats));
}
