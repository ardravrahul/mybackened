const mongoose=require("mongoose")

// for RequestBody validation

const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}

//for 
const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}
function regxName(value) {
    let reg = /^[A-Za-z ]+$/; // valid alphabet with space
    return reg.test(value);
  }
//validation for Title 

function isValidtitle(title) {
    return ["Mr", "Mrs", "Miss"].indexOf(title) !== -1
}

// validation for valid email address
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

module.exports={isValidRequestBody,isValid,isValidtitle,isValidEmail,regxName}
