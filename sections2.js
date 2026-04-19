import { birthData, healthData, wealthData, financialProjection, relationshipProfile, domesticData, progenyData, siblingData, socialVigilance, timelineData, overarchingPhases, sadeSatiData, remedyData, behavioralData } from './data.js';

// ===== HEALTH =====
export function buildHealth() {
  return `<section class="section" id="health">
    <div class="reveal"><span class="section-label">06 — Health & Constitution</span>
    <h2 class="section-title">Physical Constitution & Health Trajectory</h2>
    <p class="section-subtitle">The body operates as a direct mirror to internal stress levels. Generally gifted with strong foundational health but with specific, quantifiable vulnerabilities requiring lifelong management.</p></div>
    <div class="dual-col">
      <div class="reveal"><div class="chart-wrap"><canvas id="healthChart"></canvas></div></div>
      <div class="reveal reveal-delay-1">
        <div class="glass-card">
          <div class="card-title">💪 Physical Attributes & Presence</div>
          <div class="card-desc">Naturally possesses a powerful, sturdy physical frame — strong, prominent neck, relatively square-shaped figure, and inherent physical solidity. Highly expressive face with large, gleaming eyes, nicely formed features, and a mesmerizing vocal quality. This sturdiness provides immense baseline stamina, allowing them to endure long hours that would easily exhaust others.</div>
        </div>
      </div>
    </div>
    <div class="grid-3 reveal" style="margin-top:24px">
      ${healthData.map(h => `<div class="glass-card">
        <div class="meter-label">
          <span class="name" style="font-weight:600">${h.area}</span>
          <span class="risk-badge ${h.risk > 70 ? 'risk-high' : h.risk > 50 ? 'risk-medium' : 'risk-low'}">${h.risk > 70 ? 'HIGH' : h.risk > 50 ? 'MEDIUM' : 'LOW'} ${h.risk}%</span>
        </div>
        <div class="meter"><div class="meter-fill" style="width:${h.risk}%;background:${h.color}"></div></div>
        <div class="divider"></div>
        <div style="font-size:0.8rem;color:var(--accent-coral);font-weight:500;margin-bottom:6px">⚡ Trigger:</div>
        <div class="trait-desc">${h.trigger}</div>
        <div style="font-size:0.8rem;color:var(--accent-emerald);font-weight:500;margin:10px 0 6px">🛡️ Prevention:</div>
        <div class="trait-desc">${h.advice}</div>
      </div>`).join('')}
    </div>
  </section>`;
}

// ===== WEALTH =====
export function buildWealth() {
  return `<section class="section" id="wealth">
    <div class="reveal"><span class="section-label">07 — Wealth Generation</span>
    <h2 class="section-title">Financial Strategy & Wealth Mechanics</h2>
    <p class="section-subtitle">One of the most prominent features of this individual's life blueprint. Inherently designed to accumulate massive financial resources through highly specific, disciplined mechanics.</p></div>
    <div class="dual-col">
      <div class="reveal"><div class="chart-wrap"><canvas id="wealthChart"></canvas></div></div>
      <div class="reveal reveal-delay-1"><div class="chart-wrap"><canvas id="financialChart"></canvas></div></div>
    </div>
    <div class="grid-2 reveal" style="margin-top:24px">
      <div class="glass-card">
        <div class="card-title" style="color:var(--accent-emerald)">💰 Wealth Creation Engines</div>
        ${wealthData.mechanics.map(m => `<div class="trait-row">
          <div class="meter-label"><span class="name">${m.factor}</span><span class="score">${m.score}</span></div>
          <div class="meter"><div class="meter-fill" style="width:${m.score}%;background:var(--accent-emerald)"></div></div>
          <div class="trait-desc">${m.desc}</div>
        </div>`).join('')}
      </div>
      <div class="glass-card">
        <div class="card-title" style="color:var(--accent-rose)">⚠️ Financial Risk Factors</div>
        ${wealthData.risks.map(r => `<div class="trait-row">
          <div class="meter-label"><span class="name">${r.risk}</span><span class="risk-badge ${r.level > 80 ? 'risk-high' : 'risk-medium'}">${r.level}%</span></div>
          <div class="meter"><div class="meter-fill" style="width:${r.level}%;background:var(--accent-rose)"></div></div>
          <div class="trait-desc">${r.desc}</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="reveal" style="margin-top:20px">
      <div class="glass-card" style="border-left:3px solid var(--accent-amber)">
        <div class="card-title">⚡ Critical Financial Directive</div>
        <div class="card-desc">The underlying data unequivocally and strongly advises against speculative investments, gambling, stock market speculation, or "get-rich-quick" channels. Wealth is meant to be built slowly and solidly through concrete, tangible assets, joint ventures, or traditional businesses. Engaging in high-risk behavior will inevitably lead to sudden, severe financial shifts, legal complications, or massive losses. <strong>Discipline and patience are the greatest financial assets.</strong></div>
      </div>
    </div>
  </section>`;
}

// ===== RELATIONSHIPS =====
export function buildRelationships() {
  return `<section class="section" id="relationships">
    <div class="reveal"><span class="section-label">08 — Intimate Relationships</span>
    <h2 class="section-title">Marriage, Love & Family Dynamics</h2>
    <p class="section-subtitle">Complex and characterized by a deep yearning for soulmate connection, intense sensuality, and the frequent intrusion of uncompromising standards and professional stress.</p></div>
    <div class="dual-col">
      <div class="reveal"><div class="chart-wrap"><canvas id="relationshipChart"></canvas></div></div>
      <div class="reveal reveal-delay-1">
        ${Object.values(relationshipProfile).map(r => `<div class="glass-card" style="margin-bottom:12px">
          <div class="meter-label"><span class="name" style="font-weight:600">${r.label}</span><span class="score">${r.score}/100</span></div>
          <div class="meter"><div class="meter-fill" style="width:${r.score}%;background:var(--accent-rose)"></div></div>
          <div class="trait-desc">${r.value}</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="grid-2 reveal" style="margin-top:24px">
      <div class="glass-card">
        <div class="card-title">💗 Approach to Romance</div>
        <div class="card-desc">Highly sensual, appreciative of physical touch, and deeply romantic. But moves very cautiously. Not superficial — judges partners on character, intellect, and personality rather than mere appearance. Actively seeks long-lasting, stable love with a deep-seated dislike for sudden changes. When committed, shares a deep bond of trust and honesty.</div>
      </div>
      <div class="glass-card">
        <div class="card-title">⚡ Partnership Frictions</div>
        <div class="card-desc">Often described as a "roller-coaster." The primary disruptor is their own temperament — stubbornness, occasional arrogance, and bringing professional stress into home. If tone and urge to dominate aren't managed, risk of alienating spouse. Unresolved ego battles could lead to temporary separations. Success relies entirely on practicing soft, empathetic communication at home.</div>
      </div>
    </div>
  </section>`;
}

// ===== DOMESTIC =====
export function buildDomestic() {
  return `<section class="section" id="domestic">
    <div class="reveal"><span class="section-label">09 — Domestic Sphere</span>
    <h2 class="section-title">Home, Parents & Real Estate</h2>
    <p class="section-subtitle">The concept of "home" is arguably the most critical component — where ultimate comfort and recharge happens, yet also the arena of the most profound psychological conditioning.</p></div>
    <div class="dual-col">
      <div class="reveal"><div class="chart-wrap"><canvas id="domesticChart"></canvas></div></div>
      <div class="reveal reveal-delay-1">
        <div class="glass-card" style="margin-bottom:12px">
          <div class="card-title">👩 The Maternal Imprint</div>
          <div class="card-desc">The mother is perceived not just as nurturing, but as an intense, strict, highly organized, and disciplined authority. Early childhood was heavily structured with strict rules, rigid schedules, and high expectations.</div>
          <div class="divider"></div>
          <div class="meter-label"><span class="name" style="color:var(--accent-emerald)">✅ Discipline Advantage</span><span class="score">${domesticData.maternalInfluence.advantage.score}%</span></div>
          <div class="meter"><div class="meter-fill" style="width:${domesticData.maternalInfluence.advantage.score}%;background:var(--accent-emerald)"></div></div>
          <div class="trait-desc">${domesticData.maternalInfluence.advantage.desc}</div>
          <div style="margin-top:12px">
            <div class="meter-label"><span class="name" style="color:var(--accent-rose)">⚠️ Emotional Cost</span><span class="score">${domesticData.maternalInfluence.cost.score}%</span></div>
            <div class="meter"><div class="meter-fill" style="width:${domesticData.maternalInfluence.cost.score}%;background:var(--accent-rose)"></div></div>
            <div class="trait-desc">${domesticData.maternalInfluence.cost.desc}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-3 reveal" style="margin-top:24px">
      <div class="glass-card">
        <div class="card-title">👨 Paternal Dynamic</div>
        <div class="meter-label"><span class="name">Distance Level</span><span class="score">${domesticData.paternalDynamic.distance}%</span></div>
        <div class="meter"><div class="meter-fill" style="width:${domesticData.paternalDynamic.distance}%;background:var(--accent-amber)"></div></div>
        <div class="card-desc">${domesticData.paternalDynamic.desc}</div>
      </div>
      <div class="glass-card">
        <div class="card-title">🏠 Property Destiny</div>
        <div class="meter-label"><span class="name">Ownership Potential</span><span class="score">${domesticData.propertyDestiny.ownership}%</span></div>
        <div class="meter"><div class="meter-fill" style="width:${domesticData.propertyDestiny.ownership}%;background:var(--accent-gold)"></div></div>
        <div class="card-desc">${domesticData.propertyDestiny.desc}</div>
      </div>
      <div class="glass-card">
        <div class="card-title">🔥 Domestic Friction</div>
        <div class="meter-label"><span class="name">Friction Level</span><span class="risk-badge risk-medium">${domesticData.domesticFriction.score}%</span></div>
        <div class="meter"><div class="meter-fill" style="width:${domesticData.domesticFriction.score}%;background:var(--accent-coral)"></div></div>
        <div class="card-desc">${domesticData.domesticFriction.desc}</div>
      </div>
    </div>
  </section>`;
}

// ===== CHILDREN =====
export function buildChildren() {
  return `<section class="section" id="children">
    <div class="reveal"><span class="section-label">10 — Progeny & Parenting</span>
    <h2 class="section-title">The Complexity of Children</h2>
    <p class="section-subtitle">The area most intensely affected by inherited behavioral patterns. Significant, unavoidable challenges that ultimately serve as mechanisms for profound personal growth.</p></div>
    <div class="dual-col">
      <div class="reveal"><div class="chart-wrap"><canvas id="progenyChart"></canvas></div></div>
      <div class="reveal reveal-delay-1">
        ${progenyData.areas.map(a => `<div class="glass-card" style="margin-bottom:12px">
          <div class="card-icon">${a.icon}</div>
          <div class="meter-label"><span class="name" style="font-weight:600">${a.phase}</span><span class="risk-badge ${a.difficulty > 70 ? 'risk-high' : a.difficulty > 50 ? 'risk-medium' : 'risk-low'}">${a.difficulty}%</span></div>
          <div class="meter"><div class="meter-fill" style="width:${a.difficulty}%;background:${a.difficulty > 70 ? 'var(--accent-coral)' : a.difficulty > 50 ? 'var(--accent-amber)' : 'var(--accent-emerald)'}"></div></div>
          <div class="card-desc">${a.desc}</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="reveal" style="margin-top:24px">
      <div class="glass-card">
        <div class="card-title">👫 Sibling Dynamics: Duty, Distance & Resolution</div>
        <div class="card-desc">${siblingData.desc}</div>
        <div class="divider"></div>
        <div class="grid-4" style="gap:12px">
          <div><div class="meter-label"><span class="name">Duty</span><span class="score">${siblingData.duty}%</span></div><div class="meter"><div class="meter-fill" style="width:${siblingData.duty}%"></div></div></div>
          <div><div class="meter-label"><span class="name">Distance</span><span class="score">${siblingData.distance}%</span></div><div class="meter"><div class="meter-fill" style="width:${siblingData.distance}%;background:var(--accent-amber)"></div></div></div>
          <div><div class="meter-label"><span class="name">Rivalry</span><span class="score">${siblingData.rivalry}%</span></div><div class="meter"><div class="meter-fill" style="width:${siblingData.rivalry}%;background:var(--accent-coral)"></div></div></div>
          <div><div class="meter-label"><span class="name">Bond</span><span class="score">${siblingData.bond}%</span></div><div class="meter"><div class="meter-fill" style="width:${siblingData.bond}%;background:var(--accent-emerald)"></div></div></div>
        </div>
      </div>
    </div>
  </section>`;
}

// ===== SOCIAL =====
export function buildSocial() {
  return `<section class="section" id="social">
    <div class="reveal"><span class="section-label">11 — Social Dynamics</span>
    <h2 class="section-title">Elite Associations & Hidden Enmities</h2>
    <p class="section-subtitle">Naturally drawn to high-status circles but must remain hyper-vigilant against secret enemies and betrayal from those considered close friends.</p></div>
    <div class="reveal"><div class="chart-wrap"><canvas id="socialChart"></canvas></div></div>
    <div class="grid-2 reveal" style="margin-top:24px">
      <div class="glass-card">
        <div class="card-title" style="color:var(--accent-blue)">✅ Social Strengths</div>
        ${socialVigilance.strengths.map(s => `<div class="trait-row">
          <div class="meter-label"><span class="name">${s.name}</span><span class="score">${s.score}</span></div>
          <div class="meter"><div class="meter-fill" style="width:${s.score}%;background:var(--accent-blue)"></div></div>
          <div class="trait-desc">${s.desc}</div>
        </div>`).join('')}
      </div>
      <div class="glass-card">
        <div class="card-title" style="color:var(--accent-rose)">⚠️ Hidden Risks</div>
        ${socialVigilance.risks.map(r => `<div class="trait-row">
          <div class="meter-label"><span class="name">${r.name}</span><span class="risk-badge risk-high">${r.level}%</span></div>
          <div class="meter"><div class="meter-fill" style="width:${r.level}%;background:var(--accent-rose)"></div></div>
          <div class="trait-desc">${r.desc}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

// ===== TIMELINE =====
export function buildTimeline() {
  return `<section class="section" id="timeline">
    <div class="reveal"><span class="section-label">12 — Predictive Timeline</span>
    <h2 class="section-title">Strategic Micro-Forecast (2024–2038)</h2>
    <p class="section-subtitle">The individual is navigating a significant 10-year phase shifting focus from external expansion to internal processing, domestic affairs, and asset consolidation.</p></div>
    <div class="reveal">
      ${overarchingPhases.map(p => `<div class="phase-card">
        <div class="phase-period">${p.period}</div>
        <div class="phase-title">${p.label} ${p.status === 'active' ? '<span class="tl-status active">ACTIVE</span>' : '<span class="tl-status upcoming">UPCOMING</span>'}</div>
        <ul class="phase-list">${p.themes.map(t => `<li>${t}</li>`).join('')}</ul>
      </div>`).join('')}
    </div>
    <div class="reveal">
      <div class="timeline">
        ${timelineData.map(t => `<div class="tl-item">
          <div class="tl-dot ${t.status}"></div>
          <div class="tl-content">
            <div class="tl-period">${t.emoji} ${t.period}</div>
            <div class="tl-title">${t.label}</div>
            <div class="tl-theme">${t.theme}</div>
            <div class="tl-detail">${t.detail}</div>
            <div class="tl-status ${t.status}">${t.status}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

// ===== SADE SATI =====
export function buildSadeSati() {
  return `<section class="section" id="sadesati">
    <div class="reveal"><span class="section-label">13 — Structural Audit</span>
    <h2 class="section-title">The Cyclical Structural Audit (2032–2038)</h2>
    <p class="section-subtitle">A critical, naturally occurring 7.5-year cycle of profound structural realignment commencing ${sadeSatiData.startDate}. Not a period to fear — but one to systematically prepare for.</p></div>
    <div class="reveal"><div class="chart-wrap"><canvas id="sadeSatiChart"></canvas></div></div>
    <div class="grid-3 reveal" style="margin-top:24px">
      ${sadeSatiData.phases.map(p => `<div class="glass-card">
        <div class="card-title">${p.phase} <span class="risk-badge ${p.intensity > 70 ? 'risk-high' : p.intensity > 50 ? 'risk-medium' : 'risk-low'}">${p.intensity}%</span></div>
        <div style="font-family:var(--font-mono);font-size:0.75rem;color:var(--accent-gold);margin:8px 0">${p.period}</div>
        <div class="divider"></div>
        <div style="font-size:0.8rem;color:var(--accent-coral);font-weight:500;margin-bottom:4px">Focus: ${p.focus}</div>
        <div class="trait-desc">Risk: ${p.risk}</div>
        <div style="font-size:0.8rem;color:var(--accent-emerald);font-weight:500;margin:10px 0 4px">Strategy:</div>
        <div class="trait-desc">${p.strategy}</div>
      </div>`).join('')}
    </div>
    <div class="reveal" style="margin-top:20px">
      <div class="glass-card" style="border-left:3px solid var(--accent-gold)">
        <div class="card-title">🛡️ Survival Strategy</div>
        <div class="card-desc">${sadeSatiData.survivalStrategy}</div>
      </div>
    </div>
  </section>`;
}

// ===== REMEDIES =====
export function buildRemedies() {
  return `<section class="section" id="remedies">
    <div class="reveal"><span class="section-label">14 — Strategic Remediation</span>
    <h2 class="section-title">Lifestyle Optimization & Protocols</h2>
    <p class="section-subtitle">Practical, targeted tools designed to anchor the psychology, optimize bio-electrical energy, and enforce necessary behavioral changes — not mystical cures.</p></div>
    <div class="grid-2 reveal">
      ${remedyData.map(r => `<div class="remedy-card">
        <div class="remedy-cat">${r.category}</div>
        <div class="remedy-icon">${r.icon}</div>
        <div class="remedy-name">${r.name}</div>
        <div class="remedy-subtitle">${r.subtitle}</div>
        <div class="remedy-benefits">${r.benefits}</div>
        <div class="remedy-protocol">📋 ${r.protocol}</div>
      </div>`).join('')}
    </div>
    <div class="reveal" style="margin-top:32px">
      <h3 style="font-family:var(--font-display);font-weight:700;font-size:1.3rem;margin-bottom:20px;color:var(--accent-gold)">🔄 Behavioral Interventions</h3>
      <div class="grid-2">
        ${behavioralData.map(b => `<div class="glass-card">
          <div class="card-icon">${b.icon}</div>
          <div class="card-title">${b.title}</div>
          <div class="card-desc">${b.desc}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

// ===== FOOTER =====
export function buildFooter() {
  return `<footer class="footer">
    <p>🌿 Life Blueprint — ${birthData.name}</p>
    <p style="margin-top:8px">Comprehensive Life Assessment & Strategic Blueprint</p>
    <p style="margin-top:4px">Generated with deep analytical precision</p>
  </footer>`;
}
