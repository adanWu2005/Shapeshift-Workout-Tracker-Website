function validation2(values) {
    let error = {};
    let username_pattern = /^[0-9A-Za-z]{2,16}$/;
    const password_pattern = /^[0-9A-Za-z]{4,16}$/;

    if (values.username === "") {
        error.username = "Username should not be empty";
    } else if (!username_pattern.test(values.username)) {
        error.username = "Username must be 2-16 characters and alphanumeric";
    }

    if (values.password === "") {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password must be 4-16 characters and alphanumeric";
    } else if (values.confirmpassword === "") {
        error.confirmpassword = "Confirm your password";
    } else if (values.password !== values.confirmpassword) {
        error.confirmpassword = "Password and Confirm password do not match";
    }

    return error;
}

export default validation2;
