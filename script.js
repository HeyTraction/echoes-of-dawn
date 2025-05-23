const cards = [
  'public/cards/card1.svg',
  'public/cards/card2.svg',
  'public/cards/card3.svg'
];

const preview = document.getElementById('card-preview');
const reading = document.getElementById('reading');

document.getElementById('draw-btn').addEventListener('click', () => {
  const card = cards[Math.floor(Math.random() * cards.length)];
  preview.src = card;
  reading.textContent = 'Generating reading...';

  html2canvas(document.getElementById('preview-container')).then(canvas => {
    // Placeholder for screenshot use
    console.log('Screenshot captured');
    reading.textContent = 'AI reading coming soon...';
  });
});
