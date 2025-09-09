'use server';
/**
 * @fileOverview An AI agent to answer questions from new team members.
 *
 * - answerNewJoinerQuestion - A function that answers questions.
 * - AnswerNewJoinerQuestionInput - The input type for the answerNewJoinerQuestion function.
 * - AnswerNewJoinerQuestionOutput - The return type for the answerNewJoinerQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { aiKnowledgeBase } from '@/ai/knowledge-base/documentation';

const AnswerNewJoinerQuestionInputSchema = z.object({
  question: z.string().describe('The question from the new joiner.'),
  // Optional: You could pass the user's role here to get more specific answers.
  // role: z.string().optional().describe("The new joiner's role (e.g., Backend, Frontend).")
});
export type AnswerNewJoinerQuestionInput = z.infer<typeof AnswerNewJoinerQuestionInputSchema>;

const AnswerNewJoinerQuestionOutputSchema = z.object({
  answer: z.string().describe('The answer to the question.'),
});
export type AnswerNewJoinerQuestionOutput = z.infer<typeof AnswerNewJoinerQuestionOutputSchema>;

export async function answerNewJoinerQuestion(input: AnswerNewJoinerQuestionInput): Promise<AnswerNewJoinerQuestionOutput> {
  return answerNewJoinerQuestionFlow(input);
}

const answerNewJoinerQuestionPrompt = ai.definePrompt({
  name: 'answerNewJoinerQuestionPrompt',
  input: {schema: z.object({
    question: z.string(),
    knowledgeBase: z.any(),
  })},
  output: {schema: AnswerNewJoinerQuestionOutputSchema},
  prompt: `You are Orbit, an AI-powered chatbot designed to help new engineers get accustomed to the mPACT2WO team at Molex.

  Your primary goal is to answer questions based on the provided documentation. A new joiner has asked a question.
  
  Carefully analyze the provided knowledge base and use it to construct a helpful and friendly answer to the new joiner's question.

  If the question is about learning paths, first identify the user's role from their question (e.g., "backend engineer"). Then, use the 'learningModules' part of the knowledge base to find the recommended modules for that role. Present the answer by first giving the 'summary' for that role, and then list each module with its title, description, and link.

  If the information does not contain an answer in any part of the knowledge base, say that you don't have information on that topic and suggest they ask their onboarding buddy.

  KNOWLEDGE BASE:
  {{{json knowledgeBase}}}

  ---

  New Joiner's Question: {{{question}}}
  `,
});

const answerNewJoinerQuestionFlow = ai.defineFlow(
  {
    name: 'answerNewJoinerQuestionFlow',
    inputSchema: AnswerNewJoinerQuestionInputSchema,
    outputSchema: AnswerNewJoinerQuestionOutputSchema,
  },
  async input => {
    const {output} = await answerNewJoinerQuestionPrompt({
        ...input,
        knowledgeBase: aiKnowledgeBase,
    });
    return output!;
  }
);
