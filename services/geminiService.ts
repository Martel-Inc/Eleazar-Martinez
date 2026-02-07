
import { GoogleGenAI, Type } from "@google/genai";

// Fix: Strictly following the guidelines to initialize with process.env.API_KEY directly
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateStrategySugerence = async (companyGiro: string, location: string) => {
  const prompt = `Actua como un consultor experto en negocios. La empresa es del giro ${companyGiro} ubicada en ${location}. 
  Proporciona 3 sugerencias estratégicas de marketing, ventas o promociones basadas en tendencias actuales para este giro de empresa.
  Enfócate en cómo los servicios adicionales de un ERP como "Master Restaurant" o "Master Retail" podrían ayudar.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "No se pudo generar la sugerencia en este momento.";
  }
};

export const generateVisualReportDescription = async (metrics: any) => {
  const prompt = `Genera un reporte ejecutivo resumido y visualmente descriptivo basado en los siguientes datos de cumplimiento de tareas: ${JSON.stringify(metrics)}.
  Resalta el mejor departamento y áreas de mejora crítica.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error generando el reporte IA.";
  }
};
