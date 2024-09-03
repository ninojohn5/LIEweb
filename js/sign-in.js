document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form'); // Ensure the form ID is "form"
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    form.addEventListener('submit', e => {
        e.preventDefault(); // Prevent default form submission

        if (checkInputs()) {
            // Redirect to index.html if all inputs are valid
            window.location.href = 'index.html';
        }
    });

    function checkInputs() {
        let isValid = true; // Assume inputs are valid unless proven otherwise

        // Trim to remove the whitespaces
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        if (emailValue === '') {
            setErrorFor(email, 'Email cannot be blank');
            isValid = false;
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Not a valid email');
            isValid = false;
        } else {
            setSuccessFor(email);
        }

        if (passwordValue === '') {
            setErrorFor(password, 'Password cannot be blank');
            isValid = false;
        } else if (passwordValue.length < 8) {
            setErrorFor(password, 'Must be at least 8 characters');
            isValid = false;
        } else if (passwordValue.length > 20) {
            setErrorFor(password, 'Password cannot be longer than 20 characters');
            isValid = false;
        } else {
            setSuccessFor(password);
        }

        return isValid; // Return whether the inputs are valid
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
});
