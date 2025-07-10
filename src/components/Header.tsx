
import React, { useState } from 'react';
import { Menu, X, Shield, Users, BookOpen, TrendingUp, MessageCircle, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home', icon: null },
    { name: 'Education Hub', href: '#education', icon: BookOpen },
    { name: 'Trading', href: '#trading', icon: TrendingUp },
    { name: 'Compliance', href: '#compliance', icon: Shield },
    { name: 'Community', href: '#community', icon: Users },
    { name: 'Blog', href: '#blog', icon: Newspaper },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-kenyan-green to-kenyan-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-xl font-montserrat font-bold text-kenyan-green">KryptoKenya</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-kenyan-green transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-kenyan-green text-kenyan-green hover:bg-kenyan-green hover:text-white">
              Login
            </Button>
            <Button className="bg-kenyan-green hover:bg-kenyan-green/90 text-white">
              Start Trading
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-kenyan-green transition-colors duration-200 font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center space-x-2">
                    {item.icon && <item.icon className="h-4 w-4" />}
                    <span>{item.name}</span>
                  </div>
                </a>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-200">
                <Button variant="outline" className="border-kenyan-green text-kenyan-green hover:bg-kenyan-green hover:text-white w-full">
                  Login
                </Button>
                <Button className="bg-kenyan-green hover:bg-kenyan-green/90 text-white w-full">
                  Start Trading
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
