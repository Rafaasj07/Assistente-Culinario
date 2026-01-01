import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const api = async (pergunta) => {
    try {
        const response = await axios.post(`${API_URL}receitas/perguntar`, {
            pergunta
        })

        return response.data.resposta
    } catch (err) {
        console.error("Error ao buscar resposta no servidor", err)
        throw err
    }
}