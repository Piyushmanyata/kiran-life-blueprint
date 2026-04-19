import { JSDOM } from 'jsdom';
const dom = new JSDOM('<div id="app"></div>');
global.document = dom.window.document;
global.window = dom.window;
global.requestAnimationFrame = (cb) => cb();
global.IntersectionObserver = class { observe(){} unobserve(){} };

try {
  await import('./main.js');
  console.log('Successfully loaded main.js');
} catch(e) {
  console.error('Error loading main.js:', e);
}
