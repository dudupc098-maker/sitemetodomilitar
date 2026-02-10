'use client';

import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { quizData } from '@/lib/quiz-data';
import { getPersonalizedPlan } from '@/app/actions';
import type { PersonalizedSleepPlanOutput } from '@/ai/flows/personalized-sleep-plan';

type LoadingSectionProps = {
  onComplete: (plan: PersonalizedSleepPlanOutput) => void;
  answers: { [key: string]: string };
};

const MIN_LOADING_TIME = 5000;

export default function LoadingSection({ onComplete, answers }: LoadingSectionProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [plan, setPlan] = useState<PersonalizedSleepPlanOutput | null>(null);

  useEffect(() => {
    const fetchPlan = async () => {
      const result = await getPersonalizedPlan({
        q1: answers.q1 || '',
        q2: answers.q2 || '',
        q3: answers.q3 || '',
        q4: answers.q4 || '',
        q5: answers.q5 || '',
        q6: answers.q6 || '',
        q7: answers.q7 || '',
        q8: answers.q8 || '',
        q9: answers.q9 || '',
        q10: answers.q10 || '',
        q11: answers.q11 || '',
      });
      setPlan(result);
    };

    fetchPlan();
  }, [answers]);

  useEffect(() => {
    const startTime = Date.now();

    const progressInterval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) return 100;
        return oldProgress + 1;
      });
    }, MIN_LOADING_TIME / 100);

    const messageInterval = setInterval(() => {
      setMessageIndex((oldIndex) => (oldIndex + 1) % quizData.loadingMessages.length);
    }, MIN_LOADING_TIME / quizData.loadingMessages.length);

    const checkCompletion = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        if (plan && elapsedTime >= MIN_LOADING_TIME) {
            clearInterval(progressInterval);
            clearInterval(messageInterval);
            clearInterval(checkCompletion);
            setProgress(100);
            setTimeout(() => onComplete(plan), 500); // Short delay for 100% to show
        }
    }, 100);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      clearInterval(checkCompletion);
    };
  }, [plan, onComplete]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4 text-center">
        <h2 className="font-headline text-2xl font-bold text-primary">
          {quizData.loadingMessages[messageIndex]}
        </h2>
        <Progress value={progress} className="h-4" />
        <p className="text-lg font-semibold">{Math.round(progress)}%</p>
      </div>
    </div>
  );
}
