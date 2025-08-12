import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Featured Listings', path: '/' },
    { name: 'For Lease', path: '/lease' },
    { name: 'Just Sold', path: '/sold' },
    { name: 'Meet Alexandra Baker', path: '/about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-bold text-foreground hover:text-primary transition-colors">
            A<span className="text-primary">S</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path 
                    ? 'text-primary' 
                    : 'text-foreground/80'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <Button 
            size="sm" 
            className="bg-gradient-luxury text-primary-foreground hover:shadow-gold transition-all duration-300"
          >
            <Phone className="w-4 h-4 mr-2" />
            Contact
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 pt-4 border-t border-border">
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path 
                    ? 'text-primary' 
                    : 'text-foreground/80'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
