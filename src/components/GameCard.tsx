
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface GameCardProps {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  popularity: number; // 1-5 scale
}

const GameCard = ({ id, title, imageUrl, category, popularity }: GameCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="overflow-hidden bg-neura-dark-card border-neura-dark-accent card-hover relative animate-fade-in h-[260px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-[160px] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        
        {/* Category badge */}
        <div className="absolute top-2 left-2 bg-neura-dark/80 backdrop-blur-sm text-xs py-1 px-2 rounded-full border border-neura-primary/30">
          {category}
        </div>
        
        {/* Popularity indicator */}
        <div className="absolute top-2 right-2 flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <span 
              key={index} 
              className={`w-1.5 h-1.5 rounded-full mx-0.5 ${
                index < popularity ? 'bg-neura-primary' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
        
        {/* Play button overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-neura-dark to-transparent flex items-center justify-center opacity-0 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : ''
          }`}
        >
          <Button 
            className="bg-neura-primary hover:bg-neura-primary/90 text-white rounded-full w-12 h-12 flex items-center justify-center"
          >
            <Play className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <div className="h-10 overflow-hidden">
          <p className="text-sm text-gray-400">Click to play this awesome game now!</p>
        </div>
      </div>
    </Card>
  );
};

export default GameCard;
