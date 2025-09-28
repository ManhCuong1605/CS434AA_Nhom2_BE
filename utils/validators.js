const containsSpecialChars = (text) => {
    const specialCharRegex = /[!@#$%^&*(){}|<>]/;
    return specialCharRegex.test(text);
};


