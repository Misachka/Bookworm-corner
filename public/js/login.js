// Will connect to the homepage handlebars

const loginPage= async (event) => {
  event.preventDefault();

 
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (email && password) {

    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {

      window.location.replace('/home');
    } else {
      alert(response.statusText);
    }
  }
};

const newReader = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#username').value.trim();
  const email = document.querySelector('#new-email').value.trim();
  const password = document.querySelector('#new-pass').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      window.location.replace('/home');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginPage);

document
  .querySelector('.newUser-form')
  .addEventListener('submit', newReader);