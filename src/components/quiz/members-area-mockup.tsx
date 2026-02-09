'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Rocket, ShieldCheck, Smartphone, Users, Video } from 'lucide-react';

export default function MembersAreaMockup() {
  const membersAreaImage = PlaceHolderImages.find(
    (img) => img.id === 'members-area-mockup'
  );

  return (
    <section className="w-full animate-fade-in-up py-12 md:py-16">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-headline text-xl font-semibold md:text-3xl">
          Veja exatamente como você vai acessar a Área de Membros
        </h2>
        <p className="mt-2 max-w-2xl mx-auto text-muted-foreground text-sm md:text-base">
          Acesso imediato pelo celular, tablet ou computador — tudo organizado para resultados rápidos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
        {/* Image Placeholder Section */}
        <div className="lg:col-span-3 flex items-center justify-center">
          <div className="relative w-full max-w-2xl aspect-video rounded-lg shadow-2xl overflow-hidden">
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
        <div className="lg:col-span-2 space-y-6">
            <ul className="space-y-4 text-left">
                <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-full">
                        <Video className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground">Aulas práticas e curtas</h3>
                        <p className="text-muted-foreground text-sm">Aplique em minutos o que aprendeu, sem enrolação.</p>
                    </div>
                </li>
                <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-full">
                        <Smartphone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground">Acesso imediato no celular</h3>
                        <p className="text-muted-foreground text-sm">Aprenda onde e quando quiser, na palma da sua mão.</p>
                    </div>
                </li>
                <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-full">
                        <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground">Suporte e comunidade exclusiva</h3>
                        <p className="text-muted-foreground text-sm">Tire suas dúvidas e conecte-se com outros membros.</p>
                    </div>
                </li>
            </ul>

            <div className="space-y-3">
                 <div className="flex items-center gap-4 p-3 border border-green-500/30 bg-green-500/10 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-sm text-green-700 dark:text-green-300">Garantia de 7 Dias</h4>
                        <p className="text-xs text-green-800/80 dark:text-green-300/80">Reembolso total, sem burocracia.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-3 border border-primary/20 bg-primary/10 rounded-lg">
                    <Rocket className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-sm text-primary">Acesso Imediato</h4>
                        <p className="text-xs text-primary/80">Comece a usar assim que o pagamento for aprovado.</p>
                    </div>
                </div>
            </div>

             <div className="text-center lg:text-left">
                <Button variant="outline" className="w-full max-w-xs mx-auto lg:mx-0">
                    VER A ÁREA
                </Button>
            </div>
        </div>

      </div>
    </section>
  );
}
