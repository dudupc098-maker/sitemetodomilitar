'use client';

import { bonusData } from '@/lib/bonus-data';
import { Card } from '@/components/ui/card';

export default function BonusSection() {
  return (
    <section className="animate-fade-in-up">
      <div className="text-center">
        <p className="font-semibold text-primary">BÔNUS EXCLUSIVOS</p>
        <h2 className="mt-2 font-headline text-3xl font-bold md:text-4xl">
          E ainda, receba <span className="text-primary">5 bônus exclusivos</span> hoje
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          Ferramentas práticas para acelerar e facilitar a aplicação do Método Sono Militar.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <Card className="overflow-hidden border-2 border-primary/20 bg-card/50 shadow-lg">
          <ul className="divide-y divide-border/50">
            {bonusData.map((item) => (
              <li key={item.title} className="flex items-start gap-5 p-6 transition-colors hover:bg-card/70 md:p-8">
                <span className="mt-1 text-2xl" role="img" aria-label="gift emoji">🎁</span>
                <div>
                  <h3 className="text-lg font-bold text-card-foreground">{item.title}</h3>
                  <p className="mt-1 text-base text-muted-foreground">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
      
      <div className="mt-8 text-center text-base text-muted-foreground">
        <p>Todos os bônus são um <span className="font-bold text-foreground">presente</span> e já estão inclusos no seu acesso.</p>
      </div>
    </section>
  );
}
