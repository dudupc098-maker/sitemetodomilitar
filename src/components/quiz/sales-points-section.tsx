'use client';

import { quizData } from '@/lib/quiz-data';

export default function SalesPointsSection() {
  return (
    <section>
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">
          O que você vai aprender no Método Sono Militar
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-lg text-muted-foreground">
          Um passo a passo completo para transformar suas noites e seus dias.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {quizData.salesPoints.map((point, index) => (
          <div key={index} className="flex items-start gap-4">
            <point.icon className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <p className="text-lg text-muted-foreground">{point.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
