// src/pages/ChatReceitas.jsx
import { useState } from "react";
import ListaMensagens from "../components/ListaMensagens";
import ChatBox from "../components/chatBox";
import { api } from "../services/api"

const ChatReceitas = () => {
    const [loading, setLoading] = useState(false)
    const [mensagens, setMensagens] = useState([
        {
            id: 1,
            texto: "Olá! Sou seu assistente de receitas. Como posso ajudar você hoje?",
            remetente: "bot",
        }
    ]);

    const [chatActive, setChatActive] = useState(false);

    // Função para lidar com o mouse entrando na div do chat
    const handleChatEnter = () => {
        setChatActive(true); // Define o chat como ativo
    };

    // Função para lidar com o mouse saindo da div do chat
    const handleChatLeave = () => {
        setChatActive(false); // Define o chat como inativo
    };

    const onEnviarMensagem = async (mensagem) => {
        const novaMensagemUsuario = {
            id: Date.now(),
            texto: mensagem,
            remetente: "usuario"
        }

        setMensagens(prev => [...prev, novaMensagemUsuario])
        setLoading(true)

        try {
            const resposta = await api(mensagem)

            const novaMensagemBot = {
                id: Date.now() + 1,
                texto: resposta,
                remetente: "bot"
            }

            setMensagens(prev => [...prev, novaMensagemBot])
            console.log(resposta)
        } catch (error) {
            console.error(error)
            const novaMensagem = {
                id: Date.now(),
                texto: "Falha ao enviar, tente novamente.",
                remetente: "bot"
            }

            setMensagens(prev => [...prev, novaMensagem])
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-[url('./imagens/Fundo.jpg')] bg-cover bg-center">
            <div className="container mx-auto max-w-4xl px-4 py-10 ">
                <header className="text-center mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-700 via-orange-500 to-orange-400 text-transparent bg-clip-text pb-3 md:pb-0 md:-mr-2">
                            Gerador de Receitas
                        </h1>
                        <img
                            src="./src/imagens/Logo.png"
                            alt="Logo"
                            className="w-30 h-30 object-contain pb-5"
                        />
                    </div>
                    <p className="text-white text-base md:text-xl font-light -mt-6">
                        Assistente culinário para fazer receitas maravilhosas!
                    </p>
                </header>

                {/* Adicione os manipuladores onMouseEnter e onMouseLeave */}
                <div
                    className="flex flex-col bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl h-[600px] border border-gray-500"
                    onMouseEnter={handleChatEnter} // Ativa ao passar o mouse
                    onMouseLeave={handleChatLeave} // Desativa ao tirar o mouse
                >
                    <ListaMensagens mensagens={mensagens} chatActive={chatActive} loading={loading} />
                    <ChatBox onEnviarMensagem={onEnviarMensagem} desabilitado={loading} />
                </div>
            </div>
        </div>
    );
};

export default ChatReceitas;