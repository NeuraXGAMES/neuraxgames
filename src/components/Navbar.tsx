
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem
} from "@/components/ui/command";

// Game data for search
const GAMES = {
  "game1": {
    id: "game1",
    title: "Snow Rider 3D",
    category: "Racing"
  },
  "moto-x3m": {
    id: "moto-x3m",
    title: "Moto X3M",
    category: "Racing"
  }
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  // Filter games based on search term
  const filteredGames = searchTerm === "" 
    ? [] 
    : Object.values(GAMES).filter(game => 
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.category.toLowerCase().includes(searchTerm.toLowerCase())
      );

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredGames.length === 1) {
      navigate(`/game/${filteredGames[0].id}`);
      setSearchTerm("");
    }
  };

  // Handle game selection from command menu
  const handleSelectGame = (gameId: string) => {
    setIsSearchOpen(false);
    navigate(`/game/${gameId}`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neura-dark/80 backdrop-blur-md border-b border-neura-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-extrabold text-gradient">NeuraX<span className="text-white">Games</span></span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-white hover:text-neura-primary transition-colors">Home</Link>
              <Link to="/categories" className="text-white hover:text-neura-primary transition-colors">Categories</Link>
              <Link to="/trending" className="text-white hover:text-neura-primary transition-colors">Trending</Link>
              <Link to="/new" className="text-white hover:text-neura-primary transition-colors">New Games</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <form onSubmit={handleSearch}>
                <Input
                  type="text"
                  placeholder="Search games..."
                  className="bg-neura-dark-accent rounded-full pl-10 pr-4 py-2 text-sm border border-neura-primary/30 focus:border-neura-primary focus:outline-none w-[200px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onClick={() => setIsSearchOpen(true)}
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/50" />
              </form>
            </div>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:text-neura-primary md:hidden"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="text-white hover:text-neura-primary">
              <User className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:text-neura-primary md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-neura-primary/20 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-neura-primary transition-colors">Home</Link>
              <Link to="/categories" className="text-white hover:text-neura-primary transition-colors">Categories</Link>
              <Link to="/trending" className="text-white hover:text-neura-primary transition-colors">Trending</Link>
              <Link to="/new" className="text-white hover:text-neura-primary transition-colors">New Games</Link>
              
              <div className="relative mt-2">
                <Input
                  type="text"
                  placeholder="Search games..."
                  className="bg-neura-dark-accent rounded-full pl-10 pr-4 py-2 text-sm border border-neura-primary/30 focus:border-neura-primary focus:outline-none w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onClick={() => setIsSearchOpen(true)}
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/50" />
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Command dialog for search results */}
      <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <CommandInput 
          placeholder="Search games..." 
          value={searchTerm}
          onValueChange={setSearchTerm}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Games">
            {filteredGames.map((game) => (
              <CommandItem
                key={game.id}
                onSelect={() => handleSelectGame(game.id)}
                className="flex items-center cursor-pointer"
              >
                <div className="flex flex-col">
                  <span>{game.title}</span>
                  <span className="text-xs text-gray-500">{game.category}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
};

export default Navbar;
