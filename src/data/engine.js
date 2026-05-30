// Questions
export const QUESTIONS = [
  {
    id: 'goal',
    text: 'What are you building?',
    sub: 'Pick the one that best describes your project',
    options: [
      { value: 'chatbot', icon: '💬', label: 'Chatbot / Assistant', desc: 'Conversational AI, customer support, QA bot' },
      { value: 'search', icon: '🔍', label: 'Search / RAG System', desc: 'Search over docs, PDFs, knowledge bases' },
      { value: 'agent', icon: '🤖', label: 'AI Agent / Automation', desc: 'Multi-step tasks, web browsing, code generation' },
      { value: 'saas', icon: '🚀', label: 'AI SaaS Product', desc: 'Shipping a product with billing and users' },
      { value: 'pipeline', icon: '🔄', label: 'Data / ML Pipeline', desc: 'Processing, fine-tuning, batch inference' },
      { value: 'multimodal', icon: '👁️', label: 'Vision / Multimodal', desc: 'Images, PDFs, screenshots, documents' },
    ],
    cols: 2,
  },
  {
    id: 'memory',
    text: 'Does it need to remember users across sessions?',
    sub: 'Not just within one conversation — across different days and sessions',
    options: [
      { value: 'yes', icon: '🧠', label: 'Yes — personalized memory', desc: 'Remember preferences, history, facts per user' },
      { value: 'context', icon: '📋', label: 'Just within a session', desc: 'Conversation history is enough' },
      { value: 'no', icon: '❌', label: 'No memory needed', desc: 'Stateless, same answer for everyone' },
    ],
    cols: 1,
  },
  {
    id: 'complexity',
    text: 'How complex is your workflow?',
    sub: 'Think about the steps your AI needs to take',
    options: [
      { value: 'simple', icon: '⚡', label: 'Single step', desc: 'User asks → AI answers, one call' },
      { value: 'multi', icon: '🔀', label: 'Multi-step pipeline', desc: 'Retrieve → reason → generate → validate' },
      { value: 'human', icon: '🙋', label: 'Human-in-the-loop', desc: 'AI needs human approval before proceeding' },
      { value: 'agents', icon: '🕸️', label: 'Multiple AI agents', desc: 'Agents collaborating, splitting tasks' },
    ],
    cols: 2,
  },
  {
    id: 'hosting',
    text: 'Where will it run?',
    sub: 'Infrastructure and privacy requirements',
    options: [
      { value: 'cloud', icon: '☁️', label: 'Cloud APIs (OpenAI, Anthropic)', desc: 'Fast to start, pay per token' },
      { value: 'selfhost', icon: '🖥️', label: 'Self-hosted / On-premise', desc: 'Privacy, cost control, no data leakage' },
      { value: 'hybrid', icon: '🔀', label: 'Hybrid — both', desc: 'Cloud for some, local for sensitive data' },
    ],
    cols: 1,
  },
  {
    id: 'timeline',
    text: 'What\'s your situation?',
    sub: 'This affects which tools to prioritize',
    options: [
      { value: 'prototype', icon: '🧪', label: 'Prototype fast (solo)', desc: 'Need something working this week' },
      { value: 'production', icon: '🏭', label: 'Production system (team)', desc: 'Built to scale, maintainable codebase' },
      { value: 'research', icon: '🔬', label: 'Research / Experimenting', desc: 'Optimizing quality, trying new approaches' },
      { value: 'learning', icon: '📚', label: 'Learning & upskilling', desc: 'Want to understand the tech deeply' },
    ],
    cols: 2,
  },
];

// Color map for tools
const COLORS = {
  indigo:  { bg: '#EEF2FF', border: '#818CF8', text: '#4338CA' },
  purple:  { bg: '#F5F3FF', border: '#A78BFA', text: '#7C3AED' },
  cyan:    { bg: '#ECFEFF', border: '#67E8F9', text: '#0E7490' },
  green:   { bg: '#ECFDF5', border: '#6EE7B7', text: '#065F46' },
  orange:  { bg: '#FFF7ED', border: '#FDB57A', text: '#C2410C' },
  yellow:  { bg: '#FFFBEB', border: '#FCD34D', text: '#92400E' },
  red:     { bg: '#FEF2F2', border: '#FCA5A5', text: '#991B1B' },
  pink:    { bg: '#FDF2F8', border: '#F0ABFC', text: '#86198F' },
  teal:    { bg: '#F0FDFA', border: '#5EEAD4', text: '#115E59' },
  blue:    { bg: '#EFF6FF', border: '#93C5FD', text: '#1D4ED8' },
};

// Tool definitions
const TOOLS = {
  langchain:  { name: 'LangChain', color: 'indigo',  ep: null },
  langgraph:  { name: 'LangGraph', color: 'purple',  ep: 'EP03' },
  openai:     { name: 'OpenAI API', color: 'green',  ep: null },
  anthropic:  { name: 'Anthropic API', color: 'orange', ep: null },
  rag_adv:    { name: 'Advanced RAG', color: 'indigo', ep: 'EP01' },
  rag_basic:  { name: 'Basic RAG',    color: 'cyan',   ep: 'EP01' },
  graphrag:   { name: 'GraphRAG',     color: 'teal',   ep: 'EP10' },
  mem0:       { name: 'mem0 Memory',  color: 'purple', ep: 'BONUS-MEM' },
  evals:      { name: 'RAGAS Evals',  color: 'red',    ep: 'EP04' },
  dspy:       { name: 'DSPy',         color: 'blue',   ep: 'EP09' },
  lora:       { name: 'LoRA Fine-Tune', color: 'yellow', ep: 'EP02' },
  ollama:     { name: 'Ollama',       color: 'orange', ep: 'EP07' },
  vllm:       { name: 'vLLM',         color: 'orange', ep: 'EP07' },
  fastapi:    { name: 'FastAPI',      color: 'green',  ep: 'EP06' },
  stripe:     { name: 'Stripe Billing', color: 'blue', ep: 'EP06' },
  crewai:     { name: 'CrewAI',       color: 'orange', ep: 'BONUS-FW' },
  autogen:    { name: 'AutoGen',      color: 'cyan',   ep: 'BONUS-FW' },
  mcp:        { name: 'MCP Protocol', color: 'pink',   ep: 'BONUS-MCP' },
  multimodal: { name: 'GPT-4V / Claude Vision', color: 'purple', ep: 'EP05' },
  chromadb:   { name: 'ChromaDB',     color: 'green',  ep: 'BONUS-CUR' },
  cursor_agent: { name: 'Coding Agent Pattern', color: 'yellow', ep: 'BONUS-CUR' },
  arch:       { name: 'AI Architecture Patterns', color: 'red', ep: 'EP08' },
  faiss:      { name: 'FAISS / Pinecone', color: 'teal', ep: 'EP01' },
};

const EPISODES = {
  'EP01': { label: 'EP01', title: 'Advanced RAG', why: 'Production retrieval system' },
  'EP02': { label: 'EP02', title: 'Fine-Tuning with LoRA', why: 'Custom model for your data' },
  'EP03': { label: 'EP03', title: 'LangGraph', why: 'Stateful multi-agent workflows' },
  'EP04': { label: 'EP04', title: 'Production Evals', why: 'Measure and ship with confidence' },
  'EP05': { label: 'EP05', title: 'Multimodal Agents', why: 'Vision + text + tools' },
  'EP06': { label: 'EP06', title: 'AI SaaS', why: 'Full product with billing + auth' },
  'EP07': { label: 'EP07', title: 'Self-Hosted AI', why: 'Ollama + vLLM setup' },
  'EP08': { label: 'EP08', title: "Architect's Playbook", why: 'Scalable system design patterns' },
  'EP09': { label: 'EP09', title: 'DSPy', why: 'Auto-optimize prompts programmatically' },
  'EP10': { label: 'EP10', title: 'GraphRAG', why: 'Knowledge graph + vector hybrid' },
  'BONUS-MCP':  { label: 'BONUS', title: 'MCP Protocol', why: 'Standard tool integration' },
  'BONUS-MEM':  { label: 'BONUS', title: 'AI Memory (mem0)', why: 'Long-term personalized memory' },
  'BONUS-CUR':  { label: 'BONUS', title: 'Build Like Cursor', why: 'Full coding agent from scratch' },
  'BONUS-FW':   { label: 'BONUS', title: 'CrewAI vs LangGraph vs AutoGen', why: 'Pick the right framework' },
};

// RECOMMENDATION ENGINE
export function getRecommendation(answers) {
  const { goal, memory, complexity, hosting, timeline } = answers;

  let stack = [];
  let arch = [];
  let episodes = new Set();
  let name = '';
  let description = '';

  // ── CHATBOT ──
  if (goal === 'chatbot') {
    name = 'Conversational AI Stack';
    stack = ['openai', 'rag_basic', 'evals'];
    arch = ['User Input', 'RAG Retrieval', 'LLM (GPT-4 / Claude)', 'Response'];
    episodes.add('EP01'); episodes.add('EP04');
    if (memory === 'yes') { stack.push('mem0'); episodes.add('BONUS-MEM'); }
    if (complexity === 'multi' || complexity === 'agents') { stack.push('langgraph'); episodes.add('EP03'); }
    if (hosting === 'selfhost') { stack = stack.filter(t => t !== 'openai'); stack.push('ollama'); episodes.add('EP07'); }
    if (timeline === 'prototype') { stack.unshift('langchain'); }
    description = 'A production chatbot with smart retrieval, proper evals, and optional memory.';
  }

  // ── SEARCH / RAG ──
  else if (goal === 'search') {
    name = 'Advanced RAG Stack';
    stack = ['rag_adv', 'faiss', 'evals'];
    arch = ['Documents', 'Chunking + Embedding', 'Vector Store', 'Hybrid Retrieval', 'Reranking', 'LLM Answer'];
    episodes.add('EP01'); episodes.add('EP04');
    if (complexity === 'agents' || complexity === 'human') { stack.push('graphrag'); episodes.add('EP10'); }
    if (timeline === 'research') { stack.push('dspy'); episodes.add('EP09'); }
    if (hosting === 'selfhost') { stack.push('ollama'); episodes.add('EP07'); }
    description = 'HyDE, reranking, hybrid search — the full production RAG stack that actually works.';
  }

  // ── AI AGENT ──
  else if (goal === 'agent') {
    name = 'Multi-Agent Orchestration Stack';
    stack = ['langgraph', 'rag_adv', 'evals'];
    arch = ['Task Input', 'Planner Agent', 'Tool Calls', 'Sub-Agents', 'Result'];
    episodes.add('EP03'); episodes.add('EP01'); episodes.add('EP04');
    if (complexity === 'agents') { stack.push('crewai'); episodes.add('BONUS-FW'); }
    if (memory === 'yes') { stack.push('mem0'); episodes.add('BONUS-MEM'); }
    if (goal === 'agent' && timeline === 'prototype') { stack.push('mcp'); episodes.add('BONUS-MCP'); }
    if (timeline === 'production') { stack.push('arch'); episodes.add('EP08'); }
    description = 'LangGraph for stateful control, RAG for knowledge, evals to ship with confidence.';
  }

  // ── AI SAAS ──
  else if (goal === 'saas') {
    name = 'AI SaaS Product Stack';
    stack = ['fastapi', 'stripe', 'rag_adv', 'evals', 'arch'];
    arch = ['React Frontend', 'FastAPI Backend', 'AI Service Layer', 'Vector DB', 'Stripe + Auth'];
    episodes.add('EP06'); episodes.add('EP01'); episodes.add('EP04'); episodes.add('EP08');
    if (hosting === 'selfhost' || hosting === 'hybrid') { stack.push('ollama'); stack.push('vllm'); episodes.add('EP07'); }
    if (complexity !== 'simple') { stack.push('langgraph'); episodes.add('EP03'); }
    description = 'Everything you need to ship a real AI product with billing, auth, and scalability.';
  }

  // ── DATA / ML PIPELINE ──
  else if (goal === 'pipeline') {
    name = 'ML / Data Pipeline Stack';
    stack = ['lora', 'dspy', 'evals'];
    arch = ['Raw Data', 'Preprocessing', 'Fine-Tuning (LoRA)', 'Evaluation (RAGAS)', 'Deployment'];
    episodes.add('EP02'); episodes.add('EP09'); episodes.add('EP04');
    if (hosting === 'selfhost') { stack.push('vllm'); episodes.add('EP07'); }
    if (timeline === 'production') { stack.push('arch'); episodes.add('EP08'); }
    description = 'Fine-tune on your data, optimize prompts with DSPy, evaluate rigorously before shipping.';
  }

  // ── MULTIMODAL ──
  else if (goal === 'multimodal') {
    name = 'Multimodal AI Stack';
    stack = ['multimodal', 'rag_adv', 'evals'];
    arch = ['Images / PDFs', 'Vision Model', 'Grounding + Extraction', 'RAG Context', 'LLM Response'];
    episodes.add('EP05'); episodes.add('EP01'); episodes.add('EP04');
    if (complexity === 'agents') { stack.push('langgraph'); episodes.add('EP03'); }
    if (memory === 'yes') { stack.push('mem0'); episodes.add('BONUS-MEM'); }
    description = 'GPT-4V + Claude Vision with RAG grounding for production document intelligence.';
  }

  // Deduplicate stack
  stack = [...new Set(stack)];

  // Always add evals if not already there for production
  if (timeline === 'production' && !stack.includes('evals')) {
    stack.push('evals'); episodes.add('EP04');
  }

  return {
    name,
    description,
    tools: stack.map(k => ({ key: k, ...TOOLS[k], color: COLORS[TOOLS[k].color] })),
    arch,
    episodes: [...episodes].map(k => ({ key: k, ...EPISODES[k] })),
  };
}

export { COLORS, TOOLS, EPISODES };
