const surveyForm = document.getElementById('survey-form');
surveyForm.addEventListener('submit', function (event) {
  if (!surveyForm.checkValidity()) {
    event.preventDefault();
    surveyForm.classList.add('form-submitted');
  } else {
    // In a real application, you would handle the form submission here.
    // For this demo, we'll just show an alert.
    event.preventDefault();
    alert('Thank you for your feedback!');
    surveyForm.classList.remove('form-submitted');
    surveyForm.reset();
  }
});