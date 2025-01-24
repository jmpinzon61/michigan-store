export const selectCard = (card: HTMLElement) => {
    const cards = document.querySelectorAll('.card-quiz');
    cards.forEach(c => c.classList.remove('selected-card'));
    card.classList.add('selected-card');
};