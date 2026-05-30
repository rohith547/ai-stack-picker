import React, { useState } from 'react';
import { QUESTIONS, getRecommendation } from './data/engine.js';

const TOTAL = QUESTIONS.length;

function ProgressBar({ step }) {
  const pct = Math.round((step / TOTAL) * 100);
  return (
    <div className="progress-bar-wrap">
      <div className="progress-label">
        <span>Question {step} of {TOTAL}</span>
        <span>{pct}% complete</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: pct + '%' }} />
      </div>
    </div>
  );
}

function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <div className="start-icon">🎯</div>
      <h2>Find Your Perfect AI Stack</h2>
      <p>Answer 5 questions and get a personalized recommendation — tools, architecture, and the exact episodes that teach each piece.</p>
      <div className="feature-list">
        <div className="feature-item">Personalized to your exact use case</div>
        <div className="feature-item">Visual architecture diagram</div>
        <div className="feature-item">Curated episode recommendations</div>
        <div className="feature-item">Copy-ready for your team</div>
      </div>
      <button className="btn-start" onClick={onStart}>
        Start — takes 60 seconds →
      </button>
    </div>
  );
}

function Question({ question, answer, onSelect, onNext, onBack, stepIdx }) {
  return (
    <>
      <ProgressBar step={stepIdx + 1} />
      <div className="question-body">
        <div className="question-num">Question {stepIdx + 1}</div>
        <div className="question-text">{question.text}</div>
        <div className="question-sub">{question.sub}</div>
        <div className={`options-grid cols-${question.cols || 2}`}>
          {question.options.map(opt => (
            <button
              key={opt.value}
              className={'option-btn' + (answer === opt.value ? ' selected' : '')}
              onClick={() => onSelect(opt.value)}
            >
              <div className="option-icon">{opt.icon}</div>
              <div>
                <div className="option-label">{opt.label}</div>
                <div className="option-desc">{opt.desc}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="quiz-footer">
        <button className="btn-back" onClick={onBack} disabled={stepIdx === 0}>← Back</button>
        <button className="btn-next" onClick={onNext} disabled={!answer}>
          {stepIdx === TOTAL - 1 ? '🎯 Get My Stack' : 'Next →'}
        </button>
      </div>
    </>
  );
}

function Results({ answers, onRestart }) {
  const rec = getRecommendation(answers);
  const [copied, setCopied] = useState(false);

  const shareText = `I just found my AI engineering stack with the free AI Stack Picker! 🎯\n\nMy stack: ${rec.tools.map(t => t.name).join(', ')}\n\nTry it yourself 👇`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://ai-stack-picker.vercel.app')}`;

  return (
    <>
      <div className="result-header">
        <div className="result-badge">✓ Your Stack Is Ready</div>
        <div className="result-title">{rec.name}</div>
        <div className="result-subtitle">{rec.description}</div>
      </div>
      <div className="result-body">

        {/* Tool chips */}
        <div className="stack-section">
          <h3>Recommended Tools</h3>
          <div className="stack-chips">
            {rec.tools.map(tool => (
              <div key={tool.key} className="chip" style={{
                background: tool.color.bg,
                borderColor: tool.color.border,
                color: tool.color.text,
              }}>
                {tool.name}
                {tool.ep && <span style={{ opacity: 0.65, fontSize: '0.72rem' }}> · {tool.ep}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Architecture flow */}
        <div className="arch-box">
          <h3>Architecture Diagram</h3>
          <div className="arch-flow">
            {rec.arch.map((node, i) => (
              <React.Fragment key={i}>
                <div className="arch-node">{node}</div>
                {i < rec.arch.length - 1 && <div className="arch-arrow">→</div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Episodes */}
        <div className="stack-section">
          <h3>Episodes to Watch First</h3>
          <div className="episodes-grid">
            {rec.episodes.map(ep => (
              <div key={ep.key} className="ep-card">
                <div className="ep-num">{ep.label}</div>
                <div className="ep-name">{ep.title}</div>
                <div className="ep-why">{ep.why}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Share */}
        <div className="share-section">
          <h3>🎉 Share your stack with your team</h3>
          <p>Built by Advanced AI Engineering — 14 episodes covering every tool in your stack</p>
          <div className="share-btns">
            <button className="btn-share btn-linkedin" onClick={() => window.open(linkedinUrl, '_blank')}>
              🔗 Share on LinkedIn
            </button>
            <button className="btn-share btn-copy" onClick={handleCopy}>
              {copied ? '✓ Copied!' : '📋 Copy Post'}
            </button>
            <button className="btn-share btn-restart" onClick={onRestart}>
              ↺ Start Over
            </button>
          </div>
        </div>

      </div>
    </>
  );
}

export default function App() {
  const [screen, setScreen] = useState('start'); // start | quiz | result
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQ = QUESTIONS[step];
  const currentAnswer = answers[currentQ?.id];

  const handleStart = () => setScreen('quiz');

  const handleSelect = (value) => {
    setAnswers(prev => ({ ...prev, [currentQ.id]: value }));
  };

  const handleNext = () => {
    if (step === TOTAL - 1) {
      setScreen('result');
    } else {
      setStep(s => s + 1);
    }
  };

  const handleBack = () => {
    if (step === 0) setScreen('start');
    else setStep(s => s - 1);
  };

  const handleRestart = () => {
    setAnswers({});
    setStep(0);
    setScreen('start');
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-logo">🧠 <span>AI</span> Stack Picker</div>
        <div className="nav-tag">Free Tool · Advanced AI Engineering</div>
      </nav>

      <div className="hero">
        <div className="hero-eyebrow">Free Tool for AI Engineers</div>
        <h1>Find Your <span>Perfect AI Stack</span> in 60 Seconds</h1>
        <p>Stop googling "CrewAI vs LangGraph". Answer 5 questions and get your exact stack, architecture, and learning path.</p>
        <div className="hero-stats">
          <div className="hero-stat"><strong>14</strong><span>Tech stacks mapped</span></div>
          <div className="hero-stat"><strong>5</strong><span>Questions only</span></div>
          <div className="hero-stat"><strong>60s</strong><span>Time to result</span></div>
        </div>
      </div>

      <div className="quiz-wrap">
        <div className="quiz-card">
          {screen === 'start' && <StartScreen onStart={handleStart} />}
          {screen === 'quiz' && (
            <Question
              question={currentQ}
              answer={currentAnswer}
              onSelect={handleSelect}
              onNext={handleNext}
              onBack={handleBack}
              stepIdx={step}
            />
          )}
          {screen === 'result' && <Results answers={answers} onRestart={handleRestart} />}
        </div>
      </div>

      <section className="how-section">
        <h2>How it works</h2>
        <p style={{ color: '#64748B', marginBottom: '32px' }}>Built from 14 episodes of advanced AI engineering content</p>
        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <h3>Answer 5 questions</h3>
            <p>What you're building, complexity, hosting, memory needs, and timeline.</p>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <h3>Get your stack</h3>
            <p>Tools, frameworks, and an architecture diagram tailored to your use case.</p>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <h3>Watch the right episodes</h3>
            <p>Curated list of the exact episodes that teach each part of your stack.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        Built with ❤️ by <a href="#">Advanced AI Engineering</a> · 14 episodes covering the full AI engineering stack
      </footer>
    </>
  );
}
