let stringTrim = function(){
    const str = "this is rahul verma"
     return str.trim()

}

let stringUpper = function() {
    const at = "this is rahul verma"
    return at.toUpperCase() 
}

let stringLower = function() {
    const ul = "this is rahul verma"
     return  ul.toLowerCase()
    }



    module.exports.string = stringTrim
    module.exports.upper = stringUpper
    module.exports.lower = stringLower


