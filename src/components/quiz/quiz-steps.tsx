'use client';

import { useState } from 'react';
import { getPersonalizedPlan } from '@/app/actions';
import { trackEvent } from '@/lib/analytics';
import { quizData, Question } from '@/lib/quiz-data';
import type { PersonalizedSleepPlanOutput } from '@/ai/flows/personalized-sleep-plan';
import InitialSection from './initial-section';
import QuestionSection from './question-section';
import AuthoritySection from './authority-section';
import LoadingSection from './loading-section';
import ProgressBar from './progress-bar';
import SliderQuestionSection from './slider-question-section';


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

  const handleAnswer = (questionId: string, answerValue: string) => {
    const newAnswers = { ...answers, [questionId]: answerValue };
    setAnswers(newAnswers);
    trackEvent('question_answered', { question_id: questionId, answer: answerValue });

    const nextStep = step + 1;
    const currentQuestionIndex = step > authorityStepIndex ? step - 2 : step - 1;

    if (currentQuestionIndex >= quizData.questions.length - 1) {
      trackEvent('finished_quiz');
      setShowLoading(true);
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
    
    const totalQuizInteractiveSteps = quizData.questions.length + 1;
    const currentProgressStep = step > authorityStepIndex ? step - 1 : step;
    
    return (currentProgressStep / totalQuizInteractiveSteps) * 100;
  };

  if (showLoading) {
    return <LoadingSection onComplete={onFinish} answers={answers} />;
  }
  
  const renderStep = () => {
    if (step === 0) {
      return <InitialSection onStart={handleStart} />;
    }
    
    if (step === authorityStepIndex + 1) {
      return <AuthoritySection onContinue={handleAuthorityContinue} />;
    }

    const questionIndex = step > authorityStepIndex + 1 ? step - 2 : step - 1;
    const question = quizData.questions[questionIndex];
    if (!question) {
      return null;
    }
    
    switch (question.type) {
      case 'multiple-choice':
        return (
          <QuestionSection
            key={question.id}
            question={question}
            onAnswer={(answerValue) => handleAnswer(question.id, answerValue)}
          />
        );
      case 'slider':
        return (
          <SliderQuestionSection
            key={question.id}
            question={question}
            onAnswer={(answerValue) => handleAnswer(question.id, answerValue)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <ProgressBar progress={getProgress()} />
      <div className="flex flex-1 items-center justify-center p-4 pt-32">
        {renderStep()}
      </div>
    </div>
  );
}
