'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const header = document.querySelector('.header');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(model => model.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML = `we use cookies to improve functionality and analytics 
<button class='btn btn--close-cookie'>Got It!</button>`;

message.style.background = '#37383d';
message.style.width = '120%';

header.append(message);

document.querySelector('.btn--close-cookie').addEventListener('click', e => {
  message.remove();
});

console.log(getComputedStyle(message).height);
console.log(getComputedStyle(message).backgroundColor);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

const logo = document.querySelector('.nav__logo');
logo.className; //?
logo.src; //?
logo.getAttribute('src'); //?
logo.getAttribute('designer'); //?
logo.alt; //?
logo.alt = 'bank best bank';
logo.alt; //?
logo.setAttribute('location', 'California');
logo.getAttribute('location'); //?
