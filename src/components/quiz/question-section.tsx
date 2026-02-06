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
                            rounded-[14px] border
                            bg-card text-card-foreground
                            text-[15px] font-medium leading-snug
                            cursor-pointer
                            transition-all duration-[180ms] ease-[cubic-bezier(.2,.9,.3,1)]
                            shadow-[0_6px_18px_rgba(16,24,40,0.06)] dark:shadow-[0_4px_10px_rgba(2,6,23,0.6)]
                            border-[rgba(31,41,55,0.06)] dark:border-[rgba(255,255,255,0.04)]
                            hover:-translate-y-[3px] hover:scale-[1.001] hover:shadow-[0_10px_24px_rgba(16,24,40,0.08)]
                            focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_rgba(30,58,95,0.12)]
                            active:scale-[0.998]
                            disabled:cursor-wait disabled:opacity-80
                            ${isSelected
                                ? 'is-selected border-primary shadow-[0_8px_24px_rgba(30,58,95,0.08)] bg-gradient-to-b from-[rgba(30,58,95,0.03)] to-card dark:from-[rgba(30,58,95,0.06)]'
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
