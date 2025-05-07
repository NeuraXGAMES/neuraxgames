
import { Button } from "@/components/ui/button";

const categories = [
  { id: "action", name: "Action", icon: "🎮", color: "from-red-500 to-orange-500" },
  { id: "adventure", name: "Adventure", icon: "🌍", color: "from-blue-500 to-purple-500" },
  { id: "puzzle", name: "Puzzle", icon: "🧩", color: "from-green-500 to-teal-500" },
  { id: "strategy", name: "Strategy", icon: "♟️", color: "from-yellow-500 to-amber-500" },
  { id: "racing", name: "Racing", icon: "🏎️", color: "from-pink-500 to-rose-500" },
  { id: "sports", name: "Sports", icon: "⚽", color: "from-cyan-500 to-blue-500" },
];

const CategorySection = () => {
  return (
    <section className="py-12 bg-neura-dark-accent">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 animate-fade-in">Game Categories</h2>
          <p className="text-gray-400 animate-fade-in animate-delay-100">Browse games by your favorite category</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Button
              key={category.id}
              variant="ghost"
              className={`h-auto flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br ${category.color} border-0 card-hover animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-3xl mb-2">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
