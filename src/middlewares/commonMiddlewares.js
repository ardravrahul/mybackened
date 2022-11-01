const express= require('express')
const ip= require('ip')
var app = express()
const date= new Date();
let year= date.getFullYear()
let month= date.getMonth()
let day= date.getDate()
let hours= date.getHours()
let minutes= date.getMinutes()
let second= date.getSeconds()

const mid5=function (req,res,next){
    let api=req.url
    console.log(day+"-"+month+"-"+year+"::"+hours+"hrs"+minutes+"mins"+second+"sec"+" "+req.ip+req.path)
     
next()

}




























const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
module.exports.mid5= mid5