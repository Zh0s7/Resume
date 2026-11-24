const filters = document.querySelector('.project-filters');
const cards = [...document.querySelectorAll('.project-card')];
const count = document.querySelector('.result-count');

filters.addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  const selected = button.dataset.filter;
  for (const option of filters.querySelectorAll('button')) {
    option.setAttribute('aria-pressed', String(option === button));
  }
  let visible = 0;
  for (const card of cards) {
    card.hidden = selected !== 'All projects' && !card.dataset.tags.split('|').includes(selected);
    if (!card.hidden) visible++;
  }
  count.textContent = `${visible} ${visible === 1 ? 'project' : 'projects'}`;
});
filters.hidden = false;
