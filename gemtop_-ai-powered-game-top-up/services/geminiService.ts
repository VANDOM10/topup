
import { GoogleGenAI, Type } from "@google/genai";
import type { TopUpItem } from '../types';

if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. AI features will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const suggestPromo = async (gameName: string, items: TopUpItem[]): Promise<string> => {
    if (!process.env.API_KEY) {
        return "AI feature is disabled. Please set your API_KEY.";
    }

    const prompt = `
    As a gaming deals expert, analyze the following top-up options for the game "${gameName}".
    Identify the best value-for-money option, considering any bonuses. 
    Provide a very brief, friendly recommendation (max 2 sentences) to a gamer.
    
    Available options:
    ${items.map(item => `- ${item.name} for $${item.price}${item.bonus ? ` (Bonus: ${item.bonus})` : ''}`).join('\n')}
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                 thinkingConfig: { thinkingBudget: 0 } // For low latency
            }
        });

        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return "Sorry, I couldn't get a recommendation right now. Please check the promotions manually.";
    }
};
