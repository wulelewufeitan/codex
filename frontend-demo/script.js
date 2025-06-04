document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById('counter');
  const button = document.getElementById('increment');
  button.addEventListener('click', () => {
    counter.textContent = parseInt(counter.textContent) + 1;
  });
});
