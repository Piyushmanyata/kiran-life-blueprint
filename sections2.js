import { birthData, healthData, wealthData, financialProjection, relationshipProfile, domesticData, progenyData, siblingData, socialVigilance, timelineData, overarchingPhases, sadeSatiData, remedyData, behavioralData } from './data.js';

// ===== HEALTH =====
export function buildHealth() {
  return `<section class="section" id="health">
    <div class="reveal"><span class="section-label">06 — Health & Body</span>
    <h2 class="section-title">Your Body and Feeling Good</h2>
    <p class="section-subtitle">Your body is very strong! But when you worry too much, your body feels it. You have to take care of yourself to stay strong.</p></div>
    <div class="dual-col">
      <div class="reveal"><div class="chart-wrap"><canvas id="healthChart"></canvas></div></div>
      <div class="reveal reveal-delay-1">
        <div class="glass-card">
          <div class="card-title">💪 Big and Strong</div>
          <div class="card-desc">You naturally have a very strong, solid body. You have bright eyes and a strong voice. Because you are built so strong, you can work for hours and hours when normal people would get too tired to keep going!</div>
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
        <div style="font-size:0.8rem;color:var(--accent-coral);font-weight:500;margin-bottom:6px">⚡ What Hurts You:</div>
        <div class="trait-desc">${h.trigger}</div>
        <div style="font-size:0.8rem;color:var(--accent-emerald);font-weight:500;margin:10px 0 6px">🛡️ How to Fix It:</div>
        <div class="trait-desc">${h.advice}</div>
      </div>`).join('')}
    </div>
  </section>`;
}

// ===== WEALTH =====
export function buildWealth() {
  return `<section class="section" id="wealth">
    <div class="reveal"><span class="section-label">07 — Money</span>
    <h2 class="section-title">How You Get Rich</h2>
    <p class="section-subtitle">Making money is one of the things you are best at! You are meant to have a lot of money and own a lot of things by working smart.</p></div>
    <div class="dual-col">
      <div class="reveal"><div class="chart-wrap"><canvas id="wealthChart"></canvas></div></div>
      <div class="reveal reveal-delay-1"><div class="chart-wrap"><canvas id="financialChart"></canvas></div></div>
    </div>
    <div class="grid-2 reveal" style="margin-top:24px">
      <div class="glass-card">
        <div class="card-title" style="color:var(--accent-emerald)">💰 How to Make Money</div>
        ${wealthData.mechanics.map(m => `<div class="trait-row">
          <div class="meter-label"><span class="name">${m.factor}</span><span class="score">${m.score}</span></div>
          <div class="meter"><div class="meter-fill" style="width:${m.score}%;background:var(--accent-emerald)"></div></div>
          <div class="trait-desc">${m.desc}</div>
        </div>`).join('')}
      </div>
      <div class="glass-card">
        <div class="card-title" style="color:var(--accent-rose)">⚠️ How to Lose Money</div>
        ${wealthData.risks.map(r => `<div class="trait-row">
          <div class="meter-label"><span class="name">${r.risk}</span><span class="risk-badge ${r.level > 80 ? 'risk-high' : 'risk-medium'}">${r.level}%</span></div>
          <div class="meter"><div class="meter-fill" style="width:${r.level}%;background:var(--accent-rose)"></div></div>
          <div class="trait-desc">${r.desc}</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="reveal" style="margin-top:20px">
      <div class="glass-card" style="border-left:3px solid var(--accent-amber)">
        <div class="card-title">⚡ The Number One Rule for Money</div>
        <div class="card-desc">Do not gamble! Do not play the stock market trying to get rich quick. You must build your money slowly by buying real things like land and businesses. If you try to gamble, you will lose a lot of money. <strong>Being patient is your best trick to get rich.</strong></div>
      </div>
    </div>
  </section>`;
}

// ===== RELATIONSHIPS =====
export function buildRelationships() {
  return `<section class="section" id="relationships">
    <div class="reveal"><span class="section-label">08 — Love</span>
    <h2 class="section-title">Love & Marriage</h2>
    <p class="section-subtitle">You really want a best friend to love forever, but sometimes you get too stubborn and bring work anger home!</p></div>
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
        <div class="card-title">💗 How You Love</div>
        <div class="card-desc">You don't fall in love fast. You want to make sure the person is smart and good first. But once you love them, you are super loyal and will protect them forever. You hate it when things change suddenly!</div>
      </div>
      <div class="glass-card">
        <div class="card-title">⚡ Why Fights Happen</div>
        <div class="card-desc">Your love life can feel like a bumpy ride! The biggest problem is when you act like a boss at home. If you don't talk nicely to your family, they will get upset. You have to remember to be sweet at home.</div>
      </div>
    </div>
  </section>`;
}

// ===== DOMESTIC =====
export function buildDomestic() {
  return `<section class="section" id="domestic">
    <div class="reveal"><span class="section-label">09 — Home Life</span>
    <h2 class="section-title">Home, Parents & Houses</h2>
    <p class="section-subtitle">Your home is super important to you. It's where you rest, but it's also where you learned all your rules when you were a kid.</p></div>
    <div class="dual-col">
      <div class="reveal"><div class="chart-wrap"><canvas id="domesticChart"></canvas></div></div>
      <div class="reveal reveal-delay-1">
        <div class="glass-card" style="margin-bottom:12px">
          <div class="card-title">👩 Growing Up with Mom</div>
          <div class="card-desc">Your mom was very strict! When you were little, she gave you lots of rules and expected you to be perfect.</div>
          <div class="divider"></div>
          <div class="meter-label"><span class="name" style="color:var(--accent-emerald)">✅ The Good Part</span><span class="score">${domesticData.maternalInfluence.advantage.score}%</span></div>
          <div class="meter"><div class="meter-fill" style="width:${domesticData.maternalInfluence.advantage.score}%;background:var(--accent-emerald)"></div></div>
          <div class="trait-desc">${domesticData.maternalInfluence.advantage.desc}</div>
          <div style="margin-top:12px">
            <div class="meter-label"><span class="name" style="color:var(--accent-rose)">⚠️ The Sad Part</span><span class="score">${domesticData.maternalInfluence.cost.score}%</span></div>
            <div class="meter"><div class="meter-fill" style="width:${domesticData.maternalInfluence.cost.score}%;background:var(--accent-rose)"></div></div>
            <div class="trait-desc">${domesticData.maternalInfluence.cost.desc}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-3 reveal" style="margin-top:24px">
      <div class="glass-card">
        <div class="card-title">👨 About Dad</div>
        <div class="meter-label"><span class="name">Feeling Far Away</span><span class="score">${domesticData.paternalDynamic.distance}%</span></div>
        <div class="meter"><div class="meter-fill" style="width:${domesticData.paternalDynamic.distance}%;background:var(--accent-amber)"></div></div>
        <div class="card-desc">${domesticData.paternalDynamic.desc}</div>
      </div>
      <div class="glass-card">
        <div class="card-title">🏠 Owning Houses</div>
        <div class="meter-label"><span class="name">Will You Buy Houses?</span><span class="score">${domesticData.propertyDestiny.ownership}%</span></div>
        <div class="meter"><div class="meter-fill" style="width:${domesticData.propertyDestiny.ownership}%;background:var(--accent-gold)"></div></div>
        <div class="card-desc">${domesticData.propertyDestiny.desc}</div>
      </div>
      <div class="glass-card">
        <div class="card-title">🔥 Fights at Home</div>
        <div class="meter-label"><span class="name">Chance of Fights</span><span class="risk-badge risk-medium">${domesticData.domesticFriction.score}%</span></div>
        <div class="meter"><div class="meter-fill" style="width:${domesticData.domesticFriction.score}%;background:var(--accent-coral)"></div></div>
        <div class="card-desc">${domesticData.domesticFriction.desc}</div>
      </div>
    </div>
  </section>`;
}

// ===== CHILDREN =====
export function buildChildren() {
  return `<section class="section" id="children">
    <div class="reveal"><span class="section-label">10 — Kids</span>
    <h2 class="section-title">Having and Raising Kids</h2>
    <p class="section-subtitle">Raising kids will be one of the hardest things you do, but it will make you a much better person!</p></div>
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
        <div class="card-title">👫 Brothers & Sisters</div>
        <div class="card-desc">${siblingData.desc}</div>
        <div class="divider"></div>
        <div class="grid-4" style="gap:12px">
          <div><div class="meter-label"><span class="name">Helping Them</span><span class="score">${siblingData.duty}%</span></div><div class="meter"><div class="meter-fill" style="width:${siblingData.duty}%"></div></div></div>
          <div><div class="meter-label"><span class="name">Feeling Far</span><span class="score">${siblingData.distance}%</span></div><div class="meter"><div class="meter-fill" style="width:${siblingData.distance}%;background:var(--accent-amber)"></div></div></div>
          <div><div class="meter-label"><span class="name">Arguing</span><span class="score">${siblingData.rivalry}%</span></div><div class="meter"><div class="meter-fill" style="width:${siblingData.rivalry}%;background:var(--accent-coral)"></div></div></div>
          <div><div class="meter-label"><span class="name">Love</span><span class="score">${siblingData.bond}%</span></div><div class="meter"><div class="meter-fill" style="width:${siblingData.bond}%;background:var(--accent-emerald)"></div></div></div>
        </div>
      </div>
    </div>
  </section>`;
}

// ===== SOCIAL =====
export function buildSocial() {
  return `<section class="section" id="social">
    <div class="reveal"><span class="section-label">11 — Friends</span>
    <h2 class="section-title">Friends & Secret Enemies</h2>
    <p class="section-subtitle">You are popular and hang out with rich people, but you have to watch your back because some people are jealous!</p></div>
    <div class="reveal"><div class="chart-wrap"><canvas id="socialChart"></canvas></div></div>
    <div class="grid-2 reveal" style="margin-top:24px">
      <div class="glass-card">
        <div class="card-title" style="color:var(--accent-blue)">✅ The Good Stuff</div>
        ${socialVigilance.strengths.map(s => `<div class="trait-row">
          <div class="meter-label"><span class="name">${s.name}</span><span class="score">${s.score}</span></div>
          <div class="meter"><div class="meter-fill" style="width:${s.score}%;background:var(--accent-blue)"></div></div>
          <div class="trait-desc">${s.desc}</div>
        </div>`).join('')}
      </div>
      <div class="glass-card">
        <div class="card-title" style="color:var(--accent-rose)">⚠️ Watch Out!</div>
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
    <div class="reveal"><span class="section-label">12 — Future</span>
    <h2 class="section-title">What Will Happen Next? (2024–2038)</h2>
    <p class="section-subtitle">Here is a sneak peek at the next 10 years! You are moving from a quiet time into a super busy, money-making time.</p></div>
    <div class="reveal">
      ${overarchingPhases.map(p => `<div class="phase-card">
        <div class="phase-period">${p.period}</div>
        <div class="phase-title">${p.label} ${p.status === 'active' ? '<span class="tl-status active">HAPPENING NOW</span>' : '<span class="tl-status upcoming">COMING SOON</span>'}</div>
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
            <div class="tl-status ${t.status}">${t.status === 'active' ? 'HAPPENING NOW' : t.status === 'current' ? 'HAPPENING NOW' : t.status === 'upcoming' ? 'COMING SOON' : 'IN THE FUTURE'}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

// ===== SADE SATI =====
export function buildSadeSati() {
  return `<section class="section" id="sadesati">
    <div class="reveal"><span class="section-label">13 — Big Test</span>
    <h2 class="section-title">The Big Life Test (2032–2038)</h2>
    <p class="section-subtitle">Starting in ${sadeSatiData.startDate}, life is going to give you a big test! Don't be scared—if you work hard, you will pass and get a big reward.</p></div>
    <div class="reveal"><div class="chart-wrap"><canvas id="sadeSatiChart"></canvas></div></div>
    <div class="grid-3 reveal" style="margin-top:24px">
      ${sadeSatiData.phases.map(p => `<div class="glass-card">
        <div class="card-title">${p.phase} <span class="risk-badge ${p.intensity > 70 ? 'risk-high' : p.intensity > 50 ? 'risk-medium' : 'risk-low'}">${p.intensity}%</span></div>
        <div style="font-family:var(--font-mono);font-size:0.75rem;color:var(--accent-gold);margin:8px 0">${p.period}</div>
        <div class="divider"></div>
        <div style="font-size:0.8rem;color:var(--accent-coral);font-weight:500;margin-bottom:4px">What Happens: ${p.focus}</div>
        <div class="trait-desc">Danger: ${p.risk}</div>
        <div style="font-size:0.8rem;color:var(--accent-emerald);font-weight:500;margin:10px 0 4px">How to Win:</div>
        <div class="trait-desc">${p.strategy}</div>
      </div>`).join('')}
    </div>
    <div class="reveal" style="margin-top:20px">
      <div class="glass-card" style="border-left:3px solid var(--accent-gold)">
        <div class="card-title">🛡️ How to Pass the Test</div>
        <div class="card-desc">${sadeSatiData.survivalStrategy}</div>
      </div>
    </div>
  </section>`;
}

// ===== REMEDIES =====
export function buildRemedies() {
  return `<section class="section" id="remedies">
    <div class="reveal"><span class="section-label">14 — Helpful Fixes</span>
    <h2 class="section-title">Little Tricks to Help You Win</h2>
    <p class="section-subtitle">These are simple tricks, like wearing nice stones or doing nice things, that will help you relax and make more money.</p></div>
    <div class="grid-2 reveal">
      ${remedyData.map(r => `<div class="remedy-card">
        <div class="remedy-cat">${r.category}</div>
        <div class="remedy-icon">${r.icon}</div>
        <div class="remedy-name">${r.name}</div>
        <div class="remedy-subtitle">${r.subtitle}</div>
        <div class="remedy-benefits">${r.benefits}</div>
        <div class="remedy-protocol">📋 How to do it: ${r.protocol}</div>
      </div>`).join('')}
    </div>
    <div class="reveal" style="margin-top:32px">
      <h3 style="font-family:var(--font-display);font-weight:700;font-size:1.6rem;margin-bottom:24px;color:var(--text-primary)">🔄 Good Habits to Learn</h3>
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
    <p>🌿 Your Life Story — ${birthData.name}</p>
    <p>A fun and super simple guide to your whole life!</p>
    <p>Made just for you.</p>
  </footer>`;
}
