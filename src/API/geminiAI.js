import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyA8q0aEUvrTpV7Plv_ktGJ4HEulDwfQkIY"; // Keep API key here
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

/**
 * Function to get AI-generated response
 * @param {string} prompt - The question/message to send to Gemini AI
 * @returns {Promise<string>} - The AI's response as a string
 */
export async function getAIResponse(prompt) {
    try {
        const chatSession = model.startChat({
            generationConfig,
            history: [],
        });

        const result = await chatSession.sendMessage(prompt);
        const responseText = await result.response.text();

        return responseText;
    } catch (error) {
        console.error("AI API Error:", error);
        return "Error fetching AI response.";
    }
}
