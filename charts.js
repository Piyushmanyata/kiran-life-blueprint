import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const FONT = "'Plus Jakarta Sans', sans-serif";
const COLORS = {
  gold: '#b58d55', warm: '#d37a54', emerald: '#248b7b', rose: '#c85a73',
  violet: '#7a63a5', blue: '#3a7ab5', amber: '#d4a339', coral: '#c76743',
  muted: '#7d7568', border: 'rgba(186, 169, 146, 0.25)', gridLine: 'rgba(186, 169, 146, 0.15)',
  text: '#4a453f', titleText: '#1f1b18'
};
const baseOpts = (title) => ({
  responsive: true, maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    title: { display: !!title, text: title, color: COLORS.titleText, font: { family: FONT, size: 14, weight: '700' }, padding: { bottom: 20 } },
    tooltip: { backgroundColor: 'rgba(253, 252, 249, 0.95)', titleColor: COLORS.titleText, bodyColor: COLORS.text, titleFont: { family: FONT, weight: '700' }, bodyFont: { family: FONT, size: 13, weight: '500' }, borderColor: 'rgba(181, 141, 85, 0.3)', borderWidth: 1, padding: 16, cornerRadius: 12, boxShadow: '0 8px 24px rgba(186, 169, 146, 0.2)' },
  },
  scales: {
    x: { ticks: { color: COLORS.text, font: { family: FONT, size: 11, weight: '600' } }, grid: { color: COLORS.gridLine }, border: { color: COLORS.border } },
    y: { ticks: { color: COLORS.text, font: { family: FONT, size: 11, weight: '600' } }, grid: { color: COLORS.gridLine }, border: { color: COLORS.border }, beginAtZero: true, max: 100 },
  },
});
const radarOpts = (title) => ({
  responsive: true, maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    title: { display: !!title, text: title, color: COLORS.titleText, font: { family: FONT, size: 14, weight: '700' }, padding: { bottom: 20 } },
    tooltip: { backgroundColor: 'rgba(253, 252, 249, 0.95)', titleColor: COLORS.titleText, bodyColor: COLORS.text, titleFont: { family: FONT, weight: '700' }, bodyFont: { family: FONT, size: 13, weight: '500' }, borderColor: 'rgba(181, 141, 85, 0.3)', borderWidth: 1, padding: 16, cornerRadius: 12 },
  },
  scales: {
    r: {
      beginAtZero: true, max: 100,
      ticks: { color: COLORS.text, backdropColor: 'transparent', font: { family: FONT, size: 10, weight: '600' }, stepSize: 20 },
      grid: { color: COLORS.gridLine }, angleLines: { color: COLORS.gridLine },
      pointLabels: { color: COLORS.titleText, font: { family: FONT, size: 11, weight: '700' } },
    }
  }
});

export function createPersonalityChart(id, data) {
  const ctx = document.getElementById(id);
  if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.trait),
      datasets: [{ data: data.map(d => d.score), backgroundColor: data.map((_, i) => [COLORS.gold, COLORS.emerald, COLORS.violet, COLORS.rose, COLORS.amber, COLORS.blue, COLORS.coral, COLORS.warm, COLORS.gold, COLORS.emerald][i % 10] + 'AA'), borderColor: data.map((_, i) => [COLORS.gold, COLORS.emerald, COLORS.violet, COLORS.rose, COLORS.amber, COLORS.blue, COLORS.coral, COLORS.warm, COLORS.gold, COLORS.emerald][i % 10]), borderWidth: 1.5, borderRadius: 8, barPercentage: 0.65 }]
    },
    options: { ...baseOpts('Core Personality Traits'), indexAxis: 'y', scales: { ...baseOpts().scales, x: { ...baseOpts().scales.x, max: 100 }, y: { ...baseOpts().scales.y, max: undefined, grid: { display: false } } } }
  });
}

export function createLifeAreaRadar(id, data) {
  const ctx = document.getElementById(id);
  if (!ctx) return;
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: data.map(d => d.area),
      datasets: [{ data: data.map(d => d.score), backgroundColor: 'rgba(181, 141, 85, 0.15)', borderColor: COLORS.gold, borderWidth: 2.5, pointBackgroundColor: data.map(d => d.color), pointBorderColor: '#fff', pointRadius: 6, pointHoverRadius: 9, fill: true }]
    },
    options: radarOpts('Life Areas Strength')
  });
}

export function createCareerChart(id, data) {
  const ctx = document.getElementById(id);
  if (!ctx) return;
  new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: data.map(d => d.field),
      datasets: [{ data: data.map(d => d.score), backgroundColor: data.map(d => d.color + '88'), borderColor: data.map(d => d.color), borderWidth: 1.5 }]
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { ...radarOpts('Career Aptitude Fit').plugins }, scales: { r: { beginAtZero: true, max: 100, ticks: { display: false }, grid: { color: COLORS.gridLine }, angleLines: { color: COLORS.gridLine } } } }
  });
}

export function createElementChart(id, data) {
  const ctx = document.getElementById(id);
  if (!ctx) return;
  const entries = Object.entries(data);
  const colors = { earth: '#b58d55', water: '#3a7ab5', fire: '#d37a54', air: '#248b7b' };
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: entries.map(([k]) => k.charAt(0).toUpperCase() + k.slice(1)),
      datasets: [{ data: entries.map(([, v]) => v.pct), backgroundColor: entries.map(([k]) => colors[k] + 'AA'), borderColor: entries.map(([k]) => colors[k]), borderWidth: 2, hoverOffset: 12 }]
    },
    options: { responsive: true, maintainAspectRatio: false, cutout: '60%', plugins: { ...radarOpts('Elemental Composition').plugins, legend: { display: true, position: 'bottom', labels: { color: COLORS.text, font: { family: FONT, size: 12, weight: '600' }, padding: 20, usePointStyle: true } } } }
  });
}

export function createHealthChart(id, data) {
  const ctx = document.getElementById(id);
  if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.area),
      datasets: [{ label: 'Risk Level', data: data.map(d => d.risk), backgroundColor: data.map(d => d.risk > 70 ? COLORS.rose + 'AA' : d.risk > 50 ? COLORS.amber + 'AA' : COLORS.emerald + 'AA'), borderColor: data.map(d => d.risk > 70 ? COLORS.rose : d.risk > 50 ? COLORS.amber : COLORS.emerald), borderWidth: 1.5, borderRadius: 8, barPercentage: 0.7 }]
    },
    options: baseOpts('Health Risk Assessment')
  });
}

export function createFinancialChart(id, data) {
  const ctx = document.getElementById(id);
  if (!ctx) return;
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map(d => d.period),
      datasets: [{ data: data.map(d => d.level), borderColor: COLORS.gold, backgroundColor: 'rgba(181, 141, 85, 0.1)', borderWidth: 3.5, fill: true, tension: 0.45, pointBackgroundColor: COLORS.gold, pointRadius: 7, pointHoverRadius: 12, pointBorderColor: '#fff', pointBorderWidth: 2.5 }]
    },
    options: { ...baseOpts('Financial Trajectory (2020-2038)'), scales: { ...baseOpts().scales, y: { ...baseOpts().scales.y, title: { display: true, text: 'Prosperity Index', color: COLORS.text, font: { family: FONT, size: 11, weight: '600' } } } } }
  });
}

export function createRelationshipChart(id, data) {
  const ctx = document.getElementById(id);
  if (!ctx) return;
  const entries = Object.values(data);
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: entries.map(d => d.label),
      datasets: [{ data: entries.map(d => d.score), backgroundColor: 'rgba(200, 90, 115, 0.15)', borderColor: COLORS.rose, borderWidth: 2.5, pointBackgroundColor: COLORS.rose, pointRadius: 6, fill: true }]
    },
    options: radarOpts('Relationship Profile')
  });
}

export function createCommunicationChart(id, data) {
  const ctx = document.getElementById(id);
  if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.mode),
      datasets: [{ data: data.map(d => d.score), backgroundColor: data.map(d => d.color + 'AA'), borderColor: data.map(d => d.color), borderWidth: 1.5, borderRadius: 10, barPercentage: 0.6 }]
    },
    options: baseOpts('Communication Modes')
  });
}

export function createWealthChart(id, mechanics, risks) {
  const ctx = document.getElementById(id);
  if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [...mechanics.map(m => m.factor), ...risks.map(r => r.risk)],
      datasets: [{
        label: 'Score',
        data: [...mechanics.map(m => m.score), ...risks.map(r => r.level)],
        backgroundColor: [...mechanics.map(() => COLORS.emerald + '99'), ...risks.map(() => COLORS.rose + '99')],
        borderColor: [...mechanics.map(() => COLORS.emerald), ...risks.map(() => COLORS.rose)],
        borderWidth: 1.5, borderRadius: 8, barPercentage: 0.7
      }]
    },
    options: { ...baseOpts('Wealth Mechanics vs Risk Factors'), indexAxis: 'y', scales: { ...baseOpts().scales, x: { ...baseOpts().scales.x, max: 100 }, y: { ...baseOpts().scales.y, max: undefined, grid: { display: false } } } }
  });
}

export function createDichotomyChart(id, internal, external) {
  const ctx = document.getElementById(id);
  if (!ctx) return;
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: [...internal.map(t => t.name)],
      datasets: [
        { label: 'Internal', data: internal.map(t => t.score), backgroundColor: 'rgba(122, 99, 165, 0.15)', borderColor: COLORS.violet, borderWidth: 2.5, pointBackgroundColor: COLORS.violet, pointRadius: 5, fill: true },
        { label: 'External', data: external.map(t => t.score), backgroundColor: 'rgba(36, 139, 123, 0.15)', borderColor: COLORS.emerald, borderWidth: 2.5, pointBackgroundColor: COLORS.emerald, pointRadius: 5, fill: true },
      ]
    },
    options: { ...radarOpts('Internal vs External Persona'), plugins: { ...radarOpts().plugins, legend: { display: true, position: 'bottom', labels: { color: COLORS.text, font: { family: FONT, size: 12, weight: '600' }, padding: 20, usePointStyle: true } } } }
  });
}

export function createLeadershipChart(id, data) {
  const ctx = document.getElementById(id);
  if (!ctx) return;
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: data.map(d => d.name),
      datasets: [{ data: data.map(d => d.score), backgroundColor: 'rgba(181, 141, 85, 0.15)', borderColor: COLORS.gold, borderWidth: 2.5, pointBackgroundColor: COLORS.gold, pointRadius: 6, fill: true }]
    },
    options: radarOpts('Leadership Competency Map')
  });
}

export function createProgenyChart(id, data) {
  const ctx = document.getElementById(id);
  if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.phase),
      datasets: [{ data: data.map(d => d.difficulty), backgroundColor: data.map(d => d.difficulty > 70 ? COLORS.coral + 'AA' : d.difficulty > 50 ? COLORS.amber + 'AA' : COLORS.emerald + 'AA'), borderColor: data.map(d => d.difficulty > 70 ? COLORS.coral : d.difficulty > 50 ? COLORS.amber : COLORS.emerald), borderWidth: 1.5, borderRadius: 10, barPercentage: 0.65 }]
    },
    options: baseOpts('Parenting Challenge Trajectory')
  });
}

export function createSocialChart(id, strengths, risks) {
  const ctx = document.getElementById(id);
  if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [...strengths.map(s => s.name), ...risks.map(r => r.name)],
      datasets: [{
        data: [...strengths.map(s => s.score), ...risks.map(r => r.level)],
        backgroundColor: [...strengths.map(() => COLORS.blue + '99'), ...risks.map(() => COLORS.rose + '99')],
        borderColor: [...strengths.map(() => COLORS.blue), ...risks.map(() => COLORS.rose)],
        borderWidth: 1.5, borderRadius: 8, barPercentage: 0.7
      }]
    },
    options: baseOpts('Social Strengths vs Hidden Risks')
  });
}

export function createSadeSatiChart(id, data) {
  const ctx = document.getElementById(id);
  if (!ctx) return;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.phase),
      datasets: [{ data: data.map(d => d.intensity), backgroundColor: data.map(d => d.intensity > 70 ? COLORS.rose + 'AA' : d.intensity > 50 ? COLORS.amber + 'AA' : COLORS.emerald + 'AA'), borderColor: data.map(d => d.intensity > 70 ? COLORS.rose : d.intensity > 50 ? COLORS.amber : COLORS.emerald), borderWidth: 1.5, borderRadius: 10, barPercentage: 0.6 }]
    },
    options: baseOpts('Structural Audit Intensity Curve (2032-2038)')
  });
}

export function createDomesticChart(id, domestic) {
  const ctx = document.getElementById(id);
  if (!ctx) return;
  const labels = ['Discipline Installed', 'Emotional Suppression', 'Paternal Distance', 'Property Destiny', 'Aesthetic Drive', 'Domestic Friction'];
  const values = [domestic.maternalInfluence.advantage.score, domestic.maternalInfluence.cost.score, domestic.paternalDynamic.distance, domestic.propertyDestiny.ownership, domestic.propertyDestiny.aesthetics, domestic.domesticFriction.score];
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels,
      datasets: [{ data: values, backgroundColor: 'rgba(36, 139, 123, 0.15)', borderColor: COLORS.emerald, borderWidth: 2.5, pointBackgroundColor: COLORS.emerald, pointRadius: 6, fill: true }]
    },
    options: radarOpts('Domestic & Property Dynamics')
  });
}
