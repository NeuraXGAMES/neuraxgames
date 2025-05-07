
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Menu, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <input
                type="text"
                placeholder="Search games..."
                className="bg-neura-dark-accent rounded-full pl-10 pr-4 py-2 text-sm border border-neura-primary/30 focus:border-neura-primary focus:outline-none w-[200px]"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/50" />
            </div>
            
            <Button variant="ghost" size="icon" className="text-white hover:text-neura-primary md:hidden">
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
                <input
                  type="text"
                  placeholder="Search games..."
                  className="bg-neura-dark-accent rounded-full pl-10 pr-4 py-2 text-sm border border-neura-primary/30 focus:border-neura-primary focus:outline-none w-full"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/50" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
