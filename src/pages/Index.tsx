
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GameGrid from "@/components/GameGrid";
import CategorySection from "@/components/CategorySection";
import FeaturedGame from "@/components/FeaturedGame";
import Footer from "@/components/Footer";

const TRENDING_GAMES = [
  {
    id: "game1",
    title: "Snow Rider 3D",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=300",
    category: "Racing",
    popularity: 5,
    url: "https://www.hoodamath.com/mobile/games/snow-rider-3d/game.html?nocheckorient=1"
  },
  {
    id: "game2",
    title: "Nebula Explorer",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&h=300",
    category: "Adventure",
    popularity: 4,
  },
  {
    id: "game3",
    title: "Logic Master",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&h=300",
    category: "Puzzle",
    popularity: 3,
  },
  {
    id: "game4",
    title: "Race GT",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&h=300",
    category: "Racing",
    popularity: 4,
  },
  {
    id: "game5",
    title: "Command & Strategy",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=500&h=300",
    category: "Strategy",
    popularity: 5,
  },
];

const NEW_GAMES = [
  {
    id: "game6",
    title: "Pixel Quest",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500&h=300",
    category: "Adventure",
    popularity: 4,
  },
  {
    id: "game7",
    title: "Neuro Jump",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=500&h=300",
    category: "Platformer",
    popularity: 3,
  },
  {
    id: "game8",
    title: "Brain Teasers",
    imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=500&h=300",
    category: "Puzzle",
    popularity: 3,
  },
  {
    id: "game9",
    title: "Code Runner",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&h=300",
    category: "Educational",
    popularity: 4,
  },
  {
    id: "game10",
    title: "Cat Simulator",
    imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=500&h=300",
    category: "Simulation",
    popularity: 5,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-neura-dark text-white">
      <Navbar />
      <div className="pt-16">
        <Hero />
        
        <FeaturedGame 
          title="Snow Rider 3D"
          description="Ride down snowy slopes, perform tricks and collect coins in this exciting 3D winter sports game! Test your skills across multiple challenging levels."
          imageUrl="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1600&h=900"
          category="Racing"
        />
        
        <CategorySection />
        
        <GameGrid 
          title="Trending Games" 
          subtitle="Check out what everyone is playing right now"
          games={TRENDING_GAMES}
        />
        
        <GameGrid 
          title="New Releases" 
          subtitle="Fresh games added to our collection"
          games={NEW_GAMES}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
