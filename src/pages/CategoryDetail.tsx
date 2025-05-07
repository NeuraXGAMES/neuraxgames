import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GameGrid from "@/components/GameGrid";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Only real games
const GAMES_BY_CATEGORY = {
  "racing": [
    {
      id: "game1",
      title: "Snow Rider 3D",
      imageUrl: "https://i.ytimg.com/vi/4gH4LCluFxM/maxresdefault.jpg",
      category: "Racing",
      popularity: 5,
      url: "https://www.hoodamath.com/mobile/games/snow-rider-3d/game.html?nocheckorient=1"
    },
    {
      id: "moto-x3m",
      title: "Moto X3M",
      imageUrl: "https://assets.poki.com/motox3m/motox3m-menu.png",
      category: "Racing",
      popularity: 5,
      url: "https://html5gameshq.com/iframed/moto-x3m"
    }
  ],
  // Other categories would be empty for now
  "adventure": [],
  "puzzle": [],
  "strategy": [],
  "educational": [],
  "platformer": []
};

const CATEGORY_DESCRIPTIONS = {
  "racing": "Experience the thrill of speed with our collection of racing games. From motorcycles to snow riders, test your reflexes and skills on various terrains and tracks.",
  "adventure": "Embark on epic journeys and explore fantastic worlds in our adventure games collection.",
  "puzzle": "Challenge your mind with brain teasers, logic puzzles, and mental challenges in our puzzle games selection.",
  "strategy": "Plan your moves carefully and outsmart your opponents in our collection of strategy games.",
  "educational": "Learn while having fun with our educational games that cover various subjects and skills.",
  "platformer": "Jump, run, and navigate through challenging levels in our platformer games collection."
};

const CategoryDetail = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const normalizedCategory = categoryName ? categoryName.toLowerCase() : "";
  
  const games = GAMES_BY_CATEGORY[normalizedCategory as keyof typeof GAMES_BY_CATEGORY] || [];
  const description = CATEGORY_DESCRIPTIONS[normalizedCategory as keyof typeof CATEGORY_DESCRIPTIONS] || "";
  
  return (
    <div className="min-h-screen bg-neura-dark text-white">
      <Navbar />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8 flex items-center">
            <Link to="/categories">
              <Button variant="outline" size="icon" className="mr-4 rounded-full">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-4xl font-bold mb-2 capitalize animate-fade-in">{categoryName} Games</h1>
              <p className="text-gray-400 animate-fade-in animate-delay-100">
                {games.length} game{games.length !== 1 ? 's' : ''} available
              </p>
            </div>
          </div>
          
          <div className="bg-neura-dark-accent/30 p-6 rounded-xl mb-12 border border-neura-primary/20 animate-fade-in animate-delay-200">
            <h2 className="text-2xl font-bold mb-4">About {categoryName} Games</h2>
            <p className="text-gray-300">{description}</p>
          </div>
          
          {games.length > 0 ? (
            <GameGrid 
              title={`${categoryName} Games`}
              subtitle={`All games in the ${categoryName} category`}
              games={games}
            />
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in animate-delay-300">
              <div className="text-5xl mb-6">🎮</div>
              <h3 className="text-2xl font-bold mb-3">No Games Yet</h3>
              <p className="text-gray-400 max-w-md mb-6">
                We're working on adding {categoryName} games to our collection. Check back soon!
              </p>
              <Link to="/">
                <Button className="bg-neura-primary hover:bg-neura-primary/80 text-white">
                  Browse Other Games
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryDetail;
