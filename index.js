//selectors
const itemsCount = document.getElementById('items-count');
const contact = document.getElementById('contact');
const sortSelect = document.getElementById('sort-select');
const showSortType = document.getElementById('sort-type')
const buyBtns = document.querySelectorAll('.buy');

contact.addEventListener('click', () => {
  alert('Contact Us : +972597105063')
})
let totalItems = 0;
buyBtns.forEach(button => {
  button.addEventListener('click', ()=> {
    totalItems++;
    itemsCount.innerText = totalItems;
  })
})

sortSelect.addEventListener('change', (e) => {
  showSortType.innerText = e.target.value
})