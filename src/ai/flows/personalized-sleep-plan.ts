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
  q5: z.string().describe("Response to the question: \"Quantos minutos você leva para pegar no sono?\""),
  q6: z.string().describe("Response to the question: \"Quantas horas você dorme por noite?\""),
  q7: z.string().describe("Response to the question: \"O que mais te impede de dormir rápido?\""),
  q8: z.string().describe("Response to the question: \"Como a falta de sono afeta sua vida hoje?\""),
  q9: z.string().describe("Response to the question: \"Se nada mudar, como você acha que estará daqui 6 meses?\""),
  q10: z.string().describe("Response to the question: \"Se existisse um método simples que te fizesse dormir rápido todas as noites, você testaria?\""),
  q11: z.string().describe("Response to the question: \"Faz sentido pra você que dormir bem muda energia, foco e disposição?\""),
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
Q5: {{{q5}}} minutos
Q6: {{{q6}}} horas
Q7: {{{q7}}}
Q8: {{{q8}}}
Q9: {{{q9}}}
Q10: {{{q10}}}
Q11: {{{q11}}}

Analyze these responses and provide:
1.  A recommended sleep method (method field) - in almost all cases this should be "Military Sleep Method".
2.  Three personalized insights (insights array) based on their responses. These should be short, actionable, and emotionally resonant.  Focus on the user's pain points and how the Military Sleep Method can address them. The response to Q5 is in minutes. The response to Q6 is in hours.

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
