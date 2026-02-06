'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

type Question = {
  id: string;
  question: string;
  options: { text: string; value: string }[];
};

type QuestionSectionProps = {
  question: Question;
  onAnswer: (answerValue: string) => void;
};

export default function QuestionSection({ question, onAnswer }: QuestionSectionProps) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    if (selectedValue) return; // Prevent multiple clicks while animating
    setSelectedValue(value);
    setTimeout(() => {
      onAnswer(value);
    }, 300);
  };

  const renderQuestion = (text: string) => {
    if (question.id === 'q1') {
      const parts = text.split(/(você acha que transmite\?)/i);
      return (
        <>
          {parts.map((part, index) => {
            if (!part) return null;
            if (part.match(/^(você acha que transmite\?)$/i)) {
              return <span key={index} className="text-primary">{part}</span>;
            }
            return part;
          })}
        </>
      );
    }

    if (question.id === 'q2') {
      const parts = text.split(/(“ficar pra trás”)/i);
      return (
        <>
          {parts.map((part, index) => {
            if (!part) return null;
            if (part.match(/^(“ficar pra trás”)$/i)) {
              return <span key={index} className="text-primary">{part}</span>;
            }
            return part;
          })}
        </>
      );
    }

    if (question.id === 'q3') {
      const parts = text.split(/(continuava exausto\(a\)\?)/i);
      return (
        <>
          {parts.map((part, index) => {
            if (!part) return null;
            if (part.match(/^(continuava exausto\(a\)\?)$/i)) {
              return <span key={index} className="text-primary">{part}</span>;
            }
            return part;
          })}
        </>
      );
    }

    if (question.id === 'q4') {
      const parts = text.split(/(“melhorar sua rotina de sono”)/i);
      return (
        <>
          {parts.map((part, index) => {
            if (!part) return null;
            if (part.match(/^(“melhorar sua rotina de sono”)$/i)) {
              return <span key={index} className="text-primary">{part}</span>;
            }
            return part;
          })}
        </>
      );
    }

    if (question.id === 'q5') {
      const parts = text.split(/(método rápido e comprovado)/i);
      return (
        <>
          {parts.map((part, index) => {
            if (!part) return null;
            if (part.match(/^(método rápido e comprovado)$/i)) {
              return <span key={index} className="text-primary">{part}</span>;
            }
            return part;
          })}
        </>
      );
    }

    if (question.id === 'q6') {
      const parts = text.split(/(sem parecer destruído todas as manhãs)/i);
      return (
        <>
          {parts.map((part, index) => {
            if (!part) return null;
            if (part.match(/^(sem parecer destruído todas as manhãs)$/i)) {
              return <span key={index} className="text-primary">{part}</span>;
            }
            return part;
          })}
        </>
      );
    }

    return text;
  };

  return (
    <div className="w-full max-w-2xl animate-fade-in-up">
      <Card className="border-0 bg-transparent shadow-none md:border md:bg-card md:shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-center text-2xl md:text-3xl">
            {renderQuestion(question.question)}
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-1 gap-3">
            {question.options.map((option) => {
                const isSelected = selectedValue === option.value;
                return (
                    <button
                        key={option.value}
                        role="button"
                        aria-pressed={isSelected}
                        disabled={!!selectedValue}
                        onClick={() => handleSelect(option.value)}
                        className={`
                            group/option relative flex w-full items-center text-left
                            h-auto min-h-[56px]
                            px-[18px] py-4
                            rounded-[14px]
                            border border-black/5 dark:border-white/5
                            bg-card text-card-foreground
                            text-[15px] font-medium leading-snug
                            cursor-pointer
                            transition-all duration-150
                            shadow-[0_2px_4px_rgba(0,0,0,0.04),0_1px_0_rgba(0,0,0,0.05)]
                            dark:shadow-[0_2px_4px_rgba(0,0,0,0.2),0_1px_0_rgba(255,255,255,0.1)]
                            hover:bg-secondary
                            active:translate-y-px
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                            disabled:cursor-wait disabled:opacity-80
                            ${isSelected
                                ? 'is-selected !border-primary ring-1 ring-primary'
                                : ''
                            }
                        `}
                    >
                        <span className="flex-grow pr-4">{option.text}</span>
                        <CheckCircle
                            className={`
                                h-5 w-5 shrink-0 text-primary
                                transition-all duration-[180ms] ease-[cubic-bezier(.2,.9,.3,1)]
                                ${isSelected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}
                            `}
                        />
                    </button>
                );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
