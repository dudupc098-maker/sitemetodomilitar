'use client';

import type { PersonalizedSleepPlanOutput } from '@/ai/flows/personalized-sleep-plan';
import ResultsSection from './results-section';
import { trackEvent } from '@/lib/analytics';
import { useEffect } from 'react';
import { Button } from '../ui/button';
import { ArrowLeft } from 'lucide-react';
import MethodAuthoritySection from './method-authority-section';

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
        <MethodAuthoritySection />
      </div>
    </div>
  );
}
