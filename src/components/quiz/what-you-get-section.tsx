'use client';

import { whatYouGetData } from '@/lib/what-you-get-data';
import { Card } from '@/components/ui/card';

export default function WhatYouGetSection() {
  return (
    <section className="animate-fade-in-up">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">
          O que você vai receber
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <Card className="overflow-hidden border-2 border-primary/20 bg-card/30 shadow-lg">
          <ul className="divide-y divide-primary/20">
            {whatYouGetData.map((item) => (
              <li key={item.title} className="flex items-center gap-4 p-5 transition-colors hover:bg-card/50 md:p-6">
                <span className="text-2xl">✅</span>
                <span className="text-lg font-medium text-card-foreground">{item.title}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
