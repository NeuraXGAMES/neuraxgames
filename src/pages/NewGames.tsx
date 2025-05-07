
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GameGrid from "@/components/GameGrid";

// Only real games with actual URLs
const NEW_GAMES = [
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

const NewGames = () => {
  return (
    <div className="min-h-screen bg-neura-dark text-white">
      <Navbar />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 animate-fade-in">New Games</h1>
            <p className="text-gray-400 animate-fade-in animate-delay-100">Recently added to our collection</p>
          </div>
          
          <div className="bg-gradient-to-r from-neura-primary/20 to-transparent p-6 rounded-xl mb-12 border border-neura-primary/20 animate-fade-in animate-delay-200">
            <h2 className="text-2xl font-bold mb-4">Fresh Additions</h2>
            <p className="text-gray-300">
              Check out the latest games added to NeuraXGames. We're constantly expanding our collection to bring you the best unblocked gaming experience.
            </p>
          </div>
          
          <GameGrid 
            title="Latest Games" 
            subtitle="Recently added to our platform"
            games={NEW_GAMES}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewGames;
