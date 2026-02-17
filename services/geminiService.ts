
import { GoogleGenAI } from "@google/genai";

export const generateHistoricalEntry = async (prompt: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an 18th-century ship's captain writing in your logbook. 
      Transform the following notes into a formal, atmospheric nautical entry using maritime terminology of the era (e.g., leagues, knots, gales, latitudes). 
      The tone should be professional yet descriptive. 
      Input notes: ${prompt}`,
      config: {
        temperature: 0.8,
        topP: 0.9,
      }
    });

    return response.text || "The ink has run dry... (Error generating entry)";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The message was lost at sea. Please try again.";
  }
};
