'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { quizData } from '@/lib/quiz-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ReportModal from './report-modal';

type AuthoritySectionProps = {
  onContinue: () => void;
};

export default function AuthoritySection({ onContinue }: AuthoritySectionProps) {
  return (
    <div className="w-full max-w-4xl animate-fade-in-up space-y-8">
       <div className="text-center">
            <h2 className="font-headline text-2xl font-bold md:text-3xl">
            👀 Veja Como Matérias Falam da Técnica Militar Para Dormir em 2 Minutos
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
            NÃO É ACHISMO, É CIÊNCIA!
            </p>
       </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {quizData.authorityArticles.map((article) => {
            const image = PlaceHolderImages.find((img) => img.id === article.imageUrlId);
            return (
              <CarouselItem key={article.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                 <ReportModal
                    title={article.title}
                    source={article.source}
                    image={image}
                 >
                    <Card className="cursor-pointer overflow-hidden transition-shadow hover:shadow-primary/20 hover:shadow-lg">
                        <CardContent className="flex aspect-video flex-col justify-between p-0">
                        <div className="relative h-3/5 w-full">
                            {image && (
                            <Image
                                src={image.imageUrl}
                                alt={article.title}
                                fill
                                className="object-cover"
                                data-ai-hint={image.imageHint}
                            />
                            )}
                        </div>
                        <div className="flex-1 p-4">
                            <h3 className="font-bold">{article.title}</h3>
                            <p className="text-sm text-muted-foreground">{article.source}</p>
                        </div>
                        </CardContent>
                    </Card>
                 </ReportModal>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
      <div className="text-center">
        <Button onClick={onContinue} size="lg">CONTINUAR</Button>
      </div>
    </div>
  );
}
