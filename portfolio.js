const filters = document.querySelector('.project-filters');
const cards = [...document.querySelectorAll('.project-card')];
const count = document.querySelector('.result-count');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

filters.addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  const selected = button.dataset.filter;
  const previousPositions = new Map(cards.filter(card => !card.hidden).map(card => [card, card.getBoundingClientRect()]));
  for (const option of filters.querySelectorAll('button')) {
    option.setAttribute('aria-pressed', String(option === button));
  }
  let visible = 0;
  for (const card of cards) {
    card.hidden = selected !== 'All projects' && !card.dataset.tags.split('|').includes(selected);
    if (!card.hidden) visible++;
  }
  count.textContent = `${visible} ${visible === 1 ? 'project' : 'projects'}`;
  if (!reduceMotion.matches) {
    cards.filter(card => !card.hidden).forEach(card => {
      const previous = previousPositions.get(card);
      const current = card.getBoundingClientRect();
      const from = previous ? { opacity: 1, transform: `translate(${previous.left - current.left}px, ${previous.top - current.top}px)` } : { opacity: 0, transform: 'translateY(10px)' };
      card.getAnimations().forEach(animation => animation.cancel());
      card.animate([from, { opacity: 1, transform: 'translate(0, 0)' }], { duration: 300, easing: 'cubic-bezier(.2,.7,.2,1)' });
    });
  }
});
filters.hidden = false;

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      revealObserver.unobserve(entry.target);
      if (!reduceMotion.matches) {
        entry.target.animate([{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 420, easing: 'cubic-bezier(.2,.7,.2,1)' });
      }
    }
  }, { threshold: .08 });
  document.querySelectorAll('.project-card, .experience-list article').forEach(element => revealObserver.observe(element));
}
