const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)

// 1. this api fetch all array of movies

router.get('/movies',function(req,res){
    res.send('["dabbang","fukrey","rocky","upkar","om"]')
});

//2. this api fetch all array of movies by index no.

router.get('/movies/:movieId', function(req,res){
    mov=["dabbang","fukrey","rocky","upkar","om"]
    let value= req.params.movieId;
    if(value>mov.length-1){
        res.send('"does not exist"')
    }
    else{
        res.send(mov[value])
    }
});

//3. this api will getch all movies from array by indeaxid
router.get('/moviez',function(req,res){
    res.send([{id: 1, name: 'the shine'},{id :2,name:'incredible'},{id:3,name:'3 ideots'},{id:4,name:'radhe'},{id:5, name:'the gandhi'}])

});

//4. this API will fetch all movies from array of objects by indexId
router.get('/films/:filmId',function(req,res){
    let movi= [{id: 1, name: 'the shine'},{id :2,name:'incredible'},{id:3,name:'3 ideots'},{id:4,name:'radhe'},{id:5, name:'the gandhi'}]
    let value= req.params.filmId;
    let found=false;
    for(i=0;i<movi.length;i++){
        if(movi[i].id==value){
            found=true
            res.send(movi[i])
            break
        } 
    }
     if(found==false){

     res.send('no movie exist with this id')}
});










    


module.exports = router