function validation(values2){
    let error2 = {}
    let username_pattern2 = /^[0-9A-Za-z]{2,16}$/
    const password_pattern2 = /^[0-9A-Za-z]{4,16}$/

    if(values2.username === "") {
        error2.username = "Username should not be empty"
    }
    else if(!username_pattern2.test(values2.username)){
        error2.username = "Username must be 2-16 characters and alphanumeric";
    }
    else{
        error2.username = ""
    }

    if(values2.password === ""){
        error2.password = "Password should not be empty"
    }
    else if(!password_pattern2.test(values2.password)){
        error2.password = "Password must be 4-16 characters and alphanumeric";
    }
    else{
        error2.password = ""
    }
    return error2;
}

export default validation;
