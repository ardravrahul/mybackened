const express = require("express")
const router =express.Router()


const authorController = require("../controllers/authorController")
const blogController = require("../controllers/blogController")


router.post("/authors",authorController.createAuthor)// for author creation
router.post("/blogs",blogController.createBlog)//for blogs creation 
router.get("/filterBlogs",blogController.filterBlogs)//for fetching blogs
router.put("/blogs/:blogId",blogController.updateBlog)//for updating blogs
router.delete("/blogs/:blogId",blogController.blogDeletionById) //for deletion of  blog with Id
router.delete("/blogs",blogController.deleteBlog)//for deletion of  blog with query

module.exports=router   