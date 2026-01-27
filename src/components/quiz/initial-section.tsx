'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { quizData } from '@/lib/quiz-data';

type InitialSectionProps = {
  onStart: () => void;
};

export default function InitialSection({ onStart }: InitialSectionProps) {
  const headline = quizData.headlines[0];
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');
  
  const renderHeadline = (text: string) => {
    const parts = text.split(/(MÉTODO MILITAR|2 MINUTOS)/i);
    return (
      <>
        {parts.map((part, index) => {
          if (!part) return null;
          if (part.match(/^(MÉTODO MILITAR|2 MINUTOS)$/i)) {
            return <span key={index} className="text-yellow-400">{part}</span>;
          }
          return part;
        })}
      </>
    );
  };

  return (
    <div className="w-full max-w-4xl animate-fade-in-up">
      <Card className="overflow-hidden border-0 bg-transparent shadow-none md:border md:bg-card md:shadow-lg">
        <div className="grid items-center md:grid-cols-2">
          <div className="space-y-6 p-6 md:p-8">
            <h1 className="text-2xl font-bold text-white md:text-4xl">
              {renderHeadline(headline)}
            </h1>
            <p className="text-lg text-muted-foreground">
              Teste rápido (60s): descubra o que está sabotando seu sono e receba um plano simples para dormir mais rápido ainda hoje.
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
