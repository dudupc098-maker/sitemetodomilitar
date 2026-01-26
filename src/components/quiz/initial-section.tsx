'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { quizData } from '@/lib/quiz-data';
import { cn } from '@/lib/utils';
import type { LucideProps } from 'lucide-react';

type InitialSectionProps = {
  onStart: () => void;
};

export default function InitialSection({ onStart }: InitialSectionProps) {
  const [headline, setHeadline] = useState(quizData.headlines[0]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // A/B Test for headline
    const randomHeadline = quizData.headlines[Math.floor(Math.random() * quizData.headlines.length)];
    setHeadline(randomHeadline);
  }, []);

  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

  return (
    <div className="w-full max-w-4xl animate-fade-in-up">
      <Card className="overflow-hidden border-0 bg-transparent shadow-none md:border md:bg-card md:shadow-lg">
        <div className="grid items-center md:grid-cols-2">
          <div className="space-y-6 p-6 md:p-8">
            <h1 className="font-headline text-2xl font-bold text-white md:text-4xl">
              {headline}
            </h1>
            <p className="text-lg text-muted-foreground">
              Teste rápido: em 60s vamos diagnosticar o que impede seu descanso e mostrar um plano prático.
            </p>
            <ul className="space-y-3">
              {quizData.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <benefit.icon className="h-6 w-6 shrink-0 text-accent" />
                  <span className="text-base font-medium">{benefit.text}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
                <Button onClick={onStart} size="lg" className="w-full font-bold text-lg">
                    INICIAR TESTE
                </Button>
            </div>
          </div>
          <div className="relative hidden h-full min-h-[300px] md:block">
            {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={heroImage.imageHint}
                />
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
