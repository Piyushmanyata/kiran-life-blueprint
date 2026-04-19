import { birthData, personalityTraits, lifeAreas, superPowers, careerAptitude, communicationData, psychologyDichotomy, elementDistribution, leadershipData } from './data.js';

// ===== NAV =====
export function buildNav() {
  const links = [
    ['#hero', 'Home'], ['#personality', 'Personality'], ['#psychology', 'Psychology'],
    ['#communication', 'Communication'], ['#health', 'Health'], ['#career', 'Career'],
    ['#wealth', 'Wealth'], ['#relationships', 'Relationships'], ['#domestic', 'Domestic'],
    ['#children', 'Children'], ['#social', 'Social'], ['#timeline', 'Timeline'],
    ['#sadesati', 'Audit'], ['#remedies', 'Remedies'],
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
    <div class="hero-badge"><span class="dot"></span>COMPREHENSIVE LIFE ASSESSMENT</div>
    <h1 class="hero-name">${birthData.name}</h1>
    <p class="hero-tagline">A deep, exhaustive blueprint covering psychological frameworks, wealth strategies, relationship dynamics, career progression, and physical well-being — translated into practical, real-world implications.</p>
    <div class="hero-stats">
      <div class="hero-stat"><div class="val">10</div><div class="lbl">Core Traits</div></div>
      <div class="hero-stat"><div class="val">8</div><div class="lbl">Life Areas</div></div>
      <div class="hero-stat"><div class="val">14</div><div class="lbl">Charts</div></div>
      <div class="hero-stat"><div class="val">7</div><div class="lbl">Timeline Phases</div></div>
    </div>
    <div class="scroll-indicator">SCROLL TO EXPLORE ↓</div>
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
    <div class="reveal"><span class="section-label">01 — Core Identity</span>
    <h2 class="section-title">Foundational Personality Architecture</h2>
    <p class="section-subtitle">The individual's core is built upon an absolute need for stability, a strong affinity for material comforts, and a deeply ingrained work ethic that favors long-term security over impulsive risks.</p></div>
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
    <div class="reveal"><span class="section-label">02 — Unique Capabilities</span>
    <h2 class="section-title">What Makes This Person Extraordinary</h2>
    <p class="section-subtitle">Six defining qualities that set this individual apart — forged through early isolation, honed through relentless determination, and deployed through magnetic charisma.</p></div>
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
    <div class="reveal"><span class="section-label">03 — Psychological Framework</span>
    <h2 class="section-title">The Internal vs External Dichotomy</h2>
    <p class="section-subtitle">A profound and constant tension: a deep internal desire for tranquil domesticity paired with an external environment that relentlessly pulls them into leadership and public communication.</p></div>
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
        <div class="card-title">🏛️ The Drive for Stability and Tangible Outcomes</div>
        <div class="card-desc">The primary lens is one of extreme pragmatism. There is an absolute eagerness to persevere through immense hardship, provided the end goal guarantees stability and peace of mind. Theoretical ideas hold very little value unless they can be converted into tangible, measurable outcomes. This manifests as a strong preference for steady, reliable income and physical assets over highly speculative ventures.</div>
      </div>
    </div>
    <div class="reveal" style="margin-top:16px">
      <div class="glass-card">
        <div class="card-title">🛡️ The Conversion of Isolation to Power</div>
        <div class="card-desc">Early isolation forced the development of extraordinary emotional resilience and unique creative thinking. Because the individual could not rely on others for emotional validation, they learned to self-soothe, self-regulate, and build their own internal support structures. This produces psychological armor that makes them virtually indestructible in the face of adversity — their power is entirely self-generated.</div>
      </div>
    </div>
  </section>`;
}

// ===== COMMUNICATION =====
export function buildCommunication() {
  return `<section class="section" id="communication">
    <div class="reveal"><span class="section-label">04 — Communication Matrix</span>
    <h2 class="section-title">The Duality of Expression</h2>
    <p class="section-subtitle">Communication is the individual's greatest strategic tool and most potent weapon — a complex blend of deep empathy, magnetic persuasion, and razor-sharp directness.</p></div>
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
        <div class="card-title">🧲 Magnetism Mode</div>
        <div class="card-desc">In social, networking, and professional settings — a mesmerizing, charismatic way of speaking that naturally draws people in. Highly persuasive with a sweet, pleasing tone. Easily maneuvers conversations, negotiates complex deals, and achieves desired outcomes without force. Rarely short of allies or opportunities.</div>
        <div style="margin-top:12px"><span class="tag">Persuasion: 95/100</span><span class="tag">Charm: 92/100</span><span class="tag">Networking: 90/100</span></div>
      </div>
      <div class="glass-card">
        <div class="card-title">⚡ Blunt Force Mode</div>
        <div class="card-desc">In intimate situations or when core values are challenged — a radical, instantaneous shift. Drops diplomacy entirely. Highly direct, blunt, and unapologetic. Expresses opinions with immense confidence, stripping away all pleasantries. Massive strength in business negotiations but primary source of friction within family and domestic life.</div>
        <div style="margin-top:12px"><span class="tag">Directness: 88/100</span><span class="tag">Emotional Damage Risk: 72/100</span></div>
      </div>
    </div>
  </section>`;
}

// ===== CAREER =====
export function buildCareer() {
  return `<section class="section" id="career">
    <div class="reveal"><span class="section-label">05 — Career & Leadership</span>
    <h2 class="section-title">Professional Trajectory & Optimal Environments</h2>
    <p class="section-subtitle">Characterized by slow, methodical ascensions culminating in positions of significant authority, respect, and influence. Not driven by luck but by unyielding work ethic and strategic mind.</p></div>
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
        <div class="card-title">⚙️ Optimal Environment Requirements</div>
        <div class="card-desc">Thrives exclusively in environments requiring practical execution, strategic planning, and tangible outcomes. Abhors fast-paced, chaotic professions that prioritize speed over quality. Requires adequate time to gather data, analyze variables, and execute flawlessly — possessing a deep-seated perfectionistic fear of errors. Does not like to be pressured while working; demands autonomy and respect for their process.</div>
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
        <div class="card-title">👑 Leadership Style: ${leadershipData.style}</div>
        <div class="card-desc">A natural leader who doesn't seek the spotlight immediately, preferring to observe first. Built on unquestionable competence, resilience, and deep understanding of human dynamics. Possesses raw courage to push through unimaginable difficulties and rise to positions of absolute power.</div>
      </div>
      <div class="glass-card">
        <div class="card-title">⚠️ Leadership Vulnerabilities</div>
        ${leadershipData.weaknesses.map(w => `<div style="margin-top:12px">
          <div class="meter-label"><span class="name">${w.name}</span><span class="risk-badge risk-medium">${w.level}%</span></div>
          <div class="meter"><div class="meter-fill" style="width:${w.level}%;background:var(--accent-amber)"></div></div>
          <div class="trait-desc">${w.desc}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}
