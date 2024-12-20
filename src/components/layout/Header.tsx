import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Music2, Phone, Info, Menu, X, Users } from 'lucide-react';
import { ThemeToggle } from '../ui/theme-toggle';
import { Button } from '../ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollOrNavigate = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: true }); // Navigate to the homepage
    }
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Delay for DOM readiness
    setIsMenuOpen(false);
  };

  const handleTeamNavigation = () => {
    navigate('/team'); // Navigate to the /team route
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Branding */}
          <div className="flex items-center space-x-2">
            <Music2 className="h-8 w-8 text-accent" />
            <h1 className="text-2xl font-bold text-foreground">HappyHappenings</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Button
              variant="ghost"
              onClick={() => handleScrollOrNavigate('events')}
              className="text-sm lg:text-base text-foreground hover:text-white transition"
            >
              Events
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleScrollOrNavigate('about')}
              className="flex items-center space-x-1 text-sm lg:text-base text-foreground hover:text-white transition"
            >
              <Info className="h-4 w-4" />
              <span>About</span>
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleScrollOrNavigate('contact')}
              className="flex items-center space-x-1 text-sm lg:text-base text-foreground hover:text-white transition"
            >
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </Button>
            <Button
              variant="ghost"
              onClick={handleTeamNavigation}
              className="flex items-center space-x-1 text-sm lg:text-base text-foreground hover:text-white transition"
            >
              <Users className="h-4 w-4" />
              <span>Team</span>
            </Button>
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden">
          <nav className="flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8">
            <Button
              variant="ghost"
              onClick={() => handleScrollOrNavigate('events')}
              className="text-lg sm:text-xl"
            >
              Events
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleScrollOrNavigate('about')}
              className="text-lg sm:text-xl"
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleScrollOrNavigate('contact')}
              className="text-lg sm:text-xl"
            >
              Contact
            </Button>
            <Button
              variant="ghost"
              onClick={handleTeamNavigation}
              className="text-lg sm:text-xl"
            >
              Team
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
