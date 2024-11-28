// benefits
document.getElementById('loginButton').addEventListener('click', function() {
    alert("Redirecting to login page...");
});

window.addEventListener('scroll', function() {
    const mainSection = document.querySelector('.main');
    const scrollPosition = window.scrollY;
    mainSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

// cards
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.card button');
  
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#005699';
        });
  
        button.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#0077CC';
        });
    });
  });

// signup
let current = 1;
function showStep(step) {
  document.querySelectorAll(".step").forEach((element, index) => {
    element.style.display = index === step - 1 ? "block" : "none";
  });
}

function nextStep() {
  if (current < 3) {
    current++;
    showStep(current);
  }
}
showStep(current);