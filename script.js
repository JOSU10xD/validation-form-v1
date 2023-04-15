const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const phn = document.getElementById('phn');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});
                                                                     
const setError = (element, message) => {                                        //error
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {                                                //success
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
                                                                              //email restrictions
const isValidEmail = email => {                                           
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {                                    
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const phnValue = phn.value.trim();

    if(usernameValue === '') {                                                  //username conditions
        setError(username, 'Username is required');
    } else if (usernameValue.length < 5 ) {
        setError(username, 'Username must be at least 5 character.')
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {                                                     //email conditions
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {                                                  //password conditions
        setError(password, 'Password is required');
    }
    else if (passwordValue == 'password') {
        setError(password, '\'password\' cannot be used')
    }
    else if (passwordValue == usernameValue) {
        setError(password, 'Password must not contain Username')
    }
     else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {                                                 //confirm-password conditions
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    }
    else if (password2Value == usernameValue) {
        setError(password2, 'Password must not contain Username')
    } else {
        setSuccess(password2);
    }

    if(phnValue === '') {                                                    //phone no. conditions
        setError(phn, 'Phone no. is required')
    } else if ( phnValue == '123456789' || phnValue == '1234567890' || phnValue == '0123456789') {
        setError(phn, 'Phone number is invalid');
    }
    else if (phnValue.length < 10) {
        setError(phn, 'Phone no. cannot be less than 10 digits');
    }
    else if (phnValue.length > 15) {
        setError(phn, 'Phone no. cannot exceed more than 15 digits');
    }
    else{
        setSuccess(phn);
    }

};
