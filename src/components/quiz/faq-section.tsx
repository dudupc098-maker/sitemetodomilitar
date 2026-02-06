'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqData } from '@/lib/faq-data';

export default function FaqSection() {
  return (
    <section className="w-full animate-fade-in-up">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-headline text-3xl font-bold md:text-4xl">
          PERGUNTAS FREQUENTES
        </h2>
      </div>
      <div className="mx-auto mt-8 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="py-4 text-left font-medium text-foreground hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-0 text-sm text-muted-foreground md:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
