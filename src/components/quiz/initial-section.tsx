'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type InitialSectionProps = {
  onStart: () => void;
};

export default function InitialSection({ onStart }: InitialSectionProps) {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <div className="w-full max-w-2xl animate-fade-in-up text-center">
      <Card className="border-0 bg-transparent shadow-none">
        <CardContent className="flex flex-col items-center justify-center space-y-6 p-4 md:space-y-8 md:p-6">
          <h1 className="text-3xl font-bold text-foreground md:text-5xl">
            Descubra Agora Como Você Pode Dormir Em <span className="text-primary">Menos de 2 MINUTOS!</span>
          </h1>

          {heroImage && (
            <div className="relative w-full max-w-md aspect-[16/10] overflow-hidden rounded-lg shadow-2xl shadow-primary/10">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
                priority 
              />
            </div>
          )}

          <div className="space-y-2">
            <p className="max-w-xl text-lg text-muted-foreground">
              Teste rápido (60s): descubra o que está sabotando seu sono e receba um diagnóstico personalizado ainda hoje.
            </p>
            <p className="text-2xl">👇</p>
          </div>

          <Button onClick={onStart} size="lg" className="w-full max-w-sm text-lg font-bold">
            QUERO DESCOBRIR AGORA!
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
