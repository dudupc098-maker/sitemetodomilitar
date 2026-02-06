'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function GuaranteeSection() {
  const guaranteeImage = PlaceHolderImages.find(
    (img) => img.id === 'guarantee-seal'
  );
  return (
    <section className="w-full animate-fade-in-up py-16">
      <Card className="mx-auto max-w-2xl border-green-500/20 bg-card/40 p-6 text-center shadow-lg shadow-green-500/10 sm:p-8">
        <div className="flex flex-col items-center space-y-4">
          {guaranteeImage && (
            <div className="relative h-20 w-56">
              <Image
                src={guaranteeImage.imageUrl}
                alt={guaranteeImage.description}
                fill
                className="object-contain"
                data-ai-hint={guaranteeImage.imageHint}
              />
            </div>
          )}
          <p className="max-w-prose pt-2 text-base text-foreground/80">
            Confiamos tanto no conteúdo que entregamos, que se não fizer sentido para você, pode pedir seu dinheiro de volta em até 7 dias. Simples assim, RISCO ZERO.
          </p>
        </div>
      </Card>
    </section>
  );
}
