
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getStudySuggestions = async (subject: string, performance: number, goals: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a personalized study plan and suggestions for a student.
      Subject: ${subject}
      Current Performance: ${performance}%
      Goals: ${goals}
      
      Please provide the response in clear Markdown with:
      1. Strengths observed
      2. Areas of improvement
      3. A weekly 4-day study schedule
      4. Recommended resources (types of books/videos)
      Keep it encouraging and professional.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I couldn't generate suggestions right now. Please try again later.";
  }
};

export const polishResumeContent = async (text: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a professional resume writer. Polish the following description of a project or achievement to sound more impactful and professional for a recruiter. Keep it concise.
      
      Original: ${text}
      
      Polished Version:`,
      config: {
        temperature: 0.8,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return text;
  }
};
