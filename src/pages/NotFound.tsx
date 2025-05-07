
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-neura-dark text-white">
      <Navbar />
      <div className="pt-16">
        <div className="min-h-[70vh] flex flex-col items-center justify-center py-20">
          <div className="text-center max-w-2xl mx-auto px-4">
            <h1 className="text-9xl font-extrabold mb-4 text-gradient animate-glitch">404</h1>
            <p className="text-2xl text-gray-300 mb-8 animate-fade-in">Game not found</p>
            <p className="text-gray-400 mb-8 animate-fade-in animate-delay-100">
              The game you're looking for might have been moved, deleted, or never existed in the first place.
            </p>
            <Button className="bg-neura-primary hover:bg-neura-primary/80 text-white px-8 py-6 animate-fade-in animate-delay-200">
              Return to Homepage
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
