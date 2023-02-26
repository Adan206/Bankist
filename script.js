'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const header = document.querySelector('.header');

const btnScroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

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

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

btnScroll.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//operation

const tabContainer = document.querySelector('.operations__tab-container');
const tabBtn = document.querySelectorAll('.operations__tab');
const tabContent = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;

  tabBtn.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  console.log(clicked);
});
