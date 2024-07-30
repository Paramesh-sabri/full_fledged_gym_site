// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation example (can be expanded as needed)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        this.querySelectorAll('input, textarea').forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;
                input.style.borderColor = '#f00'; // Highlight invalid input
            } else {
                input.style.borderColor = '#ccc'; // Reset border color
            }
        });
        
        if (isValid) {
            // Handle form submission
            alert('Form submitted successfully!');
            this.reset(); // Clear the form
        } else {
            alert('Please fill in all required fields.');
        }
    });
});
