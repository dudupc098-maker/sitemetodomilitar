'use server';

/**
 * @fileOverview Generates a personalized sleep plan based on quiz responses.
 *
 * - generatePersonalizedSleepPlan - A function that generates a personalized sleep plan.
 * - PersonalizedSleepPlanInput - The input type for the generatePersonalizedSleepPlan function.
 * - PersonalizedSleepPlanOutput - The return type for the generatePersonalizedSleepPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedSleepPlanInputSchema = z.object({
  q1: z
    .string()
    .describe("Response to the question: \"Quando você acorda de manhã, como você sente que está fisicamente e mentalmente?\""),
  q2: z.string().describe("Response to the question: \"Quanto tempo você normalmente leva para pegar no sono depois de deitar?\""),
  q3: z.string().describe("Response to the question: \"Com que frequência você acorda já sentindo que o descanso não foi suficiente?\""),
  q4: z.string().describe("Response to the question: \"O cansaço já fez você perder produtividade, foco ou disposição durante o dia?\""),
  q5: z.string().describe("Response to the question: \"Se existisse um método rápido e comprovado capaz de fazer você dormir em poucos minutos todas as noites, você gostaria de ter acesso a ele ainda hoje?\""),
  q6: z.string().describe("Response to the question: \"Você estaria disposto a acordar com energia, sem parecer destruído todas as manhãs, igual a maioria das pessoas que já aplicam este método?\""),
});
export type PersonalizedSleepPlanInput = z.infer<
  typeof PersonalizedSleepPlanInputSchema
>;

const PersonalizedSleepPlanOutputSchema = z.object({
  insights: z.array(z.string()).describe('Personalized insights based on the quiz responses.'),
  method: z.string().describe('The recommended sleep method.'),
});
export type PersonalizedSleepPlanOutput = z.infer<
  typeof PersonalizedSleepPlanOutputSchema
>;

export async function generatePersonalizedSleepPlan(
  input: PersonalizedSleepPlanInput
): Promise<PersonalizedSleepPlanOutput> {
  return personalizedSleepPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedSleepPlanPrompt',
  input: {schema: PersonalizedSleepPlanInputSchema},
  output: {schema: PersonalizedSleepPlanOutputSchema},
  prompt: `You are an expert in sleep optimization and the Military Sleep Method. Based on the user's quiz responses, provide a personalized sleep plan.

Quiz Responses:
Q1: {{{q1}}}
Q2: {{{q2}}}
Q3: {{{q3}}}
Q4: {{{q4}}}
Q5: {{{q5}}}
Q6: {{{q6}}}

Analyze these responses and provide:
1.  A recommended sleep method (method field) - in almost all cases this should be "Military Sleep Method".
2.  Three personalized insights (insights array) based on their responses. These should be short, actionable, and emotionally resonant.  Focus on the user's pain points and how the Military Sleep Method can address them.

Ensure that the output is valid JSON matching the schema.
`,
});

const personalizedSleepPlanFlow = ai.defineFlow(
  {
    name: 'personalizedSleepPlanFlow',
    inputSchema: PersonalizedSleepPlanInputSchema,
    outputSchema: PersonalizedSleepPlanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
