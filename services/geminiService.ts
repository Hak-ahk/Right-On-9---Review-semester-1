import { GoogleGenAI } from "@google/genai";
import { Question } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const explainAnswer = async (question: Question, userAnswer: string): Promise<string> => {
  try {
    const prompt = `
    You are an expert English teacher for 9th-grade students in Vietnam using the "Right On 9" curriculum.
    
    The student answered a question incorrectly. Please provide a short, encouraging, and clear explanation of the correct answer and the grammar rule or vocabulary meaning involved.

    Question: "${question.text}"
    Type: ${question.type}
    Student's Wrong Answer: "${userAnswer}"
    Correct Answer: "${question.correctAnswer}"

    Keep the explanation under 100 words. Format with bullet points if needed.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Sorry, I couldn't generate an explanation at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Unable to connect to the AI tutor. Please check your internet connection.";
  }
};