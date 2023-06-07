document.addEventListener('DOMContentLoaded', function() {
    
    const password = document.getElementById('pwd');
    const confirmPassword = document.getElementById('confirmpwd');
    const confirmPasswordError = document.getElementById('confirmpwderror');
    const form = document.getElementById('signupform');

    

    function checkPasswordMatch() {
        if (password.value !== confirmPassword.value) {
        confirmPasswordError.classList.add('invalid');
        confirmPassword.classList.add('confirmerror');
    } else {
        confirmPasswordError.classList.remove('invalid');
        confirmPassword.classList.remove('confirmerror');
    }
}

    form.addEventListener('submit', (e) => {
        if (confirmPasswordError.classList.contains("invalid")) {
            e.preventDefault(); // Prevent form submission

        }
    });

    password.addEventListener('input', checkPasswordMatch);
    confirmPassword.addEventListener('input', checkPasswordMatch);

});

