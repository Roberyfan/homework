const open = document.querySelector('.open');
const modal = document.querySelector('.modal');

const closemodal = () => { modal.classList.remove('modal-open')};
const openmodal = () => { modal.classList.add('modal-open')};

open.addEventListener('click', () => {
    openmodal()
})

modal.addEventListener('click', event => {
    const target = event.target
if (target.classList.contains('close'))  {
    closemodal()
}
})