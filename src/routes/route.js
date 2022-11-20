const express = require("express")
const router =express.Router()


const authorController = require("../controllers/authorController")
const blogController = require("../controllers/blogController")
const m =require("../middleware/middleware")

router.post("/authors",authorController.createAuthor) // for author creation

router.post("/login",authorController.authorLogin) //for login author

router.post("/blogs",m.authentication,blogController.createBlog) //for blogs creation 

router.get("/filterBlogs",m.authentication,blogController.filterBlogs) //for fetching blogs 

router.put("/blogs/:blogId",m.authentication,blogController.updateBlog) //for updating blogs

router.delete("/blogs/:blogId",m.authentication,blogController.blogDeletionById) //for deletion of  blog with Id

router.delete("/blogs",m.authentication,blogController.deleteBlog) //for deletion of  blog with query

module.exports=router   