import axios from 'axios'

const getApiUrl = () => {
    const envUrl = import.meta.env.VITE_API_URL
    if (!envUrl) return ''
    
    const urlWithProtocol = envUrl.startsWith('http') ? envUrl : `https://${envUrl}`
    return urlWithProtocol.endsWith('/') ? urlWithProtocol : `${urlWithProtocol}/`
}

const API_URL = getApiUrl()

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