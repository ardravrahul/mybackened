const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
//importing external package
const underscore = require('underscore')
const abc = require('../logger/logger')

const y = require('../util/helpr')
const z = require('../validator/formatter')
const lodash = require('lodash')


router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ",xyz.myFunction())
    console.log("The value of the constant is ",xyz.myUrl)
    //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)


    const monthNames = ["January" , "February", "March",
     "April", "May", "June","July", "August", "September", "October" , "November", "December"]
     const result2 = lodash.chunk(monthNames, 4)
     console.log(result2)

     const oddNum = [1,2,5,7,9,11,13,15,17,19];
     console.log(lodash.tail(oddNum,9));

     const Num = [2,5,4,2,7]
     console.log(lodash.union(Num));

     const keyValue = [['horror','The Shining'], ['drama', 'Titanic'],
     ['thriller', 'Shutter Island'],['fantasy', 'Pans Labyrinth']]

     console.log(lodash.fromPairs(keyValue));






    console.log("calling my function ",abc.welcome())
    console.log("current Date - ",y.printDate())
     console.log( "current month - ",y.printMonth())
     console.log( " calling my function ",y.getBatchInfo())
     console.log("all about Trim -", z.string ())
     console.log("all about upperCase -", z.upper ())
     console.log("all about lowerCase -", z.lower ())


    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

