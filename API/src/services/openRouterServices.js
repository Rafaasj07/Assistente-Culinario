import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.OPENROUTER_API_KEY;

export async function obterRespostaReceita(pergunta) {
  const messages = [
    {
      role: 'system',
      content: `
Você é um assistente culinário que ajuda iniciantes a prepararem receitas simples, gostosas e fáceis de entender.

Regras:
- Responda somente em português brasileiro.
- Use frases curtas, diretas e sem palavras difíceis.
- Ingredientes em lista (um por linha).
- Modo de preparo com passos numerados.
- Não use links, promoções ou termos em outro idioma.
- Se pedirem "fazer X", entregue a receita exata do prato X.
- Revise a resposta antes de enviar.
      `,
    },
    {
      role: 'user',
      content: `Quero uma receita para fazer: ${pergunta}`,
    },
  ];

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'nousresearch/nous-hermes-2-mixtral-8x7b-dpo',
        messages,
        max_tokens: 700,
        temperature: 0.4,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'HTTP-Referer': process.env.FRONTEND_URL || 'http://localhost',
          'Content-Type': 'application/json',
        },
      }
    );

    const resposta = response.data?.choices?.[0]?.message?.content;

    if (!resposta) throw new Error("Resposta vazia ou inválida da IA");

    return resposta.trim();
  } catch (error) {
    console.error("Erro OpenRouter:", error?.response?.data || error.message);
    throw new Error("Erro ao acessar OpenRouter");
  }
}
