// Task 1
function upperCase(word){
    const worCheck = /^[A-Z]/
    const result = worCheck.test(word)
    if(result === true) {
        console.log("String's starts with uppercase character");
    } else {
        console.log("String's not starts with uppercase character");
    };
};

upperCase('regexp');
upperCase('RegExp');
