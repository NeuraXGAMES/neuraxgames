
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CATEGORIES = [
  {
    name: "Racing",
    description: "Fast-paced racing games to test your skills and reflexes",
    icon: "🏎️",
    count: 2,
  },
  {
    name: "Adventure",
    description: "Embark on exciting journeys and explore new worlds",
    icon: "🌍",
    count: 0,
  },
  {
    name: "Puzzle",
    description: "Challenge your mind with brain teasers and logic puzzles",
    icon: "🧩",
    count: 0,
  },
  {
    name: "Strategy",
    description: "Plan, think ahead, and outsmart your opponents",
    icon: "🧠",
    count: 0,
  },
  {
    name: "Educational",
    description: "Have fun while learning new skills and concepts",
    icon: "📚",
    count: 0,
  },
  {
    name: "Platformer",
    description: "Jump, run and navigate through challenging levels",
    icon: "🏃",
    count: 0,
  }
];

const CategoryCard = ({ name, description, icon, count }: { name: string, description: string, icon: string, count: number }) => (
  <div className="bg-neura-dark-card border border-neura-dark-accent rounded-lg p-6 transition-all hover:border-neura-primary/50 hover:shadow-lg hover:shadow-neura-primary/10 animate-fade-in">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex justify-between items-center">
      <span className="text-sm text-neura-primary">{count} games</span>
      <Link to={`/category/${name.toLowerCase()}`}>
        <Button variant="outline" className="border-neura-primary/50 text-neura-primary hover:bg-neura-primary/10">
          Browse
        </Button>
      </Link>
    </div>
  </div>
);

const Categories = () => {
  return (
    <div className="min-h-screen bg-neura-dark text-white">
      <Navbar />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 animate-fade-in">Game Categories</h1>
            <p className="text-gray-400 animate-fade-in animate-delay-100">Browse our collection by category</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((category, index) => (
              <CategoryCard 
                key={category.name}
                {...category}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
