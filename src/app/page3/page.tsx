import PlansSection from '@/components/quiz/plans-section';
import GuaranteeSection from '@/components/quiz/guarantee-section';
import FaqSection from '@/components/quiz/faq-section';
import { Award, Mail, ShieldCheck } from 'lucide-react';

export default function Page3() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-4xl space-y-12 px-4 py-8 md:space-y-16 md:py-12">
        <header className="text-center">
          <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Seu acesso ao <span className="text-primary">Método Sono Militar</span> está liberado!
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Comece hoje a desligar a mente, dormir rápido e acordar descansado.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 border-y border-border/50 py-4 sm:flex-row sm:gap-8 sm:py-5">
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">
                Pagamento 100% Seguro
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">
                Acesso Imediato no Email
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">
                Garantia Incondicional
              </span>
            </div>
          </div>
        </header>

        <PlansSection />

        <div className="space-y-2 pt-8">
          <GuaranteeSection />
          <FaqSection />
        </div>
      </div>
    </div>
  );
}
