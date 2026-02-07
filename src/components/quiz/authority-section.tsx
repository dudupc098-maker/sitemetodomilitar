'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";


type AuthoritySectionProps = {
  onContinue: () => void;
};

const carouselImages = [
  'https://i.imgur.com/gPmjslE.png',
  'https://i.imgur.com/xNUVJ1g.png',
  'https://i.imgur.com/ifVygSu.png',
];

export default function AuthoritySection({ onContinue }: AuthoritySectionProps) {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false })
    );

  return (
    <div className="w-full max-w-4xl animate-fade-in-up space-y-8">
       <div className="text-center">
            <h2 className="font-headline text-2xl font-bold md:text-3xl">
            👀 Veja Como Matérias Falam da Técnica Militar Para Dormir em 2 Minutos
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
            NÃO É <span className="font-bold text-destructive">ACHISMO</span>, É <span className="font-bold text-accent">CIÊNCIA</span>!
            </p>
       </div>
      <div className="-mx-4 overflow-hidden sm:mx-0 sm:rounded-lg">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.play}
        >
          <CarouselContent>
            {carouselImages.map((src, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="relative aspect-video w-full">
                      <Image
                          src={src}
                          alt={`Matéria sobre técnica militar ${index + 1}`}
                          fill
                          className="object-contain"
                      />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="text-center">
        <Button onClick={onContinue} size="lg" className="w-full max-w-sm animate-pulse-cta text-xl font-bold h-16">CONTINUAR</Button>
      </div>
    </div>
  );
}
