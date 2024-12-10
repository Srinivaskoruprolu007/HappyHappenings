import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from '../ui/Link';
import { Button } from '../ui/button';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  image: string;
  bookingUrl: string;
  description: string;
}

export function EventCard({ title, date, location, image, bookingUrl, description }: EventCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-card rounded-xl shadow-lg overflow-hidden border border-border/50 hover:border-accent/50 transition-colors h-full"
    >
      <div className="relative overflow-hidden aspect-[4/3] group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-balance">{title}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2 text-accent" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2 text-accent" />
            <span>{location}</span>
          </div>
        </div>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <Button 
          asChild
          className="w-full"
        >
          <Link href={bookingUrl} className="inline-flex items-center justify-center">
            Book Now
            <ExternalLink className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}