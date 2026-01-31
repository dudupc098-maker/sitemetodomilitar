'use client';

import { quizData } from '@/lib/quiz-data';

type SalesPoint = {
    icon: React.ComponentType<{ className?: string }>;
    text: string;
    highlight: string;
}

const renderHighlightedText = (text: string, highlight: string) => {
    if (!highlight) {
        return text;
    }
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
        <>
            {parts.map((part, i) =>
                part.toLowerCase() === highlight.toLowerCase() ? (
                    <span key={i} className="font-bold text-primary">
                        {part}
                    </span>
                ) : (
                    part
                )
            )}
        </>
    );
};

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

      <div className="mt-12 flex flex-col gap-4">
        {(quizData.salesPoints as SalesPoint[]).map((point, index) => (
          <div key={index} className="flex items-start gap-4 rounded-lg border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
            <point.icon className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <p className="text-lg text-card-foreground">
                {renderHighlightedText(point.text, point.highlight)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
