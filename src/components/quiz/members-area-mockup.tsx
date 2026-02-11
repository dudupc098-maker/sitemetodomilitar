'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function MembersAreaMockup() {
  const membersAreaImage = PlaceHolderImages.find(
    (img) => img.id === 'members-area-mockup'
  );

  return (
    <section className="w-full animate-fade-in-up">
        <div className="flex flex-col items-center gap-8">
            <div className="relative aspect-video w-full max-w-3xl overflow-hidden rounded-lg shadow-2xl">
            {membersAreaImage && (
                <Image
                src={membersAreaImage.imageUrl}
                alt={membersAreaImage.description}
                fill
                className="object-cover"
                data-ai-hint={membersAreaImage.imageHint}
                />
            )}
            </div>
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">
                    Veja como funciona por dentro
                </h2>
                <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
                    Acesso simples, organizado e direto ao ponto para você começar hoje mesmo.
                </p>
            </div>
        </div>
    </section>
  );
}
