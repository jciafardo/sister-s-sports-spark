export type SportCategory = "soccer" | "basketball" | "football" | "baseball" | "tennis" | "hockey" | "mixed";
export type Difficulty = "easy" | "medium" | "hard";

export interface Question {
  id: string;
  category: SportCategory;
  difficulty: Difficulty;
  question: string;
  options: string[];
  correctIndex: number;
}

export const categories: { id: SportCategory; name: string; emoji: string }[] = [
  { id: "soccer", name: "Soccer", emoji: "⚽" },
  { id: "basketball", name: "Basketball", emoji: "🏀" },
  { id: "football", name: "Football", emoji: "🏈" },
  { id: "baseball", name: "Baseball", emoji: "⚾" },
  { id: "tennis", name: "Tennis", emoji: "🎾" },
  { id: "hockey", name: "Hockey", emoji: "🏒" },
  { id: "mixed", name: "All Sports", emoji: "🏅" },
];

export const questions: Question[] = [
  // SOCCER - Easy
  { id: "s1", category: "soccer", difficulty: "easy", question: "How many players are on a soccer team on the field?", options: ["9", "10", "11", "12"], correctIndex: 2 },
  { id: "s2", category: "soccer", difficulty: "easy", question: "Which country won the first FIFA World Cup in 1930?", options: ["Brazil", "Uruguay", "Argentina", "Italy"], correctIndex: 1 },
  { id: "s3", category: "soccer", difficulty: "easy", question: "What color card means a player is sent off?", options: ["Yellow", "Red", "Blue", "Green"], correctIndex: 1 },
  { id: "s4", category: "soccer", difficulty: "easy", question: "How long is a standard soccer match?", options: ["60 minutes", "80 minutes", "90 minutes", "120 minutes"], correctIndex: 2 },
  // SOCCER - Medium
  { id: "s5", category: "soccer", difficulty: "medium", question: "Who has won the most Ballon d'Or awards?", options: ["Cristiano Ronaldo", "Lionel Messi", "Michel Platini", "Johan Cruyff"], correctIndex: 1 },
  { id: "s6", category: "soccer", difficulty: "medium", question: "Which club has won the most UEFA Champions League titles?", options: ["AC Milan", "Barcelona", "Real Madrid", "Bayern Munich"], correctIndex: 2 },
  { id: "s7", category: "soccer", difficulty: "medium", question: "In which year did the Women's World Cup first take place?", options: ["1987", "1991", "1995", "1999"], correctIndex: 1 },
  // SOCCER - Hard
  { id: "s8", category: "soccer", difficulty: "hard", question: "Who scored the 'Hand of God' goal?", options: ["Pelé", "Diego Maradona", "Zinedine Zidane", "Ronaldo"], correctIndex: 1 },
  { id: "s9", category: "soccer", difficulty: "hard", question: "Which country has appeared in the most World Cup finals without winning?", options: ["Netherlands", "Hungary", "Czech Republic", "Sweden"], correctIndex: 0 },

  // BASKETBALL - Easy
  { id: "b1", category: "basketball", difficulty: "easy", question: "How many points is a standard basket worth?", options: ["1", "2", "3", "4"], correctIndex: 1 },
  { id: "b2", category: "basketball", difficulty: "easy", question: "What is the name of the NBA championship trophy?", options: ["Vince Lombardi", "Larry O'Brien", "Stanley Cup", "Commissioner's Cup"], correctIndex: 1 },
  { id: "b3", category: "basketball", difficulty: "easy", question: "How many players per team are on the court?", options: ["4", "5", "6", "7"], correctIndex: 1 },
  { id: "b4", category: "basketball", difficulty: "easy", question: "What is it called when you move without dribbling?", options: ["Foul", "Traveling", "Blocking", "Charging"], correctIndex: 1 },
  // BASKETBALL - Medium
  { id: "b5", category: "basketball", difficulty: "medium", question: "Who has the most NBA championship rings as a player?", options: ["Michael Jordan", "Bill Russell", "Kareem Abdul-Jabbar", "LeBron James"], correctIndex: 1 },
  { id: "b6", category: "basketball", difficulty: "medium", question: "What year was the NBA founded?", options: ["1936", "1946", "1956", "1966"], correctIndex: 1 },
  { id: "b7", category: "basketball", difficulty: "medium", question: "Who scored 100 points in a single NBA game?", options: ["Michael Jordan", "Kobe Bryant", "Wilt Chamberlain", "LeBron James"], correctIndex: 2 },
  // BASKETBALL - Hard
  { id: "b8", category: "basketball", difficulty: "hard", question: "Which team has the longest winning streak in NBA history?", options: ["Chicago Bulls", "Los Angeles Lakers", "Golden State Warriors", "Miami Heat"], correctIndex: 2 },
  { id: "b9", category: "basketball", difficulty: "hard", question: "Who was the youngest player to reach 30,000 career points?", options: ["Kobe Bryant", "LeBron James", "Kevin Durant", "Wilt Chamberlain"], correctIndex: 1 },

  // FOOTBALL - Easy
  { id: "f1", category: "football", difficulty: "easy", question: "How many points is a touchdown worth?", options: ["3", "5", "6", "7"], correctIndex: 2 },
  { id: "f2", category: "football", difficulty: "easy", question: "What is the big championship game called?", options: ["World Series", "Super Bowl", "Stanley Cup", "Finals"], correctIndex: 1 },
  { id: "f3", category: "football", difficulty: "easy", question: "How many players per team are on the field?", options: ["9", "10", "11", "12"], correctIndex: 2 },
  { id: "f4", category: "football", difficulty: "easy", question: "What shape is a football?", options: ["Round", "Oval/Prolate spheroid", "Square", "Flat"], correctIndex: 1 },
  // FOOTBALL - Medium
  { id: "f5", category: "football", difficulty: "medium", question: "Which team has won the most Super Bowls?", options: ["Dallas Cowboys", "New England Patriots", "Pittsburgh Steelers", "San Francisco 49ers"], correctIndex: 1 },
  { id: "f6", category: "football", difficulty: "medium", question: "How long is a football field in yards?", options: ["80", "90", "100", "120"], correctIndex: 2 },
  { id: "f7", category: "football", difficulty: "medium", question: "Who holds the record for most career passing touchdowns?", options: ["Peyton Manning", "Tom Brady", "Drew Brees", "Brett Favre"], correctIndex: 1 },
  // FOOTBALL - Hard
  { id: "f8", category: "football", difficulty: "hard", question: "What was the largest margin of victory in Super Bowl history?", options: ["35 points", "40 points", "45 points", "55 points"], correctIndex: 2 },
  { id: "f9", category: "football", difficulty: "hard", question: "Which team went 16-0 in the regular season but lost the Super Bowl?", options: ["1985 Bears", "2007 Patriots", "1972 Dolphins", "2015 Panthers"], correctIndex: 1 },

  // BASEBALL - Easy
  { id: "ba1", category: "baseball", difficulty: "easy", question: "How many strikes make an out?", options: ["2", "3", "4", "5"], correctIndex: 1 },
  { id: "ba2", category: "baseball", difficulty: "easy", question: "How many bases are on a baseball diamond?", options: ["3", "4", "5", "6"], correctIndex: 1 },
  { id: "ba3", category: "baseball", difficulty: "easy", question: "How many innings are in a standard baseball game?", options: ["7", "8", "9", "10"], correctIndex: 2 },
  { id: "ba4", category: "baseball", difficulty: "easy", question: "What is a home run?", options: ["Hitting the ball out of the park", "Running to first base", "Catching a fly ball", "Striking out"], correctIndex: 0 },
  // BASEBALL - Medium
  { id: "ba5", category: "baseball", difficulty: "medium", question: "Who holds the all-time home run record?", options: ["Babe Ruth", "Barry Bonds", "Hank Aaron", "Mark McGwire"], correctIndex: 1 },
  { id: "ba6", category: "baseball", difficulty: "medium", question: "Which team has won the most World Series?", options: ["Boston Red Sox", "New York Yankees", "St. Louis Cardinals", "Los Angeles Dodgers"], correctIndex: 1 },
  // BASEBALL - Hard
  { id: "ba7", category: "baseball", difficulty: "hard", question: "Who threw the only perfect game in World Series history?", options: ["Sandy Koufax", "Don Larsen", "Nolan Ryan", "Randy Johnson"], correctIndex: 1 },

  // TENNIS - Easy
  { id: "t1", category: "tennis", difficulty: "easy", question: "What is the score called when it's 0 in tennis?", options: ["Zero", "Nothing", "Love", "Nil"], correctIndex: 2 },
  { id: "t2", category: "tennis", difficulty: "easy", question: "How many Grand Slam tournaments are there per year?", options: ["2", "3", "4", "5"], correctIndex: 2 },
  { id: "t3", category: "tennis", difficulty: "easy", question: "What surface is Wimbledon played on?", options: ["Clay", "Hard court", "Grass", "Carpet"], correctIndex: 2 },
  // TENNIS - Medium
  { id: "t4", category: "tennis", difficulty: "medium", question: "Who has won the most Grand Slam singles titles (men's)?", options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"], correctIndex: 2 },
  { id: "t5", category: "tennis", difficulty: "medium", question: "What is it called when a server wins a game without the opponent scoring?", options: ["Ace", "Love game", "Bagel", "Shutout"], correctIndex: 1 },
  // TENNIS - Hard
  { id: "t6", category: "tennis", difficulty: "hard", question: "Who won the 'Battle of the Sexes' tennis match in 1973?", options: ["Bobby Riggs", "Billie Jean King", "Chris Evert", "Margaret Court"], correctIndex: 1 },

  // HOCKEY - Easy
  { id: "h1", category: "hockey", difficulty: "easy", question: "What do hockey players hit?", options: ["A ball", "A puck", "A shuttlecock", "A disc"], correctIndex: 1 },
  { id: "h2", category: "hockey", difficulty: "easy", question: "How many periods are in an NHL game?", options: ["2", "3", "4", "5"], correctIndex: 1 },
  { id: "h3", category: "hockey", difficulty: "easy", question: "What is the championship trophy in the NHL called?", options: ["Larry O'Brien Trophy", "Lombardi Trophy", "Stanley Cup", "Commissioner's Cup"], correctIndex: 2 },
  // HOCKEY - Medium
  { id: "h4", category: "hockey", difficulty: "medium", question: "Which player is known as 'The Great One'?", options: ["Mario Lemieux", "Bobby Orr", "Wayne Gretzky", "Gordie Howe"], correctIndex: 2 },
  { id: "h5", category: "hockey", difficulty: "medium", question: "Which team has won the most Stanley Cups?", options: ["Toronto Maple Leafs", "Montreal Canadiens", "Detroit Red Wings", "Boston Bruins"], correctIndex: 1 },
  // HOCKEY - Hard
  { id: "h6", category: "hockey", difficulty: "hard", question: "What is a 'Gordie Howe hat trick'?", options: ["3 goals in one game", "A goal, assist, and fight", "3 assists in one period", "Scoring in overtime"], correctIndex: 1 },
];

export function getQuestions(category: SportCategory, difficulty: Difficulty, count = 10): Question[] {
  if (category === "mixed") {
    const pool = questions.filter(q => q.difficulty === difficulty);
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    if (shuffled.length >= count) return shuffled.slice(0, count);
    // Fill with other difficulties if needed
    const remaining = questions.filter(q => q.difficulty !== difficulty).sort(() => Math.random() - 0.5);
    return [...shuffled, ...remaining].slice(0, count);
  }

  // For a specific sport, ONLY use questions from that sport
  let pool = questions.filter(q => q.category === category && q.difficulty === difficulty);
  if (pool.length < count) {
    const extra = questions.filter(q => q.category === category && q.difficulty !== difficulty);
    pool = [...pool, ...extra];
  }

  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
