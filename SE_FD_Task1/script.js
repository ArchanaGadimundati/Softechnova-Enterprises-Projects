// Smooth scrolling for nav links
console.log("JavaScript is working!");
document.querySelectorAll('.a-element').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1); // remove #
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form validation
document.querySelector('.form').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent form from submitting

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const mobile = document.getElementById('mobile').value.trim();

  if (!name || !email || !mobile) {
    alert("Please fill out all fields.");
    return;
  }

  if (!/^\d{10}$/.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  alert("Thank you! Your message has been sent.");
  this.reset(); // clear form
});
