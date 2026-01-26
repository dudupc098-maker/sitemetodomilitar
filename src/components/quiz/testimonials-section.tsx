'use client';

import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { quizData } from '@/lib/quiz-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BadgeCheck } from 'lucide-react';

export default function TestimonialsSection() {
    return (
      <section>
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Resultados Reais — Pessoas Reais
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
            Veja quem já recuperou noites profundas com o Método Sono Militar.
          </p>
        </div>
  
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {quizData.testimonials.map((testimonial) => {
            const image = PlaceHolderImages.find((img) => img.id === testimonial.imageUrlId);
            return (
              <Card key={testimonial.id} className="flex flex-col bg-card/80">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className='h-12 w-12'>
                      {image && (
                          <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />
                      )}
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="font-semibold">{testimonial.name}</p>
                        <BadgeCheck className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="italic text-muted-foreground">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    );
}