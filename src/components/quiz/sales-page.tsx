'use client';

import { trackEvent } from '@/lib/analytics';
import { useEffect } from 'react';
import { Button } from '../ui/button';
import { Info } from 'lucide-react';
import WhatYouGetSection from './what-you-get-section';
import BonusSection from './bonus-section';
import BeforeAfterSection from './before-after-section';
import ResultsSection from './results-section';
import type { PersonalizedSleepPlanOutput } from '@/ai/flows/personalized-sleep-plan';
import Link from 'next/link';
import MicroReinforcementSection from './micro-reinforcement-section';
import MembersAreaMockup from './members-area-mockup';

type SalesPageProps = {
    plan: PersonalizedSleepPlanOutput;
    answers: Record<string, string>;
};

export default function SalesPage({ plan, answers }: SalesPageProps) {
    useEffect(() => {
        trackEvent('opened_offer', {
            ...answers
        });
    }, [answers]);
    
  return (
    <div className="relative">
      <ResultsSection plan={plan} answers={answers} />
      <div className="bg-background">
        <div className="container mx-auto max-w-5xl space-y-16 px-4 py-8 md:space-y-24 md:py-16">
            <BeforeAfterSection />
            <MicroReinforcementSection />
            <WhatYouGetSection />
            <div className="flex justify-center text-center">
                <Link href="#bonus" scroll={false} className="w-full max-w-lg">
                    <Button size="lg" className="w-full animate-pulse-cta text-xl font-bold h-16">
                        GARANTIR ACESSO AGORA
                    </Button>
                </Link>
            </div>
            <div className="space-y-6">
            <BonusSection />
            <div className="flex flex-col items-center gap-6 text-center">
                <div className="flex w-full max-w-md items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4 text-left">
                    <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary/80" />
                    <p className="text-sm text-foreground/90">
                        Esses bônus foram criados para acelerar sua adaptação ao Método Sono Militar e facilitar seus primeiros resultados. <strong>Disponíveis somente hoje.</strong>
                    </p>
                </div>
                <Link href="#members-area" scroll={false} className="w-full max-w-md">
                    <Button size="lg" className="w-full animate-pulse-cta text-xl font-bold h-16">
                        QUERO MEUS 5 BÔNUS EXCLUSIVOS
                    </Button>
                </Link>
            </div>
            </div>
            <MembersAreaMockup />
            <div className="flex justify-center text-center">
                <Link href="/page2" className="w-full max-w-lg">
                    <Button size="lg" className="w-full animate-pulse-cta text-xl font-bold h-16">
                        DESBLOQUEAR MÉTODO AGORA
                    </Button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
