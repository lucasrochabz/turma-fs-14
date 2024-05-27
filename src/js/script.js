const headers = document.querySelectorAll('.menu-header');
const lists = document.querySelectorAll('.menu-list');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    lists[index].classList.toggle('show-list');
  });
});
