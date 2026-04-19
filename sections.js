import { birthData, personalityTraits, lifeAreas, superPowers, careerAptitude, communicationData, psychologyDichotomy, elementDistribution, leadershipData } from './data.js';

// ===== NAV =====
export function buildNav() {
  const links = [
    ['#hero', 'Home'], ['#personality', 'Who You Are'], ['#psychology', 'Your Mind'],
    ['#communication', 'Talking'], ['#health', 'Health'], ['#career', 'Jobs'],
    ['#wealth', 'Money'], ['#relationships', 'Love'], ['#domestic', 'Home Life'],
    ['#children', 'Kids'], ['#social', 'Friends'], ['#timeline', 'Future'],
    ['#sadesati', 'Big Test'], ['#remedies', 'Helpful Fixes'],
  ];
  return `<nav class="top-nav">
    <div class="nav-brand">🌿 Life Blueprint</div>
    <div class="nav-links">${links.map(([h, l]) => `<a href="${h}">${l}</a>`).join('')}</div>
    <button class="nav-toggle" onclick="document.querySelector('.nav-links').classList.toggle('open')" aria-label="Menu">☰</button>
  </nav>`;
}

// ===== HERO =====
export function buildHero() {
  return `<section class="hero-section" id="hero">
    <div class="hero-badge"><span class="dot"></span>YOUR LIFE REPORT</div>
    <h1 class="hero-name">${birthData.name}</h1>
    <p class="hero-tagline">This is a fun, easy guide all about you! It tells you how you think, how to make money, what your friends and family are like, and what your future looks like.</p>
    <div class="hero-stats">
      <div class="hero-stat"><div class="val">10</div><div class="lbl">Personality Bits</div></div>
      <div class="hero-stat"><div class="val">8</div><div class="lbl">Life Areas</div></div>
      <div class="hero-stat"><div class="val">14</div><div class="lbl">Cool Charts</div></div>
      <div class="hero-stat"><div class="val">7</div><div class="lbl">Future Steps</div></div>
    </div>
    <div class="scroll-indicator">SCROLL DOWN TO SEE MORE ↓</div>
  </section>`;
}

// ===== PERSONALITY =====
export function buildPersonality() {
  const traits = personalityTraits.map(t => `
    <div class="trait-row">
      <div class="meter-label"><span class="name">${t.trait}</span><span class="score">${t.score}/100</span></div>
      <div class="meter"><div class="meter-fill" style="width:${t.score}%"></div></div>
      <div class="trait-desc">${t.desc}</div>
    </div>`).join('');

  return `<section class="section" id="personality">
    <div class="reveal"><span class="section-label">01 — Who You Are</span>
    <h2 class="section-title">The Building Blocks of You</h2>
    <p class="section-subtitle">You are someone who needs to feel safe, loves nice things, and works very hard. You like things that are real and safe, not wild and risky.</p></div>
    <div class="dual-col">
      <div class="reveal">
        <div class="glass-card">${traits}</div>
      </div>
      <div class="reveal reveal-delay-1">
        <div class="chart-wrap"><canvas id="personalityChart"></canvas></div>
        <div class="chart-wrap" style="margin-top:20px"><canvas id="elementChart"></canvas></div>
      </div>
    </div>
    <div class="reveal reveal-delay-2" style="margin-top:32px">
      <div class="chart-wrap"><canvas id="lifeAreaChart"></canvas></div>
    </div>
    <div class="grid-4 reveal reveal-delay-2" style="margin-top:24px">
      ${lifeAreas.map(a => `<div class="info-card">
        <div class="card-icon">${a.icon}</div>
        <div class="card-title">${a.area} <span style="color:${a.color};font-family:var(--font-mono);font-size:0.8rem">${a.score}%</span></div>
        <div class="card-desc">${a.desc}</div>
      </div>`).join('')}
    </div>
  </section>`;
}

// ===== SUPERPOWERS =====
export function buildSuperpowers() {
  return `<section class="section" id="superpowers">
    <div class="reveal"><span class="section-label">02 — Superpowers</span>
    <h2 class="section-title">What Makes You Awesome</h2>
    <p class="section-subtitle">Here are six amazing things about you. You learned to be strong when you were young, and now you use your charm and smarts to win!</p></div>
    <div class="grid-3 reveal">
      ${superPowers.map(s => `<div class="info-card">
        <div class="card-icon">${s.icon}</div>
        <div class="card-title">${s.title}</div>
        <div class="card-desc">${s.desc}</div>
      </div>`).join('')}
    </div>
  </section>`;
}

// ===== PSYCHOLOGY DICHOTOMY =====
export function buildPsychology() {
  const { internal, external } = psychologyDichotomy;
  return `<section class="section" id="psychology">
    <div class="reveal"><span class="section-label">03 — Your Mind</span>
    <h2 class="section-title">Inside vs. Outside</h2>
    <p class="section-subtitle">You have two sides! Inside, you want a quiet, cozy home. Outside, the world wants you to be a loud, brave boss.</p></div>
    <div class="reveal">
      <div class="chart-wrap"><canvas id="dichotomyChart"></canvas></div>
    </div>
    <div class="dichotomy-grid reveal" style="margin-top:24px">
      <div class="dichotomy-side">
        <div class="dichotomy-label" style="color:var(--accent-violet)">🔮 ${internal.label}</div>
        ${internal.traits.map(t => `<div class="trait-row">
          <div class="meter-label"><span class="name">${t.name}</span><span class="score">${t.score}</span></div>
          <div class="meter"><div class="meter-fill" style="width:${t.score}%;background:linear-gradient(90deg,var(--accent-violet),#8060cc)"></div></div>
          <div class="trait-desc">${t.desc}</div>
        </div>`).join('')}
      </div>
      <div class="dichotomy-side">
        <div class="dichotomy-label" style="color:var(--accent-emerald)">✨ ${external.label}</div>
        ${external.traits.map(t => `<div class="trait-row">
          <div class="meter-label"><span class="name">${t.name}</span><span class="score">${t.score}</span></div>
          <div class="meter"><div class="meter-fill" style="width:${t.score}%;background:linear-gradient(90deg,var(--accent-emerald),#2ca89a)"></div></div>
          <div class="trait-desc">${t.desc}</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="reveal" style="margin-top:24px">
      <div class="glass-card">
        <div class="card-title">🏛️ Wanting Things to be Safe and Real</div>
        <div class="card-desc">You are very practical. You don't mind working super hard, as long as it gets you a safe home and money in the bank. You don't like silly ideas that don't make sense. You just want things you can see and use.</div>
      </div>
    </div>
    <div class="reveal" style="margin-top:16px">
      <div class="glass-card">
        <div class="card-title">🛡️ Turning Loneliness into Strength</div>
        <div class="card-desc">When you were younger, you had to learn to be strong all by yourself. Because of this, you learned how to cheer yourself up and stay strong. Now, no one can break you down because your strength comes from inside!</div>
      </div>
    </div>
  </section>`;
}

// ===== COMMUNICATION =====
export function buildCommunication() {
  return `<section class="section" id="communication">
    <div class="reveal"><span class="section-label">04 — Talking</span>
    <h2 class="section-title">How You Talk to People</h2>
    <p class="section-subtitle">Your words are your magic trick! You can be super sweet to get what you want, or very blunt when you are angry.</p></div>
    <div class="dual-col">
      <div class="reveal">
        <div class="chart-wrap"><canvas id="communicationChart"></canvas></div>
      </div>
      <div class="reveal reveal-delay-1">
        ${communicationData.modes.map(m => `<div class="glass-card" style="margin-bottom:12px">
          <div class="meter-label"><span class="name" style="font-weight:600">${m.mode}</span><span class="score" style="color:${m.color}">${m.score}/100</span></div>
          <div class="meter"><div class="meter-fill" style="width:${m.score}%;background:${m.color}"></div></div>
          <div class="trait-desc">${m.desc}</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="grid-2 reveal" style="margin-top:24px">
      <div class="glass-card">
        <div class="card-title">🧲 Sweet & Charming Mode</div>
        <div class="card-desc">When you are with friends or at work, you talk so nicely that everyone wants to listen to you. You can make people agree with you without even trying hard. You use your charm to win!</div>
        <div style="margin-top:12px"><span class="tag">Being Sweet: 95/100</span><span class="tag">Making Friends: 90/100</span></div>
      </div>
      <div class="glass-card">
        <div class="card-title">⚡ Blunt & Honest Mode</div>
        <div class="card-desc">When you are at home or if someone makes you mad, you stop being sweet. You say exactly what you think, very loudly and clearly. It's great for business, but it can sometimes make your family upset.</div>
        <div style="margin-top:12px"><span class="tag">Being Honest: 88/100</span><span class="tag">Hurting Feelings: 72/100</span></div>
      </div>
    </div>
  </section>`;
}

// ===== CAREER =====
export function buildCareer() {
  return `<section class="section" id="career">
    <div class="reveal"><span class="section-label">05 — Jobs</span>
    <h2 class="section-title">Work & Being the Boss</h2>
    <p class="section-subtitle">You climb the ladder slowly and surely until you are the boss. You are not lucky; you just work harder and smarter than everyone else.</p></div>
    <div class="dual-col">
      <div class="reveal">
        <div class="chart-wrap"><canvas id="careerChart"></canvas></div>
      </div>
      <div class="reveal reveal-delay-1">
        <div class="chart-wrap"><canvas id="leadershipChart"></canvas></div>
      </div>
    </div>
    <div class="reveal" style="margin-top:24px">
      <div class="glass-card">
        <div class="card-title">⚙️ What You Need to Work Best</div>
        <div class="card-desc">You do your best work when you have a plan and enough time. You hate it when things are crazy, fast, and messy. You like to take your time, think about it, and make sure everything is perfect. You hate being rushed!</div>
      </div>
    </div>
    <div class="grid-4 reveal" style="margin-top:20px">
      ${careerAptitude.map(c => `<div class="info-card">
        <div class="meter-label"><span class="name" style="font-weight:600">${c.field}</span><span class="score" style="color:${c.color}">${c.score}%</span></div>
        <div class="meter"><div class="meter-fill" style="width:${c.score}%;background:${c.color}"></div></div>
      </div>`).join('')}
    </div>
    <div class="grid-2 reveal" style="margin-top:20px">
      <div class="glass-card">
        <div class="card-title">👑 How You Lead: ${leadershipData.style}</div>
        <div class="card-desc">You are a natural boss! You like to watch quietly first to see what is going on. Then, you step up and lead because you are so smart and brave.</div>
      </div>
      <div class="glass-card">
        <div class="card-title">⚠️ Boss Weaknesses</div>
        ${leadershipData.weaknesses.map(w => `<div style="margin-top:12px">
          <div class="meter-label"><span class="name">${w.name}</span><span class="risk-badge risk-medium">${w.level}%</span></div>
          <div class="meter"><div class="meter-fill" style="width:${w.level}%;background:var(--accent-amber)"></div></div>
          <div class="trait-desc">${w.desc}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}
