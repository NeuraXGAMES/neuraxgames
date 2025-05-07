
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GameGrid from "@/components/GameGrid";

// Real games only
const TRENDING_GAMES = [
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
];

const Trending = () => {
  return (
    <div className="min-h-screen bg-neura-dark text-white">
      <Navbar />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 animate-fade-in">Trending Games</h1>
            <p className="text-gray-400 animate-fade-in animate-delay-100">The most popular unblocked games right now</p>
          </div>
          
          <div className="bg-neura-dark-accent/30 p-6 rounded-xl mb-12 border border-neura-primary/20 animate-fade-in animate-delay-200">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="inline-block w-3 h-3 bg-neura-primary rounded-full mr-2"></span>
              What's Hot
            </h2>
            <p className="text-gray-300">
              These games are being played by thousands of players right now. Join in and see why everyone loves these titles!
            </p>
          </div>
          
          <GameGrid 
            title="Top Trending Games" 
            subtitle="Most popular games this week"
            games={TRENDING_GAMES}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Trending;
