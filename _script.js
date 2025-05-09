// script.js
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    alert(card.textContent);
  });
});
