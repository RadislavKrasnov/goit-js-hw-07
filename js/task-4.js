const form = document.querySelector('.login-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const formTarget = event.target;
  const email = formTarget.elements.email.value.trim();
  const password = formTarget.elements.password.value.trim();

  if (!email.length || !password.length) {
    alert('All form fields must be filled in');
    return;
  }

  console.log({
    email,
    password,
  });
  formTarget.reset();
});
