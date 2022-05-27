import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(setLocalRecords, 500));

function setLocalRecords() {
  let email = document.querySelector('#email').value;
  let message = document.querySelector('#message').value;

  const formVal = {
    email: email,
    message: message,
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
