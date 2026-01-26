'use client';

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
  return (
    <div className="w-full max-w-2xl animate-fade-in-up">
      <Card className="border-0 bg-transparent shadow-none md:border md:bg-card md:shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-center text-2xl md:text-3xl">
            {question.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            {question.options.map((option) => (
              <Button
                key={option.value}
                variant="outline"
                size="lg"
                className="h-auto min-h-14 justify-start whitespace-normal py-4 text-left text-base leading-snug"
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
