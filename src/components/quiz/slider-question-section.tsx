'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import type { SliderQuestion } from '@/lib/quiz-data';

type SliderQuestionSectionProps = {
  question: SliderQuestion;
  onAnswer: (answerValue: string) => void;
};

export default function SliderQuestionSection({ question, onAnswer }: SliderQuestionSectionProps) {
  const [value, setValue] = useState(question.defaultValue);

  const handleContinue = () => {
    onAnswer(String(value));
  };

  const tickMarks = [];
  for (let i = question.min; i <= question.max; i += 30) {
      tickMarks.push(i);
  }

  return (
    <div className="w-full max-w-2xl animate-fade-in-up">
      <Card className="border-0 bg-transparent text-center shadow-none md:border md:bg-card md:shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl md:text-3xl">
            {question.question}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex flex-col items-center space-y-12 py-8">
            <div>
                <span className="text-6xl font-bold text-foreground md:text-8xl">{value}</span>
                <span className="ml-2 text-2xl font-medium text-muted-foreground md:text-3xl">{question.unit}</span>
            </div>

            <div className="w-full max-w-md px-4">
                <div className="relative">
                    <Slider
                        value={[value]}
                        onValueChange={(newValue) => setValue(newValue[0])}
                        min={question.min}
                        max={question.max}
                        step={question.step}
                        className="h-6"
                    />
                    <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 w-full">
                        {tickMarks.map(tick => (
                            <div key={tick} className="absolute -translate-x-1/2" style={{ left: `${((tick - question.min) / (question.max - question.min)) * 100}%` }}>
                                <div className="h-2 w-0.5 bg-border"></div>
                                {tick % 30 === 0 && <span className="absolute top-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">{tick}</span>}
                            </div>
                        ))}
                    </div>
                </div>
                 <p className="mt-8 text-center text-sm text-muted-foreground">
                    Arraste para ajustar
                </p>
            </div>

            <Button onClick={handleContinue} size="lg" className="w-full max-w-sm text-lg font-bold h-14">
                Continuar
            </Button>
        </CardContent>
      </Card>
    </div>
  );
}
