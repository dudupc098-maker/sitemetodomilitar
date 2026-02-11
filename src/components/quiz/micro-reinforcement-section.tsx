'use client';

import { Crosshair } from 'lucide-react';

export default function MicroReinforcementSection() {
  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in-up">
      <div className="flex flex-col md:flex-row items-center gap-4 rounded-xl border border-primary/20 bg-primary/5 p-4 text-center md:text-left md:p-5">
        <Crosshair className="h-8 w-8 md:h-10 md:w-10 shrink-0 text-primary/80" />
        <p className="text-base font-medium text-foreground/90 md:text-lg">
          O Método Sono Militar atua diretamente na{' '}
          <span className="font-bold text-primary">raiz do problema</span> que
          impede você de dormir rápido.
        </p>
      </div>
    </div>
  );
}
