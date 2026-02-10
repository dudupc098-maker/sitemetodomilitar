'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Rocket, ShieldCheck, Smartphone, Users, Video, Lock, Award } from 'lucide-react';
import { CheckCircle } from 'lucide-react';

export default function MembersAreaMockup() {
  const membersAreaImage = PlaceHolderImages.find(
    (img) => img.id === 'members-area-mockup'
  );

  return (
    <section className="w-full animate-fade-in-up py-12 md:py-16">
      <div className="mb-8 text-center md:mb-12">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">
          Veja <span className="text-primary">exatamente</span> o que você vai receber
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
          Após adquirir o nosso método, você terá acesso automático via e-mail a essa área de <span className="text-primary">conteúdos exclusivos.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-5 lg:gap-12">
        {/* Image Placeholder Section */}
        <div className="flex items-center justify-center lg:col-span-3">
          <div className="relative aspect-video w-full max-w-2xl overflow-hidden rounded-lg shadow-2xl">
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

        {/* Value Points Section */}
        <div className="space-y-6 lg:col-span-2">
            <ul className="space-y-4 text-left">
                <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-full bg-primary/10 p-2">
                        <Video className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground">Aulas práticas e curtas</h3>
                        <p className="text-sm text-muted-foreground">Aplique em minutos o que aprendeu, sem enrolação.</p>
                    </div>
                </li>
                <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-full bg-primary/10 p-2">
                        <Smartphone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground">Acesso imediato no celular</h3>
                        <p className="text-sm text-muted-foreground">Aprenda onde e quando quiser, na palma da sua mão.</p>
                    </div>
                </li>
                <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-full bg-primary/10 p-2">
                        <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground">Suporte e comunidade exclusiva</h3>
                        <p className="text-sm text-muted-foreground">Tire suas dúvidas e conecte-se com outros membros.</p>
                    </div>
                </li>
            </ul>

             <div className="text-center lg:text-left">
                <a href="#pricing">
                    <Button variant="outline" className="mx-auto w-full max-w-xs lg:mx-0">
                        VER A ÁREA
                    </Button>
                </a>
            </div>
        </div>

      </div>
    </section>
  );
}
