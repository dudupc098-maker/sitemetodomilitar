'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { quizData } from '@/lib/quiz-data';

type SalesPointsSectionProps = {
  onCtaClick: () => void;
};

export default function SalesPointsSection({ onCtaClick }: SalesPointsSectionProps) {
  return (
    <section>
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">
          O que você vai aprender no Método Sono Militar
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
          Um passo a passo completo para transformar suas noites e seus dias.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {quizData.salesPoints.map((point, index) => (
          <div key={index} className="flex items-start gap-4">
            <point.icon className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <p className="text-lg text-muted-foreground">{point.text}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Card className="mx-auto inline-block border-primary bg-primary/10">
            <CardContent className="p-6">
                <p className="text-xl font-bold">
                    Tudo isso e muito mais está incluso no seu acesso.
                </p>
                <Button size="lg" className="mt-4 font-bold" onClick={onCtaClick}>
                    QUERO O PLANO PRÓ
                </Button>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
