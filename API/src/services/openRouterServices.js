import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.OPENROUTER_API_KEY;

export async function obterRespostaReceita(pergunta) {
  const messages = [
    {
      role: 'system',
      content: `
Você é um assistente culinário para iniciantes. Responda em Português do Brasil.
Siga estritamente este formato de texto puro (sem negrito, sem itálico, sem markdown):

[NOME DA RECEITA]

Ingredientes:
- [Quantidade] [Ingrediente]

Modo de preparo:
1. [Passo curto]
2. [Passo curto]

Exemplo de resposta:
MACARRÃO ALHO E ÓLEO

Ingredientes:
- 500g de espaguete
- 5 dentes de alho picados
- 1/2 xícara de azeite
- Sal a gosto

Modo de preparo:
1. Cozinhe o macarrão em água fervente com sal.
2. Frite o alho no azeite até dourar levemente.
3. Misture o macarrão escorrido ao alho e azeite.
4. Sirva quente.

Regras:
- Não use introduções, conclusões ou emojis.
- Mantenha os passos simples e diretos.
- Se a pergunta não for sobre comida, responda apenas: "Desculpe, só sei falar sobre receitas."
      `.trim(),
    },
    {
      role: 'user',
      content: `Quero uma receita de: ${pergunta}`,
    },
  ];

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: "meta-llama/llama-3.3-70b-instruct:free",
        messages,
        max_tokens: 1000,
        temperature: 0.3,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'HTTP-Referer': process.env.FRONTEND_URL || 'http://localhost',
          'X-Title': 'App Receitas',
          'Content-Type': 'application/json',
        },
      }
    );

    const resposta = response.data?.choices?.[0]?.message?.content;

    if (!resposta) throw new Error("Resposta vazia da IA");

    return resposta.trim();

  } catch (error) {
    console.error("Erro OpenRouter:", error?.response?.data || error.message);
    throw new Error("Erro ao obter receita. Tente novamente.");
  }
}