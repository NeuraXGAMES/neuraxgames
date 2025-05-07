
import { Link } from "react-router-dom";
import GameCard from "./GameCard";

interface GameGridProps {
  title: string;
  subtitle?: string;
  games: {
    id: string;
    title: string;
    imageUrl: string;
    category: string;
    popularity: number;
    url?: string;
  }[];
}

const GameGrid = ({ title, subtitle, games }: GameGridProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 animate-fade-in">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-400 animate-fade-in animate-delay-100">{subtitle}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {games.map((game, index) => (
            <Link 
              to={`/game/${game.id}`} 
              key={game.id} 
              className="transition-transform hover:scale-105"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <GameCard {...game} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameGrid;
