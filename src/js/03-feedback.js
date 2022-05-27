import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(setLocalRecords, 500));

const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

function setLocalRecords() {
  const formVal = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formVal));
}

function getLocalRecords() {
  let localObject = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (localObject === null) {
    return;
  }
  email.value = localObject.email;
  message.value = localObject.message;
}

getLocalRecords();

form.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  this.reset();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
}
