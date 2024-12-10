import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { EventCard } from './EventCard';
import type { Event } from '@/types/event';

interface EventCarouselProps {
  events: Event[];
}

export function EventCarousel({ events }: EventCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12"
    >
      <CarouselContent className="-ml-2 sm:-ml-4">
        {events.map((event) => (
          <CarouselItem key={event.id} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
            <div className="h-full">
              <EventCard {...event} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden sm:block">
        <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-12" />
        <CarouselNext className="hidden sm:flex -right-4 lg:-right-12" />
      </div>
    </Carousel>
  );
}