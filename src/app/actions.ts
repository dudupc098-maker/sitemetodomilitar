'use server';

import {
  generatePersonalizedSleepPlan,
  type PersonalizedSleepPlanInput,
  type PersonalizedSleepPlanOutput,
} from '@/ai/flows/personalized-sleep-plan';

export async function getPersonalizedPlan(
  answers: PersonalizedSleepPlanInput
): Promise<PersonalizedSleepPlanOutput | null> {
  try {
    const plan = await generatePersonalizedSleepPlan(answers);
    return plan;
  } catch (error) {
    console.error('Error generating personalized sleep plan:', error);
    // Return a fallback plan in case of an error
    return {
      method: 'Método Sono Militar',
      insights: [
        'Respire fundo: a respiração controlada é a chave para acalmar o sistema nervoso antes de dormir.',
        'Relaxe cada músculo, um por um. Comece pelos pés e suba até o rosto para liberar a tensão do dia.',
        'Visualize um cenário de paz e tranquilidade para afastar os pensamentos que mantêm você acordado.',
      ],
    };
  }
}
