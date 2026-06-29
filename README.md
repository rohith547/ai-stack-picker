# 🎯 AI Stack Picker

> **Interactive tool to choose the perfect AI stack for your project**

[![React](https://img.shields.io/badge/React-18+-61DAFB.svg?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5+-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Demo-Live-success.svg)](https://ai-stack-picker.vercel.app)

Stop wasting time researching which AI tools to use. Answer a few questions and get a personalized tech stack recommendation with setup instructions, code examples, and cost estimates.

---

## ✨ Features

- 🎨 **Interactive Quiz Interface** — Answer questions about your use case
- 🤖 **Smart Recommendations** — Get LLM, vector DB, and framework suggestions
- 💰 **Cost Estimates** — See pricing breakdowns before you commit
- 📚 **Code Examples** — Copy-paste starter code for your stack
- 🚀 **Zero Config** — No backend required, runs entirely in the browser
- 📱 **Mobile Responsive** — Works on all devices

---

## 🚀 Quick Start

### Try it online
👉 [ai-stack-picker.vercel.app](https://ai-stack-picker.vercel.app)

### Run locally

```bash
# Clone the repository
git clone https://github.com/rohith547/ai-stack-picker.git
cd ai-stack-picker

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🎯 How It Works

1. **Answer Questions** about your project:
   - What are you building? (chatbot, RAG app, agent, etc.)
   - What's your budget?
   - Do you need local/cloud deployment?
   - What's your team's experience level?

2. **Get Recommendations** tailored to your needs:
   - **LLM**: OpenAI GPT-4, Claude, Gemini, Llama 3, etc.
   - **Vector DB**: Pinecone, Chroma, Weaviate, FAISS
   - **Framework**: LangChain, LlamaIndex, Raw API, CrewAI
   - **Hosting**: Vercel, Railway, Fly.io, Modal

3. **Copy Code Examples** and start building immediately

---

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel
- **Data**: Pure JavaScript (no backend)

---

## 📁 Project Structure

```
ai-stack-picker/
├── src/
│   ├── components/     # React components
│   │   ├── Quiz.jsx       # Main quiz interface
│   │   ├── Results.jsx    # Recommendation display
│   │   └── CodeExample.jsx
│   ├── data/          # Stack definitions & pricing
│   │   ├── llms.js
│   │   ├── vectorDbs.js
│   │   └── frameworks.js
│   ├── lib/           # Business logic
│   │   └── recommend.js   # Recommendation engine
│   ├── App.jsx        # Main app component
│   └── main.jsx       # Entry point
├── index.html
├── vite.config.js
└── vercel.json        # SPA routing config
```

---

## 🎨 Supported Stacks

### LLMs
- **OpenAI**: GPT-4o, GPT-4o-mini, GPT-3.5-turbo
- **Anthropic**: Claude 3.5 Sonnet, Claude 3 Haiku
- **Google**: Gemini 1.5 Pro, Gemini 1.5 Flash
- **Meta**: Llama 3.1 (8B, 70B, 405B)
- **Mistral**: Mistral Large, Mixtral 8x7B

### Vector Databases
- **Pinecone** — Managed, serverless
- **Chroma** — Open source, embeddable
- **Weaviate** — GraphQL API
- **FAISS** — Local, fast
- **Supabase pgvector** — PostgreSQL extension

### Frameworks
- **LangChain** — Pre-built chains
- **LlamaIndex** — Document-focused
- **CrewAI** — Multi-agent
- **AutoGen** — Agent conversations
- **Raw API** — Full control

---

## 🔧 Development

### Build for production

```bash
npm run build
```

Output in `dist/` directory.

### Preview production build

```bash
npm run preview
```

---

## 📊 Recommendation Algorithm

The tool considers:

1. **Use Case Complexity**
   - Simple chatbot → lighter models
   - RAG/Agent → more powerful models

2. **Budget Constraints**
   - Free tier → Llama 3, Chroma
   - Budget → GPT-4o-mini, Pinecone
   - Enterprise → Claude Opus, Weaviate

3. **Technical Experience**
   - Beginner → LangChain abstractions
   - Advanced → Raw API control

4. **Deployment Preference**
   - Cloud → Managed services
   - Self-hosted → Open source stack

---

## 🤝 Contributing

Found a better stack combination? Want to add more options?

1. Fork the repository
2. Add your changes to `src/data/`
3. Update the recommendation logic in `src/lib/recommend.js`
4. Submit a Pull Request

---

## 🚀 Deployment

### Deploy to Vercel

```bash
npm run build
vercel --prod
```

### Deploy to Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Rohith Shabad**  
📧 yshravyareddy25@gmail.com  
🐙 GitHub: [@rohith547](https://github.com/rohith547)

---

## 🌟 Star History

If this tool saved you hours of research, give it a star! ⭐

---

## 📚 Related Projects

- [ai-onboarding-course](https://github.com/rohith547/ai-onboarding-course) — Free AI engineering course
- [linkedinpilot](https://github.com/rohith547/linkedinpilot) — AI-powered LinkedIn automation

---

<div align="center">
  <strong>Built for developers who want to start building, not researching</strong><br/>
  Made with ❤️ and AI
</div>
