import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { Link } from '../ui/Link';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">HappyHappening</h3>
            <p className="text-muted-foreground">Bringing the best concerts to your city!</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#events" 
                  className="text-muted-foreground hover:text-accent transition"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link 
                  href="#about" 
                  className="text-muted-foreground hover:text-accent transition"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="text-muted-foreground hover:text-accent transition"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-accent transition">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-accent transition">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-accent transition">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://youtube.com" className="text-muted-foreground hover:text-accent transition">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} HappyHappening. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}