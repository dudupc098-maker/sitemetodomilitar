'use client';

import { useState } from 'react';
import type { PersonalizedSleepPlanOutput } from '@/ai/flows/personalized-sleep-plan';
import QuizSteps from './quiz-steps';
import SalesPage from './sales-page';

export default function QuizFlow() {
  const [quizResult, setQuizResult] = useState<{
    plan: PersonalizedSleepPlanOutput;
    answers: Record<string, string>;
  } | null>(null);

  const handleQuizFinish = (
    planData: PersonalizedSleepPlanOutput,
    answers: Record<string, string>
  ) => {
    setQuizResult({ plan: planData, answers });
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full">
      {!quizResult ? (
        <QuizSteps onFinish={handleQuizFinish} />
      ) : (
        <SalesPage plan={quizResult.plan} answers={quizResult.answers} />
      )}
    </div>
  );
}
