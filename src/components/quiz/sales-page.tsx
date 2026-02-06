'use client';

import type { PersonalizedSleepPlanOutput } from '@/ai/flows/personalized-sleep-plan';
import ResultsSection from './results-section';
import { trackEvent } from '@/lib/analytics';
import { useEffect } from 'react';
import { Button } from '../ui/button';
import { ArrowLeft, Info } from 'lucide-react';
import WhatYouGetSection from './what-you-get-section';
import BonusSection from './bonus-section';
import BeforeAfterSection from './before-after-section';
import PlansSection from './plans-section';
import GuaranteeSection from './guarantee-section';
import FaqSection from './faq-section';

type SalesPageProps = {
  plan: PersonalizedSleepPlanOutput;
  onBack: () => void;
};

export default function SalesPage({ plan, onBack }: SalesPageProps) {
    useEffect(() => {
        trackEvent('opened_offer');
    }, []);

  return (
    <div className="bg-background relative">
      <Button
          variant="ghost"
          onClick={onBack}
          className="absolute top-4 left-4 z-10 text-muted-foreground hover:text-foreground"
        >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Voltar
      </Button>
      <div className="container mx-auto max-w-5xl space-y-16 px-4 py-8 md:space-y-24 md:py-16">
        <ResultsSection plan={plan} />
        <BeforeAfterSection />
        <WhatYouGetSection />
        <div className="space-y-6">
          <BonusSection />
          <div className="flex flex-col items-center gap-6 text-center">
              <div className="flex w-full max-w-md items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4 text-left">
                  <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary/80" />
                  <p className="text-sm text-foreground/90">
                      Esses bônus foram criados para acelerar sua adaptação ao Método Sono Militar e facilitar seus primeiros resultados. <strong>Disponíveis somente hoje.</strong>
                  </p>
              </div>
              <a href="#pricing" className="w-full max-w-md">
                <Button size="lg" className="w-full animate-pulse-cta text-lg font-bold">
                    QUERO MEUS 5 BÔNUS EXCLUSIVOS!
                </Button>
              </a>
          </div>
        </div>
        <PlansSection />
        <div className="space-y-8 md:space-y-10">
          <GuaranteeSection />
          <div className="flex justify-center text-center">
            <a href="#pricing" className="w-full max-w-lg">
                <Button size="lg" className="w-full animate-pulse-cta text-xl font-bold h-16">
                    QUERO DORMIR MELHOR AGORA
                </Button>
            </a>
          </div>
          <FaqSection />
        </div>
      </div>
    </div>
  );
}
