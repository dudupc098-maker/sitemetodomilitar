'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { XCircle, CheckCircle2 } from 'lucide-react';

export default function BeforeAfterSection() {
  const beforeImage = PlaceHolderImages.find((img) => img.id === 'before-sleep');
  const afterImage = PlaceHolderImages.find((img) => img.id === 'after-sleep');

  return (
    <section className="w-full animate-fade-in-up">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">
          Sua transformação começa hoje
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
          De noites frustrantes a manhãs com energia e controle.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4">
        {/* Antes */}
        <div className="flex flex-col rounded-lg border border-border/70 bg-card/40 p-4 text-center shadow-sm md:p-6">
          <div className="mb-4 flex items-center justify-center gap-2">
            <XCircle className="h-6 w-6 text-destructive md:h-7 md:w-7" />
            <h3 className="font-headline text-xl font-semibold text-foreground md:text-2xl">ANTES</h3>
          </div>
          <div className="relative mb-6 aspect-[3/4] w-full overflow-hidden rounded-md">
            {beforeImage && (
              <Image
                src={beforeImage.imageUrl}
                alt={beforeImage.description}
                fill
                className="object-cover"
                data-ai-hint={beforeImage.imageHint}
              />
            )}
          </div>
          <ul className="space-y-3 text-left text-card-foreground">
            <li className="flex items-start gap-2 md:gap-3">
              <XCircle className="mt-1 h-5 w-5 shrink-0 text-destructive/80" />
              <span className="text-sm md:text-base">Mente acelerada e ansiosa na hora de dormir.</span>
            </li>
            <li className="flex items-start gap-2 md:gap-3">
              <XCircle className="mt-1 h-5 w-5 shrink-0 text-destructive/80" />
              <span className="text-sm md:text-base">Acorda cansado, mesmo após "dormir" a noite toda.</span>
            </li>
            <li className="flex items-start gap-2 md:gap-3">
               <XCircle className="mt-1 h-5 w-5 shrink-0 text-destructive/80" />
              <span className="text-sm md:text-base">Frustração por não conseguir descansar de verdade.</span>
            </li>
          </ul>
        </div>

        {/* Depois */}
        <div className="flex flex-col rounded-lg border-2 border-primary bg-card p-4 text-center shadow-lg shadow-primary/10 md:p-6">
          <div className="mb-4 flex items-center justify-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-primary md:h-7 md:w-7" />
            <h3 className="font-headline text-xl font-semibold text-primary md:text-2xl">DEPOIS</h3>
          </div>
          <div className="relative mb-6 aspect-[3/4] w-full overflow-hidden rounded-md">
            {afterImage && (
              <Image
                src={afterImage.imageUrl}
                alt={afterImage.description}
                fill
                className="object-cover"
                data-ai-hint={afterImage.imageHint}
              />
            )}
          </div>
          <ul className="space-y-3 text-left text-card-foreground">
            <li className="flex items-start gap-2 md:gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm md:text-base">Mente calma ao deitar.</span>
            </li>
            <li className="flex items-start gap-2 md:gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm md:text-base">Acorda descansado e com energia.</span>
            </li>
            <li className="flex items-start gap-2 md:gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm md:text-base">Sensação de controle e tranquilidade ao acordar.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
