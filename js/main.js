/** MT JS - Cuiabá - Dynamic-growth with warm oranges and golds */
const STATE_CONFIG = {
  stateCode: 'mt',
  capital: 'Cuiabá',
  formspreeUrl: 'https://formspree.io/f/xmtqbddb',
  colors: { primary: '#ff8c00', secondary: '#ffa500', accent: '#ffd700' },
  animations: {"enabled": true, "header": {"type": "chappadaSlide", "duration": "0.7s", "easing": "ease-out", "delay": "0s"}, "sections": {"type": "plateauReveal", "duration": "1.1s", "easing": "ease-in-out", "stagger": "0.18s"}, "hero": {"type": "canyonParallax", "speed": 0.6, "direction": "vertical"}, "cards": {"type": "rockLift", "solid": true, "shadow": "strong"}, "images": {"type": "caveReveal", "darkness": "initial", "duration": "1s"}},
  interactions: {"hover": "rock-elevate", "scroll": "canyon-descent", "transitions": "geological-ease", "click": "stone-impact"},
  premiumEffects: ["canyon-gradient", "rock-texture", "cave-shadows", "waterfall-mist"]
};

const SECTIONS = ["mt-index-section--map", "mt-index-section-frequently-asked-questions-about-living-in-", "mt-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});
