
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neura-dark-accent border-t border-neura-primary/20 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-xl font-extrabold text-gradient">NeuraX<span className="text-white">Games</span></span>
            </Link>
            <p className="text-gray-400 mb-4">
              Your ultimate destination for unblocked gaming experiences. Play instantly on any device.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-neura-primary transition-colors">Action Games</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-neura-primary transition-colors">Adventure Games</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-neura-primary transition-colors">Puzzle Games</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-neura-primary transition-colors">Strategy Games</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-neura-primary transition-colors">Racing Games</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-neura-primary transition-colors">Home</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-neura-primary transition-colors">Trending</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-neura-primary transition-colors">New Games</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-neura-primary transition-colors">Top Rated</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-neura-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-neura-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-neura-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neura-primary/10 text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} NeuraXGames. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
