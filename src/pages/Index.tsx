
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GameGrid from "@/components/GameGrid";
import CategorySection from "@/components/CategorySection";
import FeaturedGame from "@/components/FeaturedGame";
import Footer from "@/components/Footer";

// Only real games with valid URLs
const REAL_GAMES = [
  {
    id: "game1",
    title: "Snow Rider 3D",
    imageUrl: "https://static.keygames.com/2/115102/100968/1200x630/snow-rider-3d.webp",
    category: "Racing",
    popularity: 5,
    url: "https://www.hoodamath.com/mobile/games/snow-rider-3d/game.html?nocheckorient=1"
  },
  {
    id: "moto-x3m",
    title: "Moto X3M",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsliV_oChJ_QvMNNsuGu8RMdkxxXbRSdOyxMzs4nV6n2SpzzyH",
    category: "Racing",
    popularity: 5,
    url: "https://html5gameshq.com/iframed/moto-x3m"
  }
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
          imageUrl="https://static.keygames.com/2/115102/100968/1200x630/snow-rider-3d.webp"
          category="Racing"
        />
        
        <CategorySection />
        
        <GameGrid 
          title="Available Games" 
          subtitle="Check out our collection of unblocked games"
          games={REAL_GAMES}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
