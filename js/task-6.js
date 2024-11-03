function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('div#boxes');

function createBoxes(amount) {
  boxes.innerHTML = '';
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.margin = '5px';
    box.style.backgroundColor = getRandomHexColor();
    fragment.append(box);
  }

  boxes.append(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createButton.addEventListener('click', event => {
  const input = document.querySelector('#controls input[type=number]');
  const amount = parseInt(input.value, 10);
  const min = parseInt(input.min, 10);
  const max = parseInt(input.max, 10);

  if (amount >= min && amount <= max) {
    createBoxes(amount);
    input.value = '';
  }
});

destroyButton.addEventListener('click', destroyBoxes);
