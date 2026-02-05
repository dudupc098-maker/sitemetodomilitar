'use client';

import { Button } from '@/components/ui/button';
import { quizData } from '@/lib/quiz-data';
import { bonusData } from '@/lib/bonus-data';
import { Check, Gift } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function PlansSection() {
    const plan = quizData.pricing.main;

    const handleCtaClick = () => {
        trackEvent('purchase_completed', { price: plan.price });
        // In a real app, this would redirect to a checkout page.
        console.log('Redirecting to checkout for price:', plan.price);
    }

  return (
    <section id="pricing" className="w-full scroll-mt-24 animate-fade-in-up py-16 bg-background">
      <div className="mx-auto max-w-lg sm:max-w-xl rounded-2xl bg-black p-6 sm:p-8 text-white shadow-2xl">
        
        <div className="text-center">
            <div className="inline-block rounded-md bg-yellow-400 px-3 py-1 text-sm font-bold uppercase text-black tracking-wider">
                Método
            </div>
            <h2 className="mt-2 font-bold text-4xl sm:text-5xl tracking-tight">SONO MILITAR</h2>
        </div>

        <ul className="mt-10 space-y-4 text-left text-lg">
          {plan.features
            .filter(feature => !feature.toLowerCase().includes('bônus'))
            .map((feature, i) => (
            <li key={i} className="flex items-center gap-4">
              <Check className="h-7 w-7 shrink-0 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-10 flex justify-center">
            <div className="inline-block rounded-full bg-yellow-400 px-10 py-2.5 font-bold text-black text-xl">
                BÔNUS
            </div>
        </div>

        <ul className="mt-8 space-y-4 text-left text-lg">
            {bonusData.map((bonus) => (
                <li key={bonus.title} className="flex items-center gap-4">
                    <Gift className="h-7 w-7 shrink-0 text-yellow-400" />
                    <span>{bonus.title}</span>
                </li>
            ))}
        </ul>
        
        <div className="mt-12 text-center">
            <div className="inline-block rounded-lg bg-red-600 px-6 py-2">
                <span className="text-xl font-medium line-through">De R${plan.originalPrice}</span>
            </div>
            <p className="mt-6 text-lg text-gray-300">Por apenas</p>
            <p className="text-6xl font-bold tracking-tighter text-[#22c55e]">R$37,00</p>
        </div>

        <p className="mt-4 text-center font-bold text-white">SOMENTE HOJE!</p>

        <div className="mt-4 flex justify-center">
            <Button 
                size="lg" 
                className="rounded-full bg-[#02990e] hover:bg-[#02990e]/90 text-xl font-bold text-white h-16 shadow-md px-8"
                onClick={handleCtaClick}
            >
                QUERO DORMIR MELHOR AGORA
            </Button>
        </div>
        
        <div className="mt-10 flex flex-col items-center justify-center gap-6 text-center sm:flex-row sm:gap-8">
            {quizData.guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-400">
                    <guarantee.icon className="h-5 w-5 text-green-500" />
                    <span className="font-medium text-sm">{guarantee.text}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
