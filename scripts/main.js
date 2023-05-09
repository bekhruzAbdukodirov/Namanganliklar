const button = document.querySelector('[data-modal-button]');
const modal = document.querySelector('[data-modal]');
const buttonClose1 = document.querySelector('[data-modal-close1]');
const buttonClose2 = document.querySelector('[data-modal-close2]');


button.addEventListener('click', function(){
    modal.classList.remove('hidden');
});

buttonClose1.addEventListener('click', function(){
    modal.classList.add('hidden');
});

buttonClose2.addEventListener('click', function(){
    modal.classList.add('hidden');
});

const buttonClose3 = document.getElementById('modal-1');
buttonClose3.addEventListener('click', function(){
    modal.classList.add('hidden')
});

modal.querySelector('.modal-window').addEventListener('click', function(event) {
    event.stopPropagation();
});



