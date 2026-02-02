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
    <div className="w-full max-w-2xl animate-fade-in-up space-y-8 text-center">
      <h1 className="font-headline text-3xl font-bold text-foreground md:text-5xl">
        Descubra Como o <span className="text-primary">Método Sono Militar</span> Faz Você Dormir em Menos de <span className="text-primary">2 MINUTOS</span>
      </h1>
      <Card className="border-0 bg-transparent shadow-none">
        <CardContent className="flex flex-col items-center justify-center space-y-6 p-4 md:space-y-8 md:p-6">
          {heroImage && (
            <div className="relative aspect-[16/10] w-full max-w-md overflow-hidden rounded-lg shadow-2xl shadow-primary/10">
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

          <div className="space-y-4">
            <p className="max-w-xl text-lg text-muted-foreground">
              Teste rápido (60s): descubra o que está <span className="font-bold">sabotando seu sono</span>.
            </p>

            <div className="flex justify-center py-2">
              <div className="space-y-1 text-left text-foreground">
                <p>❌ Sem remédios</p>
                <p>❌ Sem técnicas complicadas</p>
                <p>❌ Sem mudar sua rotina</p>
              </div>
            </div>
          </div>

          <Button onClick={onStart} size="lg" className="w-full max-w-sm animate-pulse-cta text-lg font-bold">
            QUERO DESCOBRIR AGORA!
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
