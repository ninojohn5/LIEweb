document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    const birthdate = document.getElementById('birthdate'); 
    const contactNumber = document.getElementById('contact number'); 

    form.addEventListener('submit', e => {
        e.preventDefault();

        checkInputs();
    });

    function checkInputs() {
        // trim to remove the whitespaces
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();
        const birthdateValue = birthdate.value.trim(); 
        const contactNumberValue = contactNumber.value.trim(); 


        if(usernameValue === '') {
            setErrorFor(username, 'Username cannot be blank');
        } else if (usernameValue.length < 6) {
            setErrorFor(username, 'Username must be at least 6 characters');
        } else if (usernameValue.length > 20) {
            setErrorFor(username, 'Username cannot be longer than 20 characters');
        } else {
            setSuccessFor(username);
        }

        if(emailValue === '') {
            setErrorFor(email, 'Email cannot be blank');
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Not a valid email');
        } else {
            setSuccessFor(email);
        }

        if(passwordValue === '') {
            setErrorFor(password, 'Password cannot be blank');
        } else if (passwordValue.length < 8) {
            setErrorFor(password, 'Password must be at least 8 characters');
        } else if (passwordValue.length > 20) {
            setErrorFor(password, 'Password cannot be longer than 20 characters');
        } else {
            setSuccessFor(password);
        }

        if(password2Value === '') {
            setErrorFor(password2, 'Please Confirm your password');
        } else if(passwordValue !== password2Value) {
            setErrorFor(password2, 'Passwords do not match');
        } else{
            setSuccessFor(password2);
        }

        if(birthdateValue === '') { 
            setErrorFor(birthdate, 'Please enter your birthdate');
        } else {
            setSuccessFor(birthdate);
        }

        if(contactNumberValue === '') { 
            setErrorFor(contactNumber, 'Contact number cannot be blank');
        } else if(!isNumeric(contactNumberValue)) {
            setErrorFor(contactNumber, 'Contact number must contain only numbers');
		} else if (contactNumberValue.length > 20) {
            setErrorFor(contactNumber, 'Cannot be longer than 20 digits');
        } else {
            setSuccessFor(contactNumber);
        }
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

    function isNumeric(number) { 
        return /^\d+$/.test(number);
    }

	$(birthdate).datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        yearRange: "-100:+0" // Allow selection of birthdates up to 100 years ago from the current date
    });
});
