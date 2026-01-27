'use client';

import type { PersonalizedSleepPlanOutput } from '@/ai/flows/personalized-sleep-plan';
import ResultsSection from './results-section';
import SalesPointsSection from './sales-points-section';
import TestimonialsSection from './testimonials-section';
import PlansSection from './plans-section';
import StickyCta from './sticky-cta';
import { trackEvent } from '@/lib/analytics';
import { useEffect } from 'react';
import { Button } from '../ui/button';
import { ArrowLeft } from 'lucide-react';

type SalesPageProps = {
  plan: PersonalizedSleepPlanOutput;
  onBack: () => void;
};

export default function SalesPage({ plan, onBack }: SalesPageProps) {
    useEffect(() => {
        trackEvent('opened_offer');
    }, []);

    const scrollToPlans = () => {
        document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
    }

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
      <div className="container mx-auto max-w-4xl space-y-16 px-4 py-8 md:space-y-24 md:py-16">
        <ResultsSection plan={plan} onCtaClick={scrollToPlans} />
        <SalesPointsSection onCtaClick={scrollToPlans} />
        <TestimonialsSection />
        <PlansSection />
      </div>
      <StickyCta>
        <Button size="lg" className="w-full font-bold" onClick={scrollToPlans}>
            QUERO O PLANO PRÓ
        </Button>
      </StickyCta>
    </div>
  );
}
