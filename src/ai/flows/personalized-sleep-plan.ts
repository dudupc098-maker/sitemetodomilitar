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
    .describe("Response to the question: \"Quando alguém olha para você de manhã, que imagem você acha que transmite?\""),
  q2: z.string().describe('Response to question 2'),
  q3: z.string().describe('Response to question 3'),
  q4: z.string().describe('Response to question 4'),
  q5: z.string().describe('Response to question 5'),
  q6: z.string().describe('Response to question 6'),
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
