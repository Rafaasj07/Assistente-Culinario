import { useEffect, useRef } from 'react';
import Mensagem from './Mensagem';

const ListaMensagens = ({ mensagens, chatActive, loading }) => {
  const listaRef = useRef(null);

  useEffect(() => {
    if (listaRef.current) {
      listaRef.current.scrollTo({
        top: listaRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [mensagens]);

  return (
    <div
      ref={listaRef}
      className={`flex-1 p-4 space-y-4 bg-[url('./imagens/Tabua.png')] bg-cover bg-center ${chatActive ? 'overflow-y-auto' : 'overflow-y-hidden'}`}
    >
      {mensagens.map((mensagem) => (
        <Mensagem key={mensagem.id} mensagem={mensagem} />
      ))}

      {loading && (
        <div className="flex justify-start">
          <div className="bg-gray-50 rounded-2xl rounded-bl-none shadow-md border border-gray-200 p-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-orange-600 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-orange-600 rounded-full animate-pulse delay-100"></div>
              <div className="w-3 h-3 bg-orange-600 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaMensagens;