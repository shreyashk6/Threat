// script.js
document.getElementById('giveawayForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from actually submitting

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const messageDiv = document.getElementById('message');

  // Basic validation (you can add more robust checks)
  if (!username || !email) {
      messageDiv.textContent = "Please fill in all fields.";
      return;
  }

  // Here you would typically send the data to a server
  // For this example, we'll just display a success message

  messageDiv.textContent = "Thank you for entering the giveaway! We'll contact you if you win.";

  // Clear the form (optional)
  document.getElementById('giveawayForm').reset();
});











  const scriptURL = 'https://script.google.com/macros/s/AKfycbwee5GFrvQfkh50lsHqrX5n_4Rc0RJU9MR4recs60BJTXKxjHa4b-Jwy33QWzfKZd5BCg/exec'

const form = document.forms['giveawayForm']



form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  //.then(response => alert("Loading..." ))
  .then(() => { window.location.href=""; })
  alert("Thank you for entering the giveaway! We'll contact you if you win.")
  .catch(error => console.error('Error!', error.message))
})