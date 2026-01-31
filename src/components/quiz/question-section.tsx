'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

  const questionImage = {
    q1: 'https://i.imgur.com/jmBEewv.jpeg',
    q2: 'https://i.imgur.com/sSDRXmi.jpeg',
  }[question.id as 'q1' | 'q2'];

  return (
    <div className="w-full max-w-2xl animate-fade-in-up">
      <Card className="border-0 bg-transparent shadow-none md:border md:bg-card md:shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-center text-2xl md:text-3xl">
            {renderQuestion(question.question)}
          </CardTitle>
        </CardHeader>

        {questionImage && (
          <div className="px-6 pb-6">
            <div className="relative mx-auto w-full max-w-sm aspect-square">
              <Image
                src={questionImage}
                alt="Imagem ilustrativa para a pergunta"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        )}
        
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            {question.options.map((option) => (
              <Button
                key={option.value}
                variant="outline"
                size="lg"
                className="h-auto min-h-14 w-full justify-start whitespace-normal rounded-lg bg-card p-4 text-left text-base font-normal text-card-foreground shadow-sm transition-all duration-200 hover:border-primary hover:shadow-md hover:bg-card hover:text-card-foreground active:scale-[0.99]"
                onClick={() => onAnswer(option.value)}
              >
                {option.text}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
