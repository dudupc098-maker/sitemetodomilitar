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
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold md:text-4xl">
                    Acesso a <span className="text-primary">Área de Membros</span>
                </h2>
                <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
                    Após adquirir o nosso método, você terá acesso automático via e-mail a essa área de <span className="text-primary">conteúdos exclusivos</span>.
                </p>
            </div>
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
        </div>
    </section>
  );
}
