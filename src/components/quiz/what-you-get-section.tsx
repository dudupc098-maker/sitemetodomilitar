'use client';

import { whatYouGetData } from '@/lib/what-you-get-data';
import { CheckCircle2 } from 'lucide-react';

export default function WhatYouGetSection() {
  return (
    <section className="animate-fade-in-up">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">
          O que você vai receber
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-4">
        {whatYouGetData.map((item) => (
          <div key={item.title} className="flex items-start gap-4 rounded-lg border bg-card/50 p-5 shadow-sm transition-all hover:border-primary/30 hover:bg-card">
            <item.icon className="mt-1 h-7 w-7 shrink-0 text-primary" />
            <div>
              <h3 className="text-lg font-bold text-card-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex items-center justify-center gap-2 text-center text-muted-foreground">
        <CheckCircle2 className="h-5 w-5 text-accent" />
        <p className="text-base">
        Acesso <span className="font-bold">imediato e vitalício</span>. Assista quando e onde quiser.
        </p>
      </div>
    </section>
  );
}
