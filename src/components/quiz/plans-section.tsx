'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { quizData } from '@/lib/quiz-data';
import { Check } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function PlansSection() {
    const plan = quizData.pricing.main;

    const handleCtaClick = () => {
        trackEvent('purchase_completed', { price: plan.price });
        // In a real app, this would redirect to a checkout page.
        console.log('Redirecting to checkout for price:', plan.price);
    }

  return (
    <section id="pricing" className="w-full scroll-mt-24 animate-fade-in-up">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">
          Tenha acesso imediato ao plano completo
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
          Pagamento único, acesso vitalício. Recupere seu sono a partir desta noite.
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <Card className="relative w-full max-w-lg border-2 border-primary bg-card shadow-2xl shadow-primary/20">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-bold text-primary-foreground">
                OFERTA ESPECIAL
            </div>
            <CardHeader className="pt-10 text-center">
                <CardTitle className="font-headline text-3xl">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-3 pt-4">
                    <span className="text-5xl font-bold text-foreground">R${plan.price}</span>
                    <span className="text-xl font-medium text-muted-foreground line-through">R${plan.originalPrice}</span>
                </div>
            </CardHeader>
            <CardContent className="space-y-3 px-8 pb-6">
                <div className="w-full text-left text-base font-semibold text-card-foreground">O que você recebe:</div>
                <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <Check className="mt-1 h-5 w-5 shrink-0 text-accent" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter className="flex-col gap-2 px-6 pb-6">
                <Button size="lg" className="w-full animate-pulse-cta text-lg font-bold" onClick={handleCtaClick}>
                    {plan.ctaText}
                </Button>
                 <p className="text-xs text-muted-foreground">Oferta válida somente hoje</p>
            </CardFooter>
        </Card>
      </div>
      
      <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-8">
        {quizData.guarantees.map((guarantee, index) => (
            <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <guarantee.icon className="h-6 w-6 text-accent" />
                <span className="font-medium">{guarantee.text}</span>
            </div>
        ))}
      </div>
    </section>
  );
}
