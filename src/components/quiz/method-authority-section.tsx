'use client';

import { BrainCircuit, ShieldCheck, Clock, UserCheck } from 'lucide-react';

const authorityPoints = [
  {
    icon: BrainCircuit,
    title: 'Método Estruturado',
    description:
      'Uma sequência passo a passo que reprograma a resposta do seu corpo ao sono.',
  },
  {
    icon: ShieldCheck,
    title: 'Sequência Comprovada',
    description:
      'Baseado em técnicas usadas por militares para garantir o descanso em condições extremas.',
  },
  {
    icon: Clock,
    title: 'Aplicação Imediata',
    description:
      'Aprenda e aplique na mesma noite, sem precisar de equipamentos ou suplementos.',
  },
  {
    icon: UserCheck,
    title: 'Adaptável à Sua Rotina',
    description:
      'Funciona para qualquer pessoa, independente do nível de estresse ou rotina diária.',
  },
];

export default function MethodAuthoritySection() {
  return (
    <section className="animate-fade-in-up">
      <div className="space-y-6 text-center">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">
          Não é força de vontade. É método.
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {authorityPoints.map((point) => (
          <div key={point.title} className="rounded-xl border border-border/50 bg-card/50 p-6 text-center shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <point.icon className="h-7 w-7" />
            </div>
            <h3 className="mb-2 text-xl font-bold">{point.title}</h3>
            <p className="text-muted-foreground">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
