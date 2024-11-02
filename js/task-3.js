const inputField = document.querySelector('#name-input');
const outputSpan = document.querySelector('#name-output');
inputField.addEventListener('input', event => {
  const value = event.currentTarget.value.trim();
  outputSpan.textContent = value.length ? value : 'Anonymous';
});
