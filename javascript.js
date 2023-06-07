document.addEventListener('DOMContentLoaded', function() {
    
    const password = document.getElementById('pwd');
    const confirmPassword = document.getElementById('confirmpwd');
    const confirmPasswordError = document.getElementById('confirmpwderror');
    const errorspans = document.querySelectorAll("span");
    const form = document.getElementById('signupform');

    

    function checkPasswordMatch() {
        if (password.value !== confirmPassword.value) {
        confirmPasswordError.classList.add('invalid');
    } else {
        confirmPasswordError.classList.remove('invalid');
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

