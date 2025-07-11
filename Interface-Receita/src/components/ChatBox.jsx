import { useState } from "react"

const ChatBox = ({onEnviarMensagem, desabilitado}) => {
    const [mensagem, setMensagem] = useState('')

    const handleSubmit = (event) => { 
        event.preventDefault();

        onEnviarMensagem(mensagem)
        setMensagem('') 

    }
    return (
        <div className="border-t border-gray-400 bg-gray-50/80 p-4">
            <form className="flex space-x-3" onSubmit={handleSubmit}>
                <input
                type="text"
                value={mensagem}
                onChange={ (e) => setMensagem(e.target.value)}
                placeholder="Digite o prato que deseja a receita"
                className="flex-1 min-w-0 px-5 py-3 bg-white border border-gray-300 rounded-full shadow-sm focus:ring-2 outline-none focus: ring-orange-400"/> {/* Added min-w-0 */}
                <button
                type="submit"
                disabled = {desabilitado}
                className="px-8 py-3 bg-gradient-to-r from-orange-800 to-orange-500 hover:from-orange-900 hover:to-orange-700 cursor-pointer text-white rounded-full disabled:from-orange-500 disabled:to-orange-300 disabled:cursor-not-allowed">Enviar</button>
            </form>
        </div>
    )
}

export default ChatBox