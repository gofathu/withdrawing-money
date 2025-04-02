const submit = document.querySelector('.submit');
let password = document.querySelector('.pass');
submit.addEventListener('click', () => {
  if(password.value === 0) {
    alert('fill in the required field!');
  } else if (password.value.length !== 6) {
    alert('please type valid lengetg key!');
  } else {
    setTimeout(() => {
      alert('Incorrect password!');
    }, 600)
  }
})
if (password.value.length === 6) {
  submit.type = 'submit';
}