'use client';

import { useState } from 'react';
import type { PersonalizedSleepPlanOutput } from '@/ai/flows/personalized-sleep-plan';
import QuizSteps from './quiz-steps';
import SalesPage from './sales-page';

export default function QuizFlow() {
  const [quizFinished, setQuizFinished] = useState(false);

  const handleQuizFinish = (planData: PersonalizedSleepPlanOutput) => {
    setQuizFinished(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full">
      {!quizFinished ? (
        <QuizSteps onFinish={handleQuizFinish} />
      ) : (
        <SalesPage />
      )}
    </div>
  );
}
