
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-neura-dark">
      {/* Animated background with lines */}
      <div className="absolute inset-0 bg-hero-pattern"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-neura-dark via-transparent to-neura-primary/10"></div>
      
      {/* Content */}
      <div className="relative container mx-auto h-full flex flex-col justify-center px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in neon-glow">
          <span className="text-gradient">NeuraXGames</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8 animate-fade-in animate-delay-100">
          Experience the future of gaming with our unblocked collection of immersive titles. Play instantly on any device.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-200">
          <Button className="bg-neura-primary hover:bg-neura-primary/80 text-white px-8 py-6">
            Play Now
          </Button>
          <Button variant="outline" className="border-neura-primary text-neura-primary hover:bg-neura-primary/10 px-8 py-6">
            Browse Games
          </Button>
        </div>
        
        {/* Animated circles for visual effect */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-neura-primary/10 blur-3xl animate-float"></div>
        <div className="absolute -top-10 right-10 w-32 h-32 rounded-full bg-neura-secondary/10 blur-2xl animate-float animate-delay-300"></div>
      </div>
    </section>
  );
};

export default Hero;
