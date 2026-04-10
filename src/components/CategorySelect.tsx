import { useState } from "react";
import { categories, type SportCategory, type Difficulty } from "@/data/questions";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface CategorySelectProps {
  onSelect: (category: SportCategory, difficulty: Difficulty) => void;
  onBack: () => void;
}

const difficulties: { id: Difficulty; label: string; emoji: string; color: string }[] = [
  { id: "easy", label: "Easy", emoji: "😊", color: "bg-success text-success-foreground" },
  { id: "medium", label: "Medium", emoji: "🤔", color: "bg-secondary text-secondary-foreground" },
  { id: "hard", label: "Hard", emoji: "🔥", color: "bg-destructive text-destructive-foreground" },
];

const CategorySelect = ({ onSelect, onBack }: CategorySelectProps) => {
  const [selectedCategory, setSelectedCategory] = useState<SportCategory | null>(null);

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-lg mx-auto">
        <Button variant="ghost" onClick={onBack} className="mb-4 text-muted-foreground">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>

        {!selectedCategory ? (
          <div className="animate-slide-up">
            <h2 className="text-3xl font-extrabold text-foreground mb-2">Pick a Sport</h2>
            <p className="text-muted-foreground mb-6">Choose your category</p>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="bg-card border border-border rounded-xl p-5 text-center hover:border-secondary hover:shadow-lg transition-all active:scale-95"
                >
                  <div className="text-4xl mb-2">{cat.emoji}</div>
                  <div className="font-bold text-foreground">{cat.name}</div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="animate-slide-up">
            <h2 className="text-3xl font-extrabold text-foreground mb-2">Pick Difficulty</h2>
            <p className="text-muted-foreground mb-6">
              {categories.find(c => c.id === selectedCategory)?.emoji}{" "}
              {categories.find(c => c.id === selectedCategory)?.name}
            </p>
            <div className="space-y-3">
              {difficulties.map((diff) => (
                <button
                  key={diff.id}
                  onClick={() => onSelect(selectedCategory, diff.id)}
                  className={`w-full ${diff.color} rounded-xl p-5 text-left flex items-center gap-4 hover:opacity-90 transition-all active:scale-[0.98]`}
                >
                  <span className="text-3xl">{diff.emoji}</span>
                  <div>
                    <div className="text-xl font-bold">{diff.label}</div>
                    <div className="text-sm opacity-80">
                      {diff.id === "easy" ? "Great for beginners" : diff.id === "medium" ? "A good challenge" : "Only for true fans"}
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <Button
              variant="ghost"
              onClick={() => setSelectedCategory(null)}
              className="mt-4 text-muted-foreground"
            >
              ← Change sport
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategorySelect;
