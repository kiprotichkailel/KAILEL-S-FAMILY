// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents form from reloading the page

  // Get form input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation (ensure all fields are filled)
  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Optionally, reset the form after submission
    document.getElementById('contactForm').reset();
  } else {
    alert('Please fill in all fields before submitting.');
  }
});

// Handle Family Member Form submission
document.getElementById('familyForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents form from reloading the page

  // Get family member form values
  const fullName = document.getElementById('fullName').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const relationship = document.getElementById('relationship').value;
  const children = document.getElementById('children').value;

  // Simple validation (ensure all fields are filled)
  if (fullName && phoneNumber && relationship && children) {
    alert(`Family member ${fullName} details submitted successfully!`);

    // Optionally, reset the form after submission
    document.getElementById('familyForm').reset();
  } else {
    alert('Please fill in all fields before submitting.');
  }
});
