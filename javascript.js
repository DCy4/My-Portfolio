// This function displays a "Hello, world!" message in the console
function sayHello() {
  alert("Hello, world!");
}

function submitForm(event) {
  event.preventDefault();

  // Basic form validation
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Please fill out all fields');
    return;
  }


}
