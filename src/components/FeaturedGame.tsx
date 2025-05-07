
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface FeaturedGameProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const FeaturedGame = ({ title, description, imageUrl, category }: FeaturedGameProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 animate-fade-in">Featured Game</h2>
          <p className="text-gray-400 animate-fade-in animate-delay-100">Play our most popular game this week</p>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden animate-fade-in animate-delay-200">
          {/* Background image */}
          <div className="relative h-[400px] md:h-[500px]">
            <img 
              src={imageUrl} 
              alt={title}
              className="absolute inset-0 w-full h-full object-cover filter brightness-50"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-neura-dark/90 via-neura-dark/60 to-transparent"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 max-w-xl">
              <div className="inline-block bg-neura-primary/20 border border-neura-primary/40 rounded-full px-4 py-1 text-sm mb-4">
                {category}
              </div>
              
              <h3 className="text-4xl md:text-5xl font-extrabold mb-4 neon-glow">{title}</h3>
              
              <p className="text-gray-300 mb-8">{description}</p>
              
              <div>
                <Button className="bg-neura-primary hover:bg-neura-primary/90 text-white flex items-center gap-2">
                  <Play className="h-4 w-4" /> Play Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGame;
