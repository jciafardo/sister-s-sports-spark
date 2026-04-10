export type SportCategory = "soccer" | "basketball" | "football" | "baseball" | "tennis" | "hockey" | "golf" | "boxing" | "swimming" | "track" | "volleyball" | "rugby" | "cricket" | "mma" | "skiing" | "cycling" | "gymnastics" | "wrestling" | "badminton" | "table-tennis" | "mixed";
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
  { id: "golf", name: "Golf", emoji: "⛳" },
  { id: "boxing", name: "Boxing", emoji: "🥊" },
  { id: "swimming", name: "Swimming", emoji: "🏊" },
  { id: "track", name: "Track & Field", emoji: "🏃" },
  { id: "volleyball", name: "Volleyball", emoji: "🏐" },
  { id: "rugby", name: "Rugby", emoji: "🏉" },
  { id: "cricket", name: "Cricket", emoji: "🏏" },
  { id: "mma", name: "MMA", emoji: "🥋" },
  { id: "skiing", name: "Skiing", emoji: "⛷️" },
  { id: "cycling", name: "Cycling", emoji: "🚴" },
  { id: "gymnastics", name: "Gymnastics", emoji: "🤸" },
  { id: "wrestling", name: "Wrestling", emoji: "🤼" },
  { id: "badminton", name: "Badminton", emoji: "🏸" },
  { id: "table-tennis", name: "Table Tennis", emoji: "🏓" },
  { id: "mixed", name: "All Sports", emoji: "🏅" },
];

export const questions: Question[] = [
  // ===================== SOCCER =====================
  // SOCCER - Easy
  { id: "s1", category: "soccer", difficulty: "easy", question: "How many players are on a soccer team on the field?", options: ["9", "10", "11", "12"], correctIndex: 2 },
  { id: "s2", category: "soccer", difficulty: "easy", question: "Which country won the first FIFA World Cup in 1930?", options: ["Brazil", "Uruguay", "Argentina", "Italy"], correctIndex: 1 },
  { id: "s3", category: "soccer", difficulty: "easy", question: "What color card means a player is sent off?", options: ["Yellow", "Red", "Blue", "Green"], correctIndex: 1 },
  { id: "s4", category: "soccer", difficulty: "easy", question: "How long is a standard soccer match?", options: ["60 minutes", "80 minutes", "90 minutes", "120 minutes"], correctIndex: 2 },
  { id: "s10", category: "soccer", difficulty: "easy", question: "What is the penalty area also known as?", options: ["The box", "The circle", "The zone", "The square"], correctIndex: 0 },
  { id: "s11", category: "soccer", difficulty: "easy", question: "Which body part can a goalkeeper use that outfield players cannot?", options: ["Head", "Chest", "Hands", "Knees"], correctIndex: 2 },
  { id: "s12", category: "soccer", difficulty: "easy", question: "What is it called when the ball goes over the sideline?", options: ["Corner kick", "Throw-in", "Goal kick", "Free kick"], correctIndex: 1 },
  { id: "s13", category: "soccer", difficulty: "easy", question: "What does FIFA stand for?", options: ["Football International Federation Association", "Fédération Internationale de Football Association", "Federal International Football Authority", "First International Football Association"], correctIndex: 1 },
  { id: "s14", category: "soccer", difficulty: "easy", question: "How many halves are in a soccer match?", options: ["1", "2", "3", "4"], correctIndex: 1 },
  { id: "s15", category: "soccer", difficulty: "easy", question: "What happens when a player gets two yellow cards?", options: ["Nothing", "Free kick", "Red card", "Penalty"], correctIndex: 2 },
  { id: "s16", category: "soccer", difficulty: "easy", question: "What is the center circle used for?", options: ["Penalties", "Kickoffs", "Free kicks", "Corners"], correctIndex: 1 },
  { id: "s17", category: "soccer", difficulty: "easy", question: "What is the most popular sport in the world?", options: ["Basketball", "Cricket", "Soccer", "Tennis"], correctIndex: 2 },
  // SOCCER - Medium
  { id: "s5", category: "soccer", difficulty: "medium", question: "Who has won the most Ballon d'Or awards?", options: ["Cristiano Ronaldo", "Lionel Messi", "Michel Platini", "Johan Cruyff"], correctIndex: 1 },
  { id: "s6", category: "soccer", difficulty: "medium", question: "Which club has won the most UEFA Champions League titles?", options: ["AC Milan", "Barcelona", "Real Madrid", "Bayern Munich"], correctIndex: 2 },
  { id: "s7", category: "soccer", difficulty: "medium", question: "In which year did the Women's World Cup first take place?", options: ["1987", "1991", "1995", "1999"], correctIndex: 1 },
  { id: "s18", category: "soccer", difficulty: "medium", question: "Which country has won the most World Cups?", options: ["Germany", "Italy", "Argentina", "Brazil"], correctIndex: 3 },
  { id: "s19", category: "soccer", difficulty: "medium", question: "What is the maximum number of substitutions allowed in a standard match?", options: ["3", "4", "5", "6"], correctIndex: 2 },
  { id: "s20", category: "soccer", difficulty: "medium", question: "Who is the all-time top scorer in World Cup history?", options: ["Pelé", "Miroslav Klose", "Ronaldo", "Gerd Müller"], correctIndex: 1 },
  { id: "s21", category: "soccer", difficulty: "medium", question: "Which English club was the first to win the European Cup?", options: ["Manchester United", "Liverpool", "Celtic", "Nottingham Forest"], correctIndex: 2 },
  { id: "s22", category: "soccer", difficulty: "medium", question: "What year was the offside rule introduced?", options: ["1863", "1925", "1950", "1970"], correctIndex: 1 },
  { id: "s23", category: "soccer", difficulty: "medium", question: "Which player is known as 'The Phenomenon'?", options: ["Ronaldinho", "Ronaldo Nazário", "Zidane", "Rivaldo"], correctIndex: 1 },
  { id: "s24", category: "soccer", difficulty: "medium", question: "How far is the penalty spot from the goal line?", options: ["10 yards", "12 yards", "14 yards", "16 yards"], correctIndex: 1 },
  { id: "s25", category: "soccer", difficulty: "medium", question: "Which country hosted the 2014 World Cup?", options: ["South Africa", "Russia", "Brazil", "Germany"], correctIndex: 2 },
  { id: "s26", category: "soccer", difficulty: "medium", question: "What is a 'hat trick' in soccer?", options: ["3 assists", "3 goals by one player", "3 saves", "3 fouls"], correctIndex: 1 },
  // SOCCER - Hard
  { id: "s8", category: "soccer", difficulty: "hard", question: "Who scored the 'Hand of God' goal?", options: ["Pelé", "Diego Maradona", "Zinedine Zidane", "Ronaldo"], correctIndex: 1 },
  { id: "s9", category: "soccer", difficulty: "hard", question: "Which country has appeared in the most World Cup finals without winning?", options: ["Netherlands", "Hungary", "Czech Republic", "Sweden"], correctIndex: 0 },
  { id: "s27", category: "soccer", difficulty: "hard", question: "Who is the youngest player to score in a World Cup final?", options: ["Pelé", "Mbappé", "Michael Owen", "Ronaldo"], correctIndex: 0 },
  { id: "s28", category: "soccer", difficulty: "hard", question: "Which team completed the 'Treble' in 1999?", options: ["Barcelona", "Bayern Munich", "Manchester United", "Juventus"], correctIndex: 2 },
  { id: "s29", category: "soccer", difficulty: "hard", question: "What was the highest-scoring World Cup match ever?", options: ["Austria 7-5 Switzerland", "Brazil 6-5 Poland", "Hungary 10-1 El Salvador", "Germany 8-3 Brazil"], correctIndex: 0 },
  { id: "s30", category: "soccer", difficulty: "hard", question: "Who holds the record for most goals in a single calendar year?", options: ["Cristiano Ronaldo", "Gerd Müller", "Lionel Messi", "Pelé"], correctIndex: 2 },
  { id: "s31", category: "soccer", difficulty: "hard", question: "Which goalkeeper has the most clean sheets in Premier League history?", options: ["David Seaman", "Petr Čech", "Edwin van der Sar", "Peter Schmeichel"], correctIndex: 1 },
  { id: "s32", category: "soccer", difficulty: "hard", question: "What is the 'Bosman ruling'?", options: ["A type of foul", "Free agency at contract end", "A formation", "A dribbling technique"], correctIndex: 1 },
  { id: "s33", category: "soccer", difficulty: "hard", question: "Which African country was the first to reach a World Cup quarter-final?", options: ["Nigeria", "Ghana", "Cameroon", "Senegal"], correctIndex: 2 },
  { id: "s34", category: "soccer", difficulty: "hard", question: "Who scored the fastest hat trick in Premier League history?", options: ["Robbie Fowler", "Sadio Mané", "Alan Shearer", "Thierry Henry"], correctIndex: 1 },

  // ===================== BASKETBALL =====================
  // BASKETBALL - Easy
  { id: "b1", category: "basketball", difficulty: "easy", question: "How many points is a standard basket worth?", options: ["1", "2", "3", "4"], correctIndex: 1 },
  { id: "b2", category: "basketball", difficulty: "easy", question: "What is the name of the NBA championship trophy?", options: ["Vince Lombardi", "Larry O'Brien", "Stanley Cup", "Commissioner's Cup"], correctIndex: 1 },
  { id: "b3", category: "basketball", difficulty: "easy", question: "How many players per team are on the court?", options: ["4", "5", "6", "7"], correctIndex: 1 },
  { id: "b4", category: "basketball", difficulty: "easy", question: "What is it called when you move without dribbling?", options: ["Foul", "Traveling", "Blocking", "Charging"], correctIndex: 1 },
  { id: "b10", category: "basketball", difficulty: "easy", question: "How many points is a free throw worth?", options: ["1", "2", "3", "4"], correctIndex: 0 },
  { id: "b11", category: "basketball", difficulty: "easy", question: "What is the height of a regulation basketball hoop?", options: ["8 feet", "9 feet", "10 feet", "12 feet"], correctIndex: 2 },
  { id: "b12", category: "basketball", difficulty: "easy", question: "How many quarters are in an NBA game?", options: ["2", "3", "4", "5"], correctIndex: 2 },
  { id: "b13", category: "basketball", difficulty: "easy", question: "What is it called when a player scores while being fouled and makes the free throw?", options: ["And-one", "Double play", "Bonus shot", "Power play"], correctIndex: 0 },
  { id: "b14", category: "basketball", difficulty: "easy", question: "What is the area under the basket called?", options: ["The paint", "The zone", "The circle", "The box"], correctIndex: 0 },
  { id: "b15", category: "basketball", difficulty: "easy", question: "What is a slam dunk?", options: ["A three-pointer", "Jumping and putting the ball through the hoop", "A bounce pass", "A defensive move"], correctIndex: 1 },
  { id: "b16", category: "basketball", difficulty: "easy", question: "How long is an NBA quarter?", options: ["10 minutes", "12 minutes", "15 minutes", "20 minutes"], correctIndex: 1 },
  { id: "b17", category: "basketball", difficulty: "easy", question: "What line do players shoot free throws from?", options: ["Half-court line", "Three-point line", "Free throw line", "Baseline"], correctIndex: 2 },
  // BASKETBALL - Medium
  { id: "b5", category: "basketball", difficulty: "medium", question: "Who has the most NBA championship rings as a player?", options: ["Michael Jordan", "Bill Russell", "Kareem Abdul-Jabbar", "LeBron James"], correctIndex: 1 },
  { id: "b6", category: "basketball", difficulty: "medium", question: "What year was the NBA founded?", options: ["1936", "1946", "1956", "1966"], correctIndex: 1 },
  { id: "b7", category: "basketball", difficulty: "medium", question: "Who scored 100 points in a single NBA game?", options: ["Michael Jordan", "Kobe Bryant", "Wilt Chamberlain", "LeBron James"], correctIndex: 2 },
  { id: "b18", category: "basketball", difficulty: "medium", question: "What is a triple-double?", options: ["30 points in a game", "Double digits in 3 stat categories", "3 dunks in a row", "3 blocks in a quarter"], correctIndex: 1 },
  { id: "b19", category: "basketball", difficulty: "medium", question: "Which team drafted Kobe Bryant?", options: ["Los Angeles Lakers", "Charlotte Hornets", "Philadelphia 76ers", "Boston Celtics"], correctIndex: 1 },
  { id: "b20", category: "basketball", difficulty: "medium", question: "Who is the NBA's all-time leading scorer?", options: ["Kareem Abdul-Jabbar", "Karl Malone", "LeBron James", "Michael Jordan"], correctIndex: 2 },
  { id: "b21", category: "basketball", difficulty: "medium", question: "What is the shot clock duration in the NBA?", options: ["20 seconds", "24 seconds", "30 seconds", "35 seconds"], correctIndex: 1 },
  { id: "b22", category: "basketball", difficulty: "medium", question: "Which player is known as 'The King'?", options: ["Michael Jordan", "Kobe Bryant", "LeBron James", "Shaquille O'Neal"], correctIndex: 2 },
  { id: "b23", category: "basketball", difficulty: "medium", question: "How many NBA MVP awards did Michael Jordan win?", options: ["3", "4", "5", "6"], correctIndex: 2 },
  { id: "b24", category: "basketball", difficulty: "medium", question: "Which team has the most NBA championships?", options: ["Los Angeles Lakers", "Boston Celtics", "Chicago Bulls", "Golden State Warriors"], correctIndex: 1 },
  { id: "b25", category: "basketball", difficulty: "medium", question: "What is a 'flagrant foul'?", options: ["A minor contact foul", "An unnecessary or excessive contact foul", "A technical foul", "A charging foul"], correctIndex: 1 },
  { id: "b26", category: "basketball", difficulty: "medium", question: "Who invented basketball?", options: ["Michael Jordan", "James Naismith", "Wilt Chamberlain", "Red Auerbach"], correctIndex: 1 },
  // BASKETBALL - Hard
  { id: "b8", category: "basketball", difficulty: "hard", question: "Which team has the longest winning streak in NBA history?", options: ["Chicago Bulls", "Los Angeles Lakers", "Golden State Warriors", "Miami Heat"], correctIndex: 2 },
  { id: "b9", category: "basketball", difficulty: "hard", question: "Who was the youngest player to reach 30,000 career points?", options: ["Kobe Bryant", "LeBron James", "Kevin Durant", "Wilt Chamberlain"], correctIndex: 1 },
  { id: "b27", category: "basketball", difficulty: "hard", question: "What year did the NBA introduce the three-point line?", options: ["1977", "1979", "1981", "1984"], correctIndex: 1 },
  { id: "b28", category: "basketball", difficulty: "hard", question: "Who holds the record for most assists in a single game?", options: ["Magic Johnson", "John Stockton", "Scott Skiles", "Jason Kidd"], correctIndex: 2 },
  { id: "b29", category: "basketball", difficulty: "hard", question: "Which player has the most career rebounds?", options: ["Bill Russell", "Wilt Chamberlain", "Kareem Abdul-Jabbar", "Moses Malone"], correctIndex: 1 },
  { id: "b30", category: "basketball", difficulty: "hard", question: "What was the lowest-scoring NBA game in the shot clock era?", options: ["Chicago 49 - Miami 42", "Detroit 72 - Cleveland 68", "Indiana 65 - San Antonio 59", "Chicago 82 - Toronto 79"], correctIndex: 0 },
  { id: "b31", category: "basketball", difficulty: "hard", question: "Who was the first player to be unanimously voted MVP?", options: ["LeBron James", "Michael Jordan", "Stephen Curry", "Shaquille O'Neal"], correctIndex: 2 },
  { id: "b32", category: "basketball", difficulty: "hard", question: "Which player has won the most NBA Defensive Player of the Year awards?", options: ["Dikembe Mutombo", "Ben Wallace", "Rudy Gobert", "Dwight Howard"], correctIndex: 0 },

  // ===================== FOOTBALL =====================
  // FOOTBALL - Easy
  { id: "f1", category: "football", difficulty: "easy", question: "How many points is a touchdown worth?", options: ["3", "5", "6", "7"], correctIndex: 2 },
  { id: "f2", category: "football", difficulty: "easy", question: "What is the big championship game called?", options: ["World Series", "Super Bowl", "Stanley Cup", "Finals"], correctIndex: 1 },
  { id: "f3", category: "football", difficulty: "easy", question: "How many players per team are on the field?", options: ["9", "10", "11", "12"], correctIndex: 2 },
  { id: "f4", category: "football", difficulty: "easy", question: "What shape is a football?", options: ["Round", "Oval/Prolate spheroid", "Square", "Flat"], correctIndex: 1 },
  { id: "f10", category: "football", difficulty: "easy", question: "How many points is a field goal worth?", options: ["1", "2", "3", "4"], correctIndex: 2 },
  { id: "f11", category: "football", difficulty: "easy", question: "What is the line you must cross to score a touchdown?", options: ["50-yard line", "Goal line", "Sideline", "Hash mark"], correctIndex: 1 },
  { id: "f12", category: "football", difficulty: "easy", question: "How many downs does a team get to move 10 yards?", options: ["2", "3", "4", "5"], correctIndex: 2 },
  { id: "f13", category: "football", difficulty: "easy", question: "What position throws the ball?", options: ["Running back", "Wide receiver", "Quarterback", "Linebacker"], correctIndex: 2 },
  { id: "f14", category: "football", difficulty: "easy", question: "What is it called when a defensive player catches the ball?", options: ["Fumble", "Interception", "Sack", "Safety"], correctIndex: 1 },
  { id: "f15", category: "football", difficulty: "easy", question: "How many points is an extra point kick worth?", options: ["1", "2", "3", "4"], correctIndex: 0 },
  { id: "f16", category: "football", difficulty: "easy", question: "What is the midfield line called?", options: ["Goal line", "Sideline", "50-yard line", "End zone"], correctIndex: 2 },
  { id: "f17", category: "football", difficulty: "easy", question: "What do you call it when a player drops the ball?", options: ["Interception", "Fumble", "Incomplete", "Sack"], correctIndex: 1 },
  // FOOTBALL - Medium
  { id: "f5", category: "football", difficulty: "medium", question: "Which team has won the most Super Bowls?", options: ["Dallas Cowboys", "New England Patriots", "Pittsburgh Steelers", "San Francisco 49ers"], correctIndex: 1 },
  { id: "f6", category: "football", difficulty: "medium", question: "How long is a football field in yards?", options: ["80", "90", "100", "120"], correctIndex: 2 },
  { id: "f7", category: "football", difficulty: "medium", question: "Who holds the record for most career passing touchdowns?", options: ["Peyton Manning", "Tom Brady", "Drew Brees", "Brett Favre"], correctIndex: 1 },
  { id: "f18", category: "football", difficulty: "medium", question: "What is a 'Hail Mary' pass?", options: ["A short screen pass", "A long desperation throw", "A play-action pass", "A handoff"], correctIndex: 1 },
  { id: "f19", category: "football", difficulty: "medium", question: "How many minutes are in each quarter?", options: ["10", "12", "15", "20"], correctIndex: 2 },
  { id: "f20", category: "football", difficulty: "medium", question: "What is a safety worth?", options: ["1 point", "2 points", "3 points", "6 points"], correctIndex: 1 },
  { id: "f21", category: "football", difficulty: "medium", question: "Who was the MVP of Super Bowl I?", options: ["Bart Starr", "Joe Namath", "Johnny Unitas", "Vince Lombardi"], correctIndex: 0 },
  { id: "f22", category: "football", difficulty: "medium", question: "Which team has appeared in the most Super Bowls?", options: ["Dallas Cowboys", "New England Patriots", "Pittsburgh Steelers", "Denver Broncos"], correctIndex: 1 },
  { id: "f23", category: "football", difficulty: "medium", question: "What is a two-point conversion?", options: ["Kicking a field goal", "Scoring from the 2-yard line after a touchdown", "An interception returned for a score", "A safety"], correctIndex: 1 },
  { id: "f24", category: "football", difficulty: "medium", question: "Who has the most career rushing yards?", options: ["Walter Payton", "Emmitt Smith", "Barry Sanders", "Adrian Peterson"], correctIndex: 1 },
  { id: "f25", category: "football", difficulty: "medium", question: "What conference are the Dallas Cowboys in?", options: ["AFC East", "NFC East", "AFC South", "NFC South"], correctIndex: 1 },
  { id: "f26", category: "football", difficulty: "medium", question: "How many teams are in the NFL?", options: ["28", "30", "32", "36"], correctIndex: 2 },
  // FOOTBALL - Hard
  { id: "f8", category: "football", difficulty: "hard", question: "What was the largest margin of victory in Super Bowl history?", options: ["35 points", "40 points", "45 points", "55 points"], correctIndex: 2 },
  { id: "f9", category: "football", difficulty: "hard", question: "Which team went 16-0 in the regular season but lost the Super Bowl?", options: ["1985 Bears", "2007 Patriots", "1972 Dolphins", "2015 Panthers"], correctIndex: 1 },
  { id: "f27", category: "football", difficulty: "hard", question: "Who holds the single-season touchdown reception record?", options: ["Jerry Rice", "Randy Moss", "Calvin Johnson", "Davante Adams"], correctIndex: 1 },
  { id: "f28", category: "football", difficulty: "hard", question: "What year was the first Super Bowl played?", options: ["1958", "1963", "1967", "1970"], correctIndex: 2 },
  { id: "f29", category: "football", difficulty: "hard", question: "Which player has the most career interceptions?", options: ["Rod Woodson", "Paul Krause", "Deion Sanders", "Ed Reed"], correctIndex: 1 },
  { id: "f30", category: "football", difficulty: "hard", question: "What is the 'Immaculate Reception'?", options: ["A famous catch by Franco Harris", "A Hail Mary by Doug Flutie", "A trick play by the Cowboys", "A blocked punt return"], correctIndex: 0 },
  { id: "f31", category: "football", difficulty: "hard", question: "Which quarterback has the most career losses?", options: ["Drew Bledsoe", "Vinny Testaverde", "Dan Marino", "Kerry Collins"], correctIndex: 1 },
  { id: "f32", category: "football", difficulty: "hard", question: "Who kicked the longest field goal in NFL history?", options: ["Matt Prater", "Justin Tucker", "Sebastian Janikowski", "Adam Vinatieri"], correctIndex: 1 },

  // ===================== BASEBALL =====================
  // BASEBALL - Easy
  { id: "ba1", category: "baseball", difficulty: "easy", question: "How many strikes make an out?", options: ["2", "3", "4", "5"], correctIndex: 1 },
  { id: "ba2", category: "baseball", difficulty: "easy", question: "How many bases are on a baseball diamond?", options: ["3", "4", "5", "6"], correctIndex: 1 },
  { id: "ba3", category: "baseball", difficulty: "easy", question: "How many innings are in a standard baseball game?", options: ["7", "8", "9", "10"], correctIndex: 2 },
  { id: "ba4", category: "baseball", difficulty: "easy", question: "What is a home run?", options: ["Hitting the ball out of the park", "Running to first base", "Catching a fly ball", "Striking out"], correctIndex: 0 },
  { id: "ba8", category: "baseball", difficulty: "easy", question: "How many balls result in a walk?", options: ["2", "3", "4", "5"], correctIndex: 2 },
  { id: "ba9", category: "baseball", difficulty: "easy", question: "What is the pitcher's area called?", options: ["Home plate", "The mound", "The dugout", "The outfield"], correctIndex: 1 },
  { id: "ba10", category: "baseball", difficulty: "easy", question: "How many outs are in a half-inning?", options: ["2", "3", "4", "5"], correctIndex: 1 },
  { id: "ba11", category: "baseball", difficulty: "easy", question: "What do you call a ball hit in the air that's caught?", options: ["Ground out", "Fly out", "Strike out", "Tag out"], correctIndex: 1 },
  { id: "ba12", category: "baseball", difficulty: "easy", question: "What is the area where players wait to bat called?", options: ["The bullpen", "The dugout", "The on-deck circle", "The mound"], correctIndex: 1 },
  { id: "ba13", category: "baseball", difficulty: "easy", question: "How many players are on the field for the defensive team?", options: ["7", "8", "9", "10"], correctIndex: 2 },
  { id: "ba14", category: "baseball", difficulty: "easy", question: "What is the championship series in baseball called?", options: ["Super Bowl", "World Series", "Stanley Cup", "The Finals"], correctIndex: 1 },
  { id: "ba15", category: "baseball", difficulty: "easy", question: "What does the umpire yell when a pitch is in the strike zone?", options: ["Out!", "Ball!", "Strike!", "Safe!"], correctIndex: 2 },
  // BASEBALL - Medium
  { id: "ba5", category: "baseball", difficulty: "medium", question: "Who holds the all-time home run record?", options: ["Babe Ruth", "Barry Bonds", "Hank Aaron", "Mark McGwire"], correctIndex: 1 },
  { id: "ba6", category: "baseball", difficulty: "medium", question: "Which team has won the most World Series?", options: ["Boston Red Sox", "New York Yankees", "St. Louis Cardinals", "Los Angeles Dodgers"], correctIndex: 1 },
  { id: "ba16", category: "baseball", difficulty: "medium", question: "What is an ERA?", options: ["Extra Run Average", "Earned Run Average", "Error Rate Average", "Exit Rate Analysis"], correctIndex: 1 },
  { id: "ba17", category: "baseball", difficulty: "medium", question: "Who broke the color barrier in Major League Baseball?", options: ["Satchel Paige", "Jackie Robinson", "Willie Mays", "Hank Aaron"], correctIndex: 1 },
  { id: "ba18", category: "baseball", difficulty: "medium", question: "What is a 'grand slam'?", options: ["A triple play", "A home run with bases loaded", "Striking out the side", "A no-hitter"], correctIndex: 1 },
  { id: "ba19", category: "baseball", difficulty: "medium", question: "How many games are in a regular MLB season?", options: ["142", "154", "162", "180"], correctIndex: 2 },
  { id: "ba20", category: "baseball", difficulty: "medium", question: "What does RBI stand for?", options: ["Run Batted In", "Running Base Indicator", "Runs Before Inning", "Right Batter Index"], correctIndex: 0 },
  { id: "ba21", category: "baseball", difficulty: "medium", question: "Who is known as 'The Sultan of Swat'?", options: ["Ty Cobb", "Babe Ruth", "Lou Gehrig", "Ted Williams"], correctIndex: 1 },
  { id: "ba22", category: "baseball", difficulty: "medium", question: "What is a 'no-hitter'?", options: ["A game with no runs", "A game where no batter gets a hit", "A game with no errors", "A game that goes to extra innings"], correctIndex: 1 },
  { id: "ba23", category: "baseball", difficulty: "medium", question: "Which position is between second and third base?", options: ["Second baseman", "Shortstop", "Third baseman", "Pitcher"], correctIndex: 1 },
  { id: "ba24", category: "baseball", difficulty: "medium", question: "What is the 'bullpen'?", options: ["Where batters warm up", "Where pitchers warm up", "The coach's office", "The equipment room"], correctIndex: 1 },
  { id: "ba25", category: "baseball", difficulty: "medium", question: "Who holds the record for most stolen bases?", options: ["Ty Cobb", "Lou Brock", "Rickey Henderson", "Tim Raines"], correctIndex: 2 },
  // BASEBALL - Hard
  { id: "ba7", category: "baseball", difficulty: "hard", question: "Who threw the only perfect game in World Series history?", options: ["Sandy Koufax", "Don Larsen", "Nolan Ryan", "Randy Johnson"], correctIndex: 1 },
  { id: "ba26", category: "baseball", difficulty: "hard", question: "What is the 'infield fly rule'?", options: ["A foul ball rule", "Automatic out on a pop fly with runners on", "A rule about home runs", "A pitching regulation"], correctIndex: 1 },
  { id: "ba27", category: "baseball", difficulty: "hard", question: "Who has the most career strikeouts as a pitcher?", options: ["Randy Johnson", "Roger Clemens", "Nolan Ryan", "Steve Carlton"], correctIndex: 2 },
  { id: "ba28", category: "baseball", difficulty: "hard", question: "What was the 'Curse of the Bambino'?", options: ["A curse on the Cubs", "Red Sox curse after trading Babe Ruth", "A curse on the Indians", "A curse on the Mets"], correctIndex: 1 },
  { id: "ba29", category: "baseball", difficulty: "hard", question: "Who hit the 'Shot Heard Round the World' in 1951?", options: ["Bobby Thomson", "Mickey Mantle", "Joe DiMaggio", "Willie Mays"], correctIndex: 0 },
  { id: "ba30", category: "baseball", difficulty: "hard", question: "What is the longest game in MLB history by innings?", options: ["22 innings", "25 innings", "26 innings", "33 innings"], correctIndex: 2 },
  { id: "ba31", category: "baseball", difficulty: "hard", question: "Who holds the record for hitting in the most consecutive games?", options: ["Pete Rose", "Ty Cobb", "Joe DiMaggio", "Ted Williams"], correctIndex: 2 },
  { id: "ba32", category: "baseball", difficulty: "hard", question: "What year was the designated hitter rule adopted in the AL?", options: ["1969", "1973", "1976", "1980"], correctIndex: 1 },

  // ===================== TENNIS =====================
  // TENNIS - Easy
  { id: "t1", category: "tennis", difficulty: "easy", question: "What is the score called when it's 0 in tennis?", options: ["Zero", "Nothing", "Love", "Nil"], correctIndex: 2 },
  { id: "t2", category: "tennis", difficulty: "easy", question: "How many Grand Slam tournaments are there per year?", options: ["2", "3", "4", "5"], correctIndex: 2 },
  { id: "t3", category: "tennis", difficulty: "easy", question: "What surface is Wimbledon played on?", options: ["Clay", "Hard court", "Grass", "Carpet"], correctIndex: 2 },
  { id: "t7", category: "tennis", difficulty: "easy", question: "What is it called when the score is 40-40?", options: ["Tie", "Deuce", "Match point", "Break point"], correctIndex: 1 },
  { id: "t8", category: "tennis", difficulty: "easy", question: "What do you hit a tennis ball with?", options: ["A bat", "A racket", "A paddle", "A club"], correctIndex: 1 },
  { id: "t9", category: "tennis", difficulty: "easy", question: "What is an 'ace' in tennis?", options: ["A missed serve", "A serve the opponent can't return", "A double fault", "A volley winner"], correctIndex: 1 },
  { id: "t10", category: "tennis", difficulty: "easy", question: "How many sets does a player need to win in most men's Grand Slam matches?", options: ["2", "3", "4", "5"], correctIndex: 1 },
  { id: "t11", category: "tennis", difficulty: "easy", question: "What is a 'double fault'?", options: ["Hitting the net twice", "Missing both serves", "Two foot faults", "Hitting the ball twice"], correctIndex: 1 },
  { id: "t12", category: "tennis", difficulty: "easy", question: "Which Grand Slam is played on red clay?", options: ["Australian Open", "Wimbledon", "US Open", "French Open"], correctIndex: 3 },
  { id: "t13", category: "tennis", difficulty: "easy", question: "What color are the balls used at Wimbledon?", options: ["White", "Yellow", "Orange", "Green"], correctIndex: 1 },
  { id: "t14", category: "tennis", difficulty: "easy", question: "What is the net in the middle of the court for?", options: ["Decoration", "Dividing the court", "Catching balls", "Keeping score"], correctIndex: 1 },
  { id: "t15", category: "tennis", difficulty: "easy", question: "What scoring sequence do points follow in tennis?", options: ["1, 2, 3, 4", "15, 30, 45, 60", "15, 30, 40, game", "10, 20, 30, 40"], correctIndex: 2 },
  // TENNIS - Medium
  { id: "t4", category: "tennis", difficulty: "medium", question: "Who has won the most Grand Slam singles titles (men's)?", options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"], correctIndex: 2 },
  { id: "t5", category: "tennis", difficulty: "medium", question: "What is it called when a server wins a game without the opponent scoring?", options: ["Ace", "Love game", "Bagel", "Shutout"], correctIndex: 1 },
  { id: "t16", category: "tennis", difficulty: "medium", question: "Which country hosts the Australian Open?", options: ["New Zealand", "Australia", "England", "USA"], correctIndex: 1 },
  { id: "t17", category: "tennis", difficulty: "medium", question: "What is a 'break of serve'?", options: ["Breaking your racket", "Winning a game on opponent's serve", "A time-out", "Serving an ace"], correctIndex: 1 },
  { id: "t18", category: "tennis", difficulty: "medium", question: "Who has won the most women's Grand Slam singles titles in the Open Era?", options: ["Steffi Graf", "Serena Williams", "Martina Navratilova", "Chris Evert"], correctIndex: 1 },
  { id: "t19", category: "tennis", difficulty: "medium", question: "What is a 'tiebreak'?", options: ["A way to decide a set at 6-6", "Extra time", "A coin toss", "A sudden death point"], correctIndex: 0 },
  { id: "t20", category: "tennis", difficulty: "medium", question: "Which surface is the US Open played on?", options: ["Clay", "Grass", "Hard court", "Carpet"], correctIndex: 2 },
  { id: "t21", category: "tennis", difficulty: "medium", question: "What is a 'volley'?", options: ["A serve", "Hitting the ball before it bounces", "A lob shot", "A drop shot"], correctIndex: 1 },
  { id: "t22", category: "tennis", difficulty: "medium", question: "Who is known as the 'King of Clay'?", options: ["Roger Federer", "Novak Djokovic", "Rafael Nadal", "Björn Borg"], correctIndex: 2 },
  { id: "t23", category: "tennis", difficulty: "medium", question: "What does 'WTA' stand for?", options: ["World Tennis Association", "Women's Tennis Association", "World Tennis Authority", "Women's Tennis Alliance"], correctIndex: 1 },
  { id: "t24", category: "tennis", difficulty: "medium", question: "How many challenges does each player get per set with Hawk-Eye?", options: ["1", "2", "3", "5"], correctIndex: 2 },
  { id: "t25", category: "tennis", difficulty: "medium", question: "What is a 'bagel' in tennis?", options: ["Winning a set 6-0", "A round ball", "A tie", "A missed serve"], correctIndex: 0 },
  // TENNIS - Hard
  { id: "t6", category: "tennis", difficulty: "hard", question: "Who won the 'Battle of the Sexes' tennis match in 1973?", options: ["Bobby Riggs", "Billie Jean King", "Chris Evert", "Margaret Court"], correctIndex: 1 },
  { id: "t26", category: "tennis", difficulty: "hard", question: "Who holds the record for the fastest serve in tennis?", options: ["Andy Roddick", "Sam Groth", "John Isner", "Ivo Karlovic"], correctIndex: 1 },
  { id: "t27", category: "tennis", difficulty: "hard", question: "What was the longest match in tennis history (by time)?", options: ["Nadal vs Djokovic 2012 Australian Open", "Isner vs Mahut 2010 Wimbledon", "Federer vs Nadal 2008 Wimbledon", "Djokovic vs Federer 2019 Wimbledon"], correctIndex: 1 },
  { id: "t28", category: "tennis", difficulty: "hard", question: "Who is the youngest player to be ranked World No. 1?", options: ["Boris Becker", "Lleyton Hewitt", "Carlos Alcaraz", "Pete Sampras"], correctIndex: 2 },
  { id: "t29", category: "tennis", difficulty: "hard", question: "What is the 'Golden Slam'?", options: ["Winning all 4 Grand Slams", "Winning all 4 Grand Slams + Olympic gold in one year", "Winning 3 Grand Slams", "Winning Wimbledon 5 times"], correctIndex: 1 },
  { id: "t30", category: "tennis", difficulty: "hard", question: "Who achieved the calendar-year Golden Slam?", options: ["Roger Federer", "Rafael Nadal", "Steffi Graf", "Serena Williams"], correctIndex: 2 },
  { id: "t31", category: "tennis", difficulty: "hard", question: "Which Grand Slam was the last to adopt a tiebreak in the final set?", options: ["US Open", "Australian Open", "Wimbledon", "French Open"], correctIndex: 3 },
  { id: "t32", category: "tennis", difficulty: "hard", question: "Who won the most consecutive Grand Slam titles?", options: ["Roger Federer", "Novak Djokovic", "Don Budge", "Rod Laver"], correctIndex: 1 },

  // ===================== HOCKEY =====================
  // HOCKEY - Easy
  { id: "h1", category: "hockey", difficulty: "easy", question: "What do hockey players hit?", options: ["A ball", "A puck", "A shuttlecock", "A disc"], correctIndex: 1 },
  { id: "h2", category: "hockey", difficulty: "easy", question: "How many periods are in an NHL game?", options: ["2", "3", "4", "5"], correctIndex: 1 },
  { id: "h3", category: "hockey", difficulty: "easy", question: "What is the championship trophy in the NHL called?", options: ["Larry O'Brien Trophy", "Lombardi Trophy", "Stanley Cup", "Commissioner's Cup"], correctIndex: 2 },
  { id: "h7", category: "hockey", difficulty: "easy", question: "What surface is ice hockey played on?", options: ["Grass", "Wood", "Ice", "Turf"], correctIndex: 2 },
  { id: "h8", category: "hockey", difficulty: "easy", question: "What do players wear on their feet?", options: ["Cleats", "Sneakers", "Skates", "Boots"], correctIndex: 2 },
  { id: "h9", category: "hockey", difficulty: "easy", question: "What is the area the goalie protects called?", options: ["The net", "The basket", "The end zone", "The crease"], correctIndex: 0 },
  { id: "h10", category: "hockey", difficulty: "easy", question: "How many players from each team are on the ice (including goalie)?", options: ["5", "6", "7", "8"], correctIndex: 1 },
  { id: "h11", category: "hockey", difficulty: "easy", question: "What happens when a player breaks a rule?", options: ["Free throw", "Penalty", "Red card", "Foul shot"], correctIndex: 1 },
  { id: "h12", category: "hockey", difficulty: "easy", question: "What is a 'hat trick' in hockey?", options: ["3 assists", "3 penalties", "3 goals by one player", "3 saves"], correctIndex: 2 },
  { id: "h13", category: "hockey", difficulty: "easy", question: "What equipment does the goalie use to block shots?", options: ["A bat", "Pads and a blocker", "A shield", "A helmet only"], correctIndex: 1 },
  { id: "h14", category: "hockey", difficulty: "easy", question: "What country invented ice hockey?", options: ["USA", "Russia", "Canada", "Sweden"], correctIndex: 2 },
  { id: "h15", category: "hockey", difficulty: "easy", question: "What is 'icing' in hockey?", options: ["Adding ice to the rink", "Shooting the puck across center and goal lines", "A type of penalty", "A celebration"], correctIndex: 1 },
  // HOCKEY - Medium
  { id: "h4", category: "hockey", difficulty: "medium", question: "Which player is known as 'The Great One'?", options: ["Mario Lemieux", "Bobby Orr", "Wayne Gretzky", "Gordie Howe"], correctIndex: 2 },
  { id: "h5", category: "hockey", difficulty: "medium", question: "Which team has won the most Stanley Cups?", options: ["Toronto Maple Leafs", "Montreal Canadiens", "Detroit Red Wings", "Boston Bruins"], correctIndex: 1 },
  { id: "h16", category: "hockey", difficulty: "medium", question: "How long is each period in an NHL game?", options: ["15 minutes", "18 minutes", "20 minutes", "25 minutes"], correctIndex: 2 },
  { id: "h17", category: "hockey", difficulty: "medium", question: "What is a 'power play'?", options: ["A fast break", "When one team has more players due to a penalty", "A special goal", "Overtime play"], correctIndex: 1 },
  { id: "h18", category: "hockey", difficulty: "medium", question: "Who holds the record for most goals in a single NHL season?", options: ["Mario Lemieux", "Wayne Gretzky", "Alexander Ovechkin", "Brett Hull"], correctIndex: 1 },
  { id: "h19", category: "hockey", difficulty: "medium", question: "What is a 'Zamboni'?", options: ["A type of shot", "An ice resurfacing machine", "A defensive play", "A type of skate"], correctIndex: 1 },
  { id: "h20", category: "hockey", difficulty: "medium", question: "What is 'offsides' in hockey?", options: ["Going behind your own net", "Entering the offensive zone before the puck", "Touching the puck with your hand", "Having too many players on ice"], correctIndex: 1 },
  { id: "h21", category: "hockey", difficulty: "medium", question: "How many minutes is a standard minor penalty?", options: ["1 minute", "2 minutes", "3 minutes", "5 minutes"], correctIndex: 1 },
  { id: "h22", category: "hockey", difficulty: "medium", question: "What is a 'slap shot'?", options: ["A gentle push", "A powerful shot with a wind-up", "A wrist flick", "A backhand shot"], correctIndex: 1 },
  { id: "h23", category: "hockey", difficulty: "medium", question: "Which trophy is given to the NHL's MVP?", options: ["Conn Smythe", "Hart Memorial Trophy", "Vezina Trophy", "Norris Trophy"], correctIndex: 1 },
  { id: "h24", category: "hockey", difficulty: "medium", question: "What does 'pulling the goalie' mean?", options: ["Replacing the goalie with another goalie", "Removing the goalie for an extra skater", "A goalie leaving the crease", "Benching the goalie for poor play"], correctIndex: 1 },
  { id: "h25", category: "hockey", difficulty: "medium", question: "What is a 'face-off'?", options: ["A fight", "Dropping the puck to start play", "A shootout", "A penalty shot"], correctIndex: 1 },
  // HOCKEY - Hard
  { id: "h6", category: "hockey", difficulty: "hard", question: "What is a 'Gordie Howe hat trick'?", options: ["3 goals in one game", "A goal, assist, and fight", "3 assists in one period", "Scoring in overtime"], correctIndex: 1 },
  { id: "h26", category: "hockey", difficulty: "hard", question: "Who holds the record for most career points in the NHL?", options: ["Mario Lemieux", "Gordie Howe", "Wayne Gretzky", "Mark Messier"], correctIndex: 2 },
  { id: "h27", category: "hockey", difficulty: "hard", question: "What year did the NHL expand from the 'Original Six'?", options: ["1960", "1963", "1967", "1970"], correctIndex: 2 },
  { id: "h28", category: "hockey", difficulty: "hard", question: "Which goalie has the most career wins?", options: ["Patrick Roy", "Martin Brodeur", "Terry Sawchuk", "Henrik Lundqvist"], correctIndex: 1 },
  { id: "h29", category: "hockey", difficulty: "hard", question: "What is the 'Conn Smythe Trophy' awarded for?", options: ["Regular season MVP", "Best goalie", "Playoff MVP", "Best defenseman"], correctIndex: 2 },
  { id: "h30", category: "hockey", difficulty: "hard", question: "Who scored 'The Goal' in the 2010 Olympics for Canada?", options: ["Wayne Gretzky", "Sidney Crosby", "Jonathan Toews", "Jarome Iginla"], correctIndex: 1 },
  { id: "h31", category: "hockey", difficulty: "hard", question: "Which team has the longest Stanley Cup drought among Original Six teams?", options: ["Toronto Maple Leafs", "Boston Bruins", "New York Rangers", "Detroit Red Wings"], correctIndex: 0 },
  { id: "h32", category: "hockey", difficulty: "hard", question: "What is the 'Miracle on Ice'?", options: ["A famous goal by Bobby Orr", "USA beating USSR in 1980 Olympics", "A record shutout", "Canada winning gold in 2002"], correctIndex: 1 },
  { id: "h33", category: "hockey", difficulty: "hard", question: "Who was the first European player to captain a Stanley Cup-winning team?", options: ["Nicklas Lidstrom", "Jaromir Jagr", "Peter Forsberg", "Henrik Zetterberg"], correctIndex: 0 },
  { id: "h34", category: "hockey", difficulty: "hard", question: "What is the record for most points in a single NHL season?", options: ["199", "212", "215", "225"], correctIndex: 2 },
  { id: "h35", category: "hockey", difficulty: "hard", question: "Which NHL team relocated to become the Arizona Coyotes?", options: ["Quebec Nordiques", "Hartford Whalers", "Winnipeg Jets", "Minnesota North Stars"], correctIndex: 2 },
  { id: "h36", category: "hockey", difficulty: "hard", question: "Who scored the fastest goal from the start of an NHL game?", options: ["Alexander Mogilny", "Doug Smail", "Bryan Trottier", "Alex Burrows"], correctIndex: 1 },

  // Extra hard questions for other sports
  { id: "s35", category: "soccer", difficulty: "hard", question: "Which player has made the most World Cup appearances?", options: ["Lothar Matthäus", "Paolo Maldini", "Cristiano Ronaldo", "Gianluigi Buffon"], correctIndex: 0 },
  { id: "s36", category: "soccer", difficulty: "hard", question: "What is the 'Panenka' penalty technique named after?", options: ["An Italian player", "A Czech player", "A Brazilian player", "A German player"], correctIndex: 1 },
  { id: "s37", category: "soccer", difficulty: "hard", question: "Which club has won the most domestic league titles worldwide?", options: ["Real Madrid", "Rangers", "Al Ahly", "Juventus"], correctIndex: 2 },
  { id: "s38", category: "soccer", difficulty: "hard", question: "Who is the only player to win the World Cup as both player and manager?", options: ["Pelé", "Franz Beckenbauer", "Zinedine Zidane", "Didier Deschamps"], correctIndex: 3 },

  { id: "b33", category: "basketball", difficulty: "hard", question: "What year was the NBA-ABA merger?", options: ["1972", "1976", "1979", "1983"], correctIndex: 1 },
  { id: "b34", category: "basketball", difficulty: "hard", question: "Who holds the record for most blocks in a single game?", options: ["Hakeem Olajuwon", "Elmore Smith", "Mark Eaton", "Dikembe Mutombo"], correctIndex: 1 },
  { id: "b35", category: "basketball", difficulty: "hard", question: "Which player has the most career triple-doubles?", options: ["Magic Johnson", "Oscar Robertson", "Russell Westbrook", "LeBron James"], correctIndex: 2 },
  { id: "b36", category: "basketball", difficulty: "hard", question: "What was the highest-scoring NBA game ever?", options: ["Detroit 186 - Denver 184", "Phoenix 173 - Denver 143", "Boston 170 - Minneapolis 158", "Golden State 162 - Denver 158"], correctIndex: 0 },

  { id: "f33", category: "football", difficulty: "hard", question: "Who holds the record for most sacks in a single season?", options: ["Reggie White", "Michael Strahan", "Mark Gastineau", "T.J. Watt"], correctIndex: 3 },
  { id: "f34", category: "football", difficulty: "hard", question: "Which team won the first two Super Bowls?", options: ["Dallas Cowboys", "Miami Dolphins", "Green Bay Packers", "Pittsburgh Steelers"], correctIndex: 2 },
  { id: "f35", category: "football", difficulty: "hard", question: "What is the 'Tuck Rule Game'?", options: ["A controversial 2002 playoff game", "A rule about jersey tucking", "A preseason exhibition", "A rule about fumble recovery"], correctIndex: 0 },
  { id: "f36", category: "football", difficulty: "hard", question: "Who is the only player to win the Heisman Trophy twice?", options: ["Tim Tebow", "Archie Griffin", "Herschel Walker", "Bo Jackson"], correctIndex: 1 },

  { id: "ba33", category: "baseball", difficulty: "hard", question: "What is the 'Black Sox Scandal'?", options: ["A steroid scandal", "1919 World Series fixing", "A gambling ring in the 1940s", "A bribery scandal in the 1960s"], correctIndex: 1 },
  { id: "ba34", category: "baseball", difficulty: "hard", question: "Who pitched the most no-hitters in MLB history?", options: ["Sandy Koufax", "Bob Feller", "Nolan Ryan", "Randy Johnson"], correctIndex: 2 },
  { id: "ba35", category: "baseball", difficulty: "hard", question: "What is a 'balk'?", options: ["A type of hit", "An illegal motion by the pitcher", "A base running error", "A catching mistake"], correctIndex: 1 },
  { id: "ba36", category: "baseball", difficulty: "hard", question: "Which player has the highest career batting average?", options: ["Ted Williams", "Ty Cobb", "Rogers Hornsby", "Babe Ruth"], correctIndex: 1 },

  { id: "t33", category: "tennis", difficulty: "hard", question: "Who was the last player to win the calendar-year Grand Slam in men's singles?", options: ["Roger Federer", "Rod Laver", "Don Budge", "Novak Djokovic"], correctIndex: 1 },
  { id: "t34", category: "tennis", difficulty: "hard", question: "What is the 'Sunshine Double'?", options: ["Winning Indian Wells and Miami", "Winning Australian and French Open", "Winning two clay events", "Winning two grass events"], correctIndex: 0 },
  { id: "t35", category: "tennis", difficulty: "hard", question: "Who holds the record for most consecutive weeks at World No. 1 (men's)?", options: ["Roger Federer", "Pete Sampras", "Novak Djokovic", "Jimmy Connors"], correctIndex: 2 },
  { id: "t36", category: "tennis", difficulty: "hard", question: "Which player won Wimbledon 5 consecutive times in the Open Era?", options: ["Pete Sampras", "Roger Federer", "Björn Borg", "Novak Djokovic"], correctIndex: 2 },
];

export function getQuestions(category: SportCategory, difficulty: Difficulty, count = 10): Question[] {
  let pool: Question[];

  if (category === "mixed") {
    pool = questions.filter(q => q.difficulty === difficulty);
  } else {
    // For a specific sport, ONLY use questions from that sport AND the selected difficulty
    pool = questions.filter(q => q.category === category && q.difficulty === difficulty);
  }

  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

