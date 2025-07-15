# 🍳 Assistente Culinário AI

Bem-vindo ao Assistente Culinário AI, uma aplicação web interativa que funciona como seu ajudante pessoal na cozinha. Peça qualquer receita, tire dúvidas sobre ingredientes ou peça sugestões, e nossa inteligência artificial irá te ajudar em tempo real.

> ⚠️ **Atenção:** Como a API utilizada neste projeto é gratuita, ela possui um limite de uso e pode ficar temporariamente indisponível.

**🔗 Acesse a aplicação ao vivo:**  
**[https://meu-app-receitas.onrender.com](https://meu-app-receitas.onrender.com)**

---

## ✨ Funcionalidades

- **Chat Interativo:** Converse com uma IA para obter receitas detalhadas.  
- **Sugestões Criativas:** Peça sugestões com base nos ingredientes que você tem.  
- **Interface Responsiva:** Visual moderno e adaptável a desktops e dispositivos móveis.

---

## 🛠️ Tecnologias Utilizadas

Este projeto é uma aplicação full-stack, com frontend moderno e backend robusto.

### **Frontend (`Interface-Receita`)**
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)

### **Backend (`API`)**
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [OpenRouter API](https://openrouter.ai/)
- [CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)

---

## 🚀 Como Executar o Projeto Localmente

### ✅ Pré-requisitos
- [Node.js](https://nodejs.org/en) (versão 18 ou superior)
- [Git](https://git-scm.com/)

### 1. Clone o Repositório

```bash
git clone https://github.com/Rafaasj07/Assistente-Culinario.git
cd Assistente-Culinario
````

---

### 2. Configurando o Backend (`API`)

```bash
cd API
npm install
```

Crie o arquivo `.env` com sua chave da OpenRouter:

```
OPENROUTER_API_KEY=sua_chave_secreta_aqui
```

**Rodando localmente:**

```bash
npm run dev  # (somente em ambiente local com nodemon instalado)
```

**Para produção (ex: Render), use:**

```bash
npm start  # Usa o comando: node server.js
```

> Certifique-se de que no seu `package.json` esteja:
>
> ```json
> "scripts": {
>   "start": "node server.js",
>   "dev": "nodemon server.js"
> }
> ```

---

### 3. Configurando o Frontend (`Interface-Receita`)

```bash
cd ../Interface-Receita
npm install
```

Crie o arquivo `.env`:

```
VITE_API_URL=http://localhost:3001/api/
```

Execute o frontend:

```bash
npm run dev
```

Acesse em: `http://localhost:5173`

---

## ☁️ Deploy

Esta aplicação está hospedada na plataforma **[Render](https://render.com/)**:

* **Backend:** como Web Service (porta 3001).
* **Frontend:** como Static Site, se comunicando via variável `VITE_API_URL`.
