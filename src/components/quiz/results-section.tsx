'use client';

import type { PersonalizedSleepPlanOutput } from '@/ai/flows/personalized-sleep-plan';
import { Card } from '@/components/ui/card';
import { CheckCircle, ShieldCheck, Zap, Clock } from 'lucide-react';

type ResultsSectionProps = {
  plan: PersonalizedSleepPlanOutput;
  answers: Record<string, string>;
};

const q7Mapping: Record<string, string> = {
  A: 'Mente acelerada',
  B: 'Estímulos de tela',
  C: 'Ansiedade',
  D: 'Despertares noturnos',
};

export default function ResultsSection({ plan, answers }: ResultsSectionProps) {
  const principalIssue = q7Mapping[answers.q7] || 'Mente acelerada';
  const minutesToSleep = answers.q5 || 'N/A';
  const hoursOfSleep = answers.q6 || 'N/A';

  return (
    <section className="w-full animate-fade-in-up bg-white py-12 md:py-20">
      <div className="container mx-auto max-w-4xl px-5 text-center">
        <h1 className="text-2xl font-bold text-[#0F1720] md:text-3xl">
          Seu <span className="text-primary">diagnóstico</span> do sono está pronto!
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-[#505D6A] md:text-lg">
          Suas respostas mostram dificuldade para dormir à noite. Por isso, selecionamos o <span className="font-semibold text-primary">Método Sono Militar</span> para fazer você dormir rápido e acordar realmente descansado.
        </p>
        <div className="mt-8">
          <Card className="mx-auto max-w-2xl transform rounded-xl border-border/50 bg-white p-4 text-left shadow-[0_8px_24px_rgba(2,6,23,0.06)] transition-all duration-200 hover:translate-y-[-4px] hover:shadow-lg md:p-6">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 rounded-full bg-green-100 p-0.5 text-green-600" />
                <p className="text-sm font-semibold text-gray-700">
                  Perfil analisado • Diagnóstico personalizado • Método definido
                </p>
              </div>
              <div className="rounded-lg bg-primary/5 p-4">
                <p className="text-sm text-[#505D6A]">
                  Seu perfil:{' '}
                  <span className="font-bold text-primary">{principalIssue}</span> • Demora{' '}
                  <span className="font-bold text-primary">{minutesToSleep}</span> minutos para pegar no sono • Dorme{' '}
                  <span className="font-bold text-primary">{hoursOfSleep}</span>h por noite
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
