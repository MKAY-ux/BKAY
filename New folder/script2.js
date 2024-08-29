document.getElementById('registrationForm').addEventListener('next-button', function(event) {
    const form = event.target;
    
    if (!form.checkValidity()) {
        event.preventDefault(); // Prevent form submission if validation fails
        form.reportValidity();  // Show the validation messages
    }
    // If form is valid, the default action (submission) will take place
});
