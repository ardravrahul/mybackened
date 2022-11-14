const blogModel = require("../models/blogModel")
const Valid = require("../validations/validator")
const { isValidObjectId } = require("mongoose")
const authorModel = require("../models/authorModel")



const createBlog = async function (req, res) {

    try {
        const requestBody = req.body
        const { title, body, authorId, tags, category, subcategory,isPublished,publishedAt} = requestBody

        if (!Valid.isValidRequestBody(requestBody)) {
            return res.status(400).send({ status: false, msg: " Pls Provide requestBody" })
        }
        if (!Valid.isValid(title)) {
            return res.status(400).send({ status: false, msg: " Pls Provide title for blog" })
        }
        if (!Valid.isValid(body)) {
            return res.status(400).send({ status: false, msg: "Body is Mandtory" })
        }
        if (!Valid.isValid(tags)) {
            return res.status(400).send({ status: false, msg: "Pls provide tags of blog" })
        }
        if (!Valid.isValid(category)) {
            return res.status(400).send({ status: false, msg: "pls provide category of Blog" })
        }

        if (!Valid.isValid(authorId)) {
            return res.status(400).send({ status: false, msg: " Pls provide author Id" })
        }

        const Id = req.body.authorId
        if (!isValidObjectId(Id)) {
            return res.status(400).send({ status: false, msg: " Pls provide Valid author Id" })
        }

        const validId = await authorModel.findById(Id)
        if (validId) {
            const blogCreated = await blogModel.create(requestBody)
            return res.status(201).send({ status: true, msg: 'blog created succesfully ', data: blogCreated })

        } else { res.status(400).send({ statusbar: false, msg: 'invalid authorid' }) }
    }

    catch (err) {

        return res.status(500).send({ status: false, msg: err.msg })

    }


}





const filterBlogs = async function(req,res){


try{
     
    if (req.query.category || req.query.authorId || req.query.tags || req.query.subcategory) {
        let authorId = req.query.authorId
        let tags = req.query.tags
        let category = req.query.category
        let subcategory = req.query.subcategory

      let  obj = {}
        if (authorId) {
            obj.authorId = authorId
        }
        if (tags) {
            obj.tags = tags
        } 
        if (category) {
            obj.category = category
        }
        if (subcategory) {
            obj.subcategory = subcategory
        }

        obj.isDeleted = false
        obj.isPublished = true

        let data = await blogModel.find(obj)
        if (data) {
            return res.status(200).send({ status: true, data: data })
            
        }
        else {
          return res.status(404).send({ status: false, msg: "The given data is invalid!" })
        }

    }
    else {
        return res.status(404).send({ status: false, msg: "Mandatory body is not given" });
    }
}
catch (error) {
    res.status(500).send({ status: false, error: error.message });
}

}


module.exports = { createBlog,filterBlogs }