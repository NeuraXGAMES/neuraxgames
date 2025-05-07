import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Game data (eventually this would come from a database)
const GAMES = {
  "game1": {
    id: "game1",
    title: "Snow Rider 3D",
    description: "Ride down snowy slopes, perform tricks and collect coins in this exciting 3D winter sports game!",
    category: "Racing",
    url: "https://www.hoodamath.com/mobile/games/snow-rider-3d/game.html?nocheckorient=1",
    imageUrl: "https://static.keygames.com/2/115102/100968/1200x630/snow-rider-3d.webp",
    popularity: 5
  },
  "moto-x3m": {
    id: "moto-x3m",
    title: "Moto X3M",
    description: "Race through challenging tracks and perform stunts on your motorcycle in this action-packed game. Avoid obstacles and reach the finish line as quickly as possible.",
    category: "Racing",
    url: "https://html5gameshq.com/iframed/moto-x3m",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsliV_oChJ_QvMNNsuGu8RMdkxxXbRSdOyxMzs4nV6n2SpzzyH",
    popularity: 5
  },
  // Other games would be defined here
};

const GamePage = () => {
  const { gameId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [game, setGame] = useState<any>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Simulate loading the game
    setIsLoading(true);
    
    // Get game data (in a real app, this would be an API call)
    if (gameId && GAMES[gameId as keyof typeof GAMES]) {
      setGame(GAMES[gameId as keyof typeof GAMES]);
      
      // Notify that the game is loading
      toast({
        title: "Loading game...",
        description: `${GAMES[gameId as keyof typeof GAMES].title} is being loaded`,
      });
      
      // Simulate loading time
      const timer = setTimeout(() => {
        setIsLoading(false);
        toast({
          title: "Game Ready!",
          description: "Enjoy playing!",
        });
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [gameId]);

  const toggleFullscreen = () => {
    const gameFrame = document.getElementById("game-frame");
    if (gameFrame) {
      if (!isFullscreen) {
        if (gameFrame.requestFullscreen) {
          gameFrame.requestFullscreen();
        }
        setIsFullscreen(true);
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
        setIsFullscreen(false);
      }
    }
  };

  if (!gameId || !game) {
    return (
      <div className="min-h-screen bg-neura-dark text-white">
        <Navbar />
        <div className="pt-16 container mx-auto px-4 py-12">
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <h1 className="text-3xl font-bold mb-4">Game not found</h1>
            <p className="mb-6">Sorry, the game you're looking for doesn't exist.</p>
            <Link to="/">
              <Button className="bg-neura-primary hover:bg-neura-primary/80">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neura-dark text-white">
      <Navbar />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="outline" size="icon" className="rounded-full">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <h1 className="text-3xl font-bold animate-fade-in">{game.title}</h1>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline"
                className="bg-neura-primary/20 hover:bg-neura-primary/40 border border-neura-primary/40"
                onClick={toggleFullscreen}
              >
                <Play className="mr-2 h-4 w-4" /> Full Screen
              </Button>
            </div>
          </div>
          
          <div className="bg-neura-dark-accent rounded-xl overflow-hidden border border-neura-dark-card shadow-lg animate-fade-in">
            {isLoading ? (
              <div className="flex items-center justify-center min-h-[600px]">
                <div className="text-center">
                  <div className="w-16 h-16 border-t-4 border-neura-primary rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-neura-primary">Loading {game.title}...</p>
                </div>
              </div>
            ) : (
              <div className="relative pb-[56.25%] h-0">
                <iframe 
                  id="game-frame"
                  src={game.url}
                  title={game.title}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  sandbox="allow-same-origin allow-scripts allow-forms"
                  loading="lazy"
                ></iframe>
              </div>
            )}
          </div>
          
          <div className="my-8 animate-fade-in animate-delay-200">
            <h2 className="text-2xl font-bold mb-4">About {game.title}</h2>
            <p className="text-gray-300 mb-6">{game.description}</p>
            
            <div className="flex gap-4 items-center mb-6">
              <div className="bg-neura-dark-accent px-4 py-2 rounded-full border border-neura-primary/30">
                {game.category}
              </div>
              <div className="flex items-center">
                <span className="mr-2">Popularity:</span>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span 
                      key={index} 
                      className={`w-2 h-2 rounded-full mx-0.5 ${
                        index < game.popularity ? 'bg-neura-primary' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GamePage;
