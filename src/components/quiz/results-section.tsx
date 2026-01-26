'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { PersonalizedSleepPlanOutput } from '@/ai/flows/personalized-sleep-plan';
import { Lightbulb } from 'lucide-react';

type ResultsSectionProps = {
  plan: PersonalizedSleepPlanOutput;
  onCtaClick: () => void;
};

export default function ResultsSection({ plan, onCtaClick }: ResultsSectionProps) {
  return (
    <section className="animate-fade-in-up text-center">
      <h1 className="font-headline text-3xl font-bold text-white md:text-5xl">
        🎉 Parabéns! Seu método ideal é: <span className="text-primary">{plan.method}</span>
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
        Com base em suas respostas, o Método Sono Militar é ideal para fazer seu corpo dormir rápido em menos de 2 minutos.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {plan.insights.map((insight, index) => (
          <Card key={index} className="border-border/50 bg-card/50 text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-lg">
                <Lightbulb className="h-5 w-5 text-accent" />
                Insight #{index + 1}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{insight}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <Button size="lg" className="h-14 px-10 text-xl font-bold" onClick={onCtaClick}>
          VER MEU PLANO PERSONALIZADO
        </Button>
      </div>
    </section>
  );
}
