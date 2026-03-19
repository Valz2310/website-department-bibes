// Get elements 
const greetingEl = document.querySelector('#greeting'); 
const nameInput = document.querySelector('#nameInput'); 
const updateNameBtn = document.querySelector('#updateNameBtn'); 
const colorToggleBtn = document.querySelector('#colorToggleBtn'); 
const messageBox = document.querySelector('#messageBox'); 
const messageText = document.querySelector('#messageText'); 
 
console.log('Simple script.js loaded.'); 
 
// Toggle state for background color 
let isAlt = false; 
 
// Update greeting function 
function updateGreeting(name) { 
  if (name && name.trim() !== '') { 
    greetingEl.textContent = 'Welcome, ' + name.trim(); 
    messageText.textContent = 'Hello, ' + name.trim() + '!'; 
    messageBox.classList.remove('hidden'); 
    console.log('Greeting updated for:', name.trim()); 
  } else { 
    greetingEl.textContent = 'Welcome'; 
    messageBox.classList.add('hidden'); 
    console.log('Greeting reset to default.'); 
  } 
} 
 
// Button: update name 
updateNameBtn.addEventListener('click', function () { 
  console.log('Update Name button clicked.'); 
  updateGreeting(nameInput.value); 
}); 
 
// Allow Enter key in input to update name 
nameInput.addEventListener('keydown', function (e) { 
  if (e.key === 'Enter') { 
    console.log('Enter pressed in name input.'); 
    updateGreeting(nameInput.value); 
  } 
}); 
 
// Button: toggle background color and message visibility 
colorToggleBtn.addEventListener('click', function () { 
isAlt = !isAlt; 
if (isAlt) { 
document.body.style.backgroundColor = '#e0f7fa'; // light teal 
messageBox.classList.remove('hidden'); 
colorToggleBtn.textContent = 'Restore Background'; 
console.log('Alternate background applied.'); 
} else { 
document.body.style.backgroundColor= '';
colorToggleBtn.textContent = 'Toggle Background Color'; 
console.log('Background restored.'); 
} 
}); 
// On page load set a simple greeting 
window.addEventListener('load', function () { 
console.log('Page loaded. Setting initial greeting.'); 
greetingEl.textContent = 'Welcome'; 
messageBox.classList.add('hidden'); 
});