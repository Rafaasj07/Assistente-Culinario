const Mensagem = ({ mensagem, loading }) => {

    const isBot = mensagem.remetente === 'bot';

    return (
        <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-xs lg:max-w-lg px-5 py-4 rounded-2xl shadow-3xl hover:shadow-xl cursor-pointer
                ${isBot ? 'bg-gray-50 text-gray-800 rounded-bl-none border-gray-300'
                    : 'bg-gradient-to-r from-orange-800 via-orange-600 to-orange-500 text-white rounded-br-none'}
                `}>
                <p className="text-sm whitespace-pre-line">{mensagem.texto}</p>
            </div>
        </div>
    );
};

export default Mensagem;
