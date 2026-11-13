const buttons = document.querySelectorAll('[data-filter]');
const publications = document.querySelectorAll('.publication');
buttons.forEach((button) => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  buttons.forEach((item) => item.classList.toggle('active', item === button));
  publications.forEach((publication) => {
    const tags = publication.dataset.tags.split(' ');
    publication.classList.toggle('hidden', filter !== 'all' && !tags.includes(filter));
  });
}));
