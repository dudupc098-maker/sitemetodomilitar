'use client';

import { bonusData } from '@/lib/bonus-data';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function BonusSection() {
  return (
    <section className="animate-fade-in-up">
      <div className="text-center">
        <p className="font-semibold text-primary">BÔNUS EXCLUSIVOS</p>
        <h2 className="mt-2 font-headline text-3xl font-bold md:text-4xl">
          E ainda, garanta <span className="text-primary">5 bônus exclusivos</span> hoje!
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <Card className="overflow-hidden border-2 border-primary/20 bg-card/50 shadow-lg">
          <ul className="divide-y divide-primary/20">
            {bonusData.map((item) => (
              <li key={item.title} className="flex flex-col items-start gap-2 p-5 transition-colors hover:bg-card/70 md:flex-row md:items-center md:gap-4 md:p-6">
                <div className="flex items-center gap-4">
                  <span className="text-2xl" role="img" aria-label="gift emoji">🎁</span>
                  <h3 className="text-lg font-bold text-card-foreground">{item.title}</h3>
                </div>
                <div className="flex w-full items-center justify-end gap-2 pl-10 md:w-auto md:pl-0 md:ml-auto">
                    <span className="font-medium text-destructive/80 line-through">R${item.price}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="font-bold text-accent">R$0,00</span>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
