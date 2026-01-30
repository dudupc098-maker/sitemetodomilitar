'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { quizData } from '@/lib/quiz-data';
import { Check } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';

export default function PlansSection() {
    const [proPrice, setProPrice] = useState(quizData.plans.pro.priceVariants[0]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // A/B Test for price
        const randomPrice = quizData.plans.pro.priceVariants[Math.floor(Math.random() * quizData.plans.pro.priceVariants.length)];
        setProPrice(randomPrice);
    }, []);

    const handleProClick = () => {
        trackEvent('clicked_pro', { price: proPrice });
    }

    const handleBasicClick = () => {
        trackEvent('clicked_basic', { price: quizData.plans.basic.price });
    }

  return (
    <section id="plans">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">
          Escolha o seu plano e comece hoje
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
          Acesso imediato. Recupere seu sono a partir desta noite.
        </p>
      </div>

      <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
        {/* Pro Plan */}
        <Card className="relative border-2 border-primary shadow-2xl shadow-primary/20">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-bold text-primary-foreground">
                MAIS POPULAR
            </div>
            <CardHeader className="pt-10">
                <CardTitle className="font-headline text-3xl">Plano Pró</CardTitle>
                <CardDescription>
                    A solução completa para um sono transformador.
                </CardDescription>
                <div className="flex items-baseline gap-2 pt-4">
                    <span className="text-4xl font-bold text-foreground">R${isMounted ? proPrice : '...'}</span>
                    <span className="text-xl font-medium text-muted-foreground line-through">R${quizData.plans.pro.originalPrice}</span>
                </div>
            </CardHeader>
            <CardContent className="space-y-3">
                {quizData.plans.pro.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                        <Check className="mt-1 h-5 w-5 shrink-0 text-accent" />
                        <span>{feature}</span>
                    </div>
                ))}
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button size="lg" className="w-full text-lg font-bold" onClick={handleProClick}>
                    ASSINAR PLANO PRÓ - R${isMounted ? proPrice : '...'}
                </Button>
                <p className="text-sm text-amber-400">Oferta por tempo limitado!</p>
            </CardFooter>
        </Card>

        {/* Basic Plan */}
        <Card className="lg:mt-8">
            <CardHeader>
                <CardTitle className="font-headline text-3xl">Plano Básico</CardTitle>
                <CardDescription>
                    O conhecimento essencial para começar.
                </CardDescription>
                <div className="flex items-baseline gap-2 pt-4">
                    <span className="text-4xl font-bold text-foreground">R${quizData.plans.basic.price.toFixed(2).replace('.',',')}</span>
                </div>
            </CardHeader>
            <CardContent className="space-y-3">
                 {quizData.plans.basic.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                        <Check className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" />
                        <span>{feature}</span>
                    </div>
                ))}
            </CardContent>
            <CardFooter className="flex-col gap-2">
                 <Button size="lg" variant="secondary" className="w-full text-lg font-bold" onClick={handleBasicClick}>
                    COMPRAR EBOOK - R${quizData.plans.basic.price.toFixed(2).replace('.',',')}
                </Button>
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
