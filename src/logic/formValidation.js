export function formValidation(email, password, repeatPassword, isSignup) {
    const errors = {};

    function emailValidate() {
        const validEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if (!validEmail.test(email)) {
            errors.email = "Please enter a valid email address.";
        }
    }

    function passwordValidate() {
        if (password.length < 6) {
            errors.password = "Password must be at least 6 characters long";
        }
    }

    function passwordMatch() {
        if (isSignup && password !== repeatPassword) {
            errors.repeatPassword = "Passwords do not match";
        }
    }

    emailValidate();
    passwordValidate();
    passwordMatch();

    return errors;
}
