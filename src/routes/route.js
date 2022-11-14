const express = require("express")
const router =express.Router()


const authorController = require("../controllers/authorController")
const blogController = require("../controllers/blogController")


router.post("/authors",authorController.createAuthor)// for author creation
router.post("/blogs",blogController.createBlog)//for blogs creation 
router.get("/filterBlogs",blogController.filterBlogs)

module.exports=routerg