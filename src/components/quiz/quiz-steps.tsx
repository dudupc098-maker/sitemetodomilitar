'use client';

import { useState } from 'react';
import { getPersonalizedPlan } from '@/app/actions';
import { trackEvent } from '@/lib/analytics';
import { quizData } from '@/lib/quiz-data';
import type { PersonalizedSleepPlanOutput } from '@/ai/flows/personalized-sleep-plan';
import InitialSection from './initial-section';
import QuestionSection from './question-section';
import AuthoritySection from './authority-section';
import LoadingSection from './loading-section';
import ProgressBar from './progress-bar';

type QuizStepsProps = {
  onFinish: (plan: PersonalizedSleepPlanOutput) => void;
};

type Answers = { [key: string]: string };

const authorityStepIndex = 3;

export default function QuizSteps({ onFinish }: QuizStepsProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showLoading, setShowLoading] = useState(false);

  const handleStart = () => {
    trackEvent('start_quiz');
    setStep(1);
  };

  const handleAnswer = async (questionId: string, answerValue: string) => {
    const newAnswers = { ...answers, [questionId]: answerValue };
    setAnswers(newAnswers);
    trackEvent('question_answered', { question_id: questionId, answer: answerValue });

    const nextStep = step + 1;
    const currentQuestionIndex = step > authorityStepIndex ? step - 2 : step - 1;

    if (currentQuestionIndex === quizData.questions.length - 1) {
      trackEvent('finished_quiz');
      setShowLoading(true);
      const plan = await getPersonalizedPlan({
        q1: newAnswers.q1 || '',
        q2: newAnswers.q2 || '',
        q3: newAnswers.q3 || '',
        q4: newAnswers.q4 || '',
        q5: newAnswers.q5 || '',
        q6: newAnswers.q6 || '',
      });
      if (plan) {
        // The loading screen has a minimum duration, so we pass the plan to it.
        // It will call onFinish when its animation is complete.
      }
    } else {
      setStep(nextStep);
    }
  };

  const handleAuthorityContinue = () => {
    setStep(step + 1);
  };
  
  const getProgress = () => {
    if (step === 0) return 0;
    if (showLoading) return 100;
    
    // The quiz has questions and one authority section
    const totalQuizInteractiveSteps = quizData.questions.length + 1;
    const currentProgressStep = step > authorityStepIndex ? step - 1 : step;
    
    return (currentProgressStep / totalQuizInteractiveSteps) * 100;
  };

  if (showLoading) {
    return <LoadingSection onComplete={(plan) => onFinish(plan as PersonalizedSleepPlanOutput)} answers={answers} />;
  }
  
  const renderStep = () => {
    if (step === 0) {
      return <InitialSection onStart={handleStart} />;
    }
    
    // Authority section appears after question 3
    if (step === authorityStepIndex + 1) {
      return <AuthoritySection onContinue={handleAuthorityContinue} />;
    }

    const questionIndex = step > authorityStepIndex + 1 ? step - 2 : step - 1;
    const question = quizData.questions[questionIndex];
    if (question) {
      return (
        <QuestionSection
          key={question.id}
          question={question}
          onAnswer={(answerValue) => handleAnswer(question.id, answerValue)}
        />
      );
    }
    
    return null;
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <ProgressBar progress={getProgress()} />
      <div className="flex flex-1 items-center justify-center p-4">
        {renderStep()}
      </div>
    </div>
  );
}
