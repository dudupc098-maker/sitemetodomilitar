'use client';

import { Card } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function GuaranteeSection() {
  return (
    <section className="w-full animate-fade-in-up py-16">
      <Card className="mx-auto max-w-2xl border-green-500/20 bg-card/40 p-6 text-center shadow-lg shadow-green-500/10 sm:p-8">
        <div className="flex flex-col items-center space-y-4">
          <ShieldCheck className="h-12 w-12 text-green-500" />
          <h2 className="font-headline text-2xl font-bold text-foreground md:text-3xl">
            Teste sem risco por 7 dias
          </h2>
          <p className="text-lg text-muted-foreground">
            Se não sentir melhora, devolvemos 100% do seu dinheiro.
          </p>
          <p className="max-w-prose pt-2 text-base text-foreground/80">
            Você tem 7 dias completos para testar o Método Sono Militar. Se por qualquer motivo não ficar satisfeito, basta solicitar e reembolsamos 100% do valor, sem perguntas e sem burocracia. O risco é totalmente nosso.
          </p>
        </div>
      </Card>
    </section>
  );
}
