const authorModel = require("../models/authorModel")
const valid = require("../validations/validator")

const createAuthor = async function (req, res)  {

    try {

        const requestBody = req.body
        const {title, fName, lName, email, password } = requestBody

        if (!valid.isValidRequestBody(requestBody)) {
          return  res.status(400).send({ status: false, msg: " Pls Provide RequestBody" })
        }

        if (!valid.isValid(title)) {
           return res.status(400).send({ status: false, msg: "Title is Mandatory" })
        }
        if (!valid.isValidtitle(title)) {
            return  res.status(400).send({ status: false, msg: "Title Should be Mr,Miss,Mrs" })
        }

        if (!valid.isValid(fName)) {
            return  res.status(400).send({ status: false, msg: "Pls Provide First Name of Author" })
        }
        if (!valid.isValid(lName)) {
            return  res.status(400).send({ status: false, msg: "Pls Provide Last Name of Author" })
        }

        if (!valid.isValid(email)) {
            return  res.status(400).send({ status: false, msg: "email is Mandatory" })
        }
        if (!valid.isValidEmail(email)) { 
        
            return  res.status(400).send({ status: false, msg: "Invalid email address" })
        }

        const emailAlreadyUsed = await authorModel.findOne({ email: email })
        if (emailAlreadyUsed) {
            return res.status(400).send({ status: false, msg: " email id already used" })
        }
        if (!valid.isValid(password)) {
            return res.status(400).send({ status: false, msg: " pls provide password" })
        }

        const authorCreation = await authorModel.create(requestBody)
        res.status(201).send({ statu: true, Data: authorCreation, msg: " Author Creation Successfull" })

    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.msg })

    }

}

module.exports = { createAuthor }  



