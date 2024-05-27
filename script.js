const header = document.querySelector('#menu-header');
const list = document.querySelector('#menu-list');

function openMenu() {
  list.classList.toggle('show-list');
}

header.addEventListener('click', openMenu);
