// const authorModel = require("../models/authorModel")
// const bookModel= require("../models/bookModel")

// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails

const { count } = require("console")
const newAuthor = require("../models/newAuthor")
const newBook= require("../models/newBook")
const newPublisher = require("../models/newPublisher")

const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher

    //validation a
    if(!authorId) return res.send('The request is not valid as the author details are required.')

    //validation b
    let author = await authorModel.findById(authorId)
    if(!author) return res.send('The request is not valid as no author is present with the given author id')

    //validation c
    if(!publisherId) return res.send('The request is not valid as the publisher details are required.') 

    //validation d
    let publisher = await publisherModel.findById(publisherId)
    if(!publisher) return res.send('The request is not valid as no publisher is present with the given publisher id')

    let bookCreated = await bookModel.create(book)
    return res.send({data: bookCreated})
}

const getBooks= async function (req, res) {
    let books = await newBook.find().populate('author publisher')
    res.send({data: books})
};
const updateBooks = async function (req, res) {
    // 5. a)
    let hardCoverPublishers = await publisherModel.find({
      name: { $in: ["Penguin", "HarperCollins"] },
    });
    let publisherIds = hardCoverPublishers.map((p) => p._id); //publisherIds is an array of publisher _id values
  
    await newBook.updateMany(
      { publisher: { $in: publisherIds } },
      { isHardCover: true }
    );
  
    // 5. b)
    let highRatedAuthors = await newAuthor.find({ rating: { $gt: 3.5 } });
    let authorIds = highRatedAuthors.map((a) => a._id);
  
    await newBook.updateMany(
      { author: { $in: authorIds } },
      { $inc: { price: 10 } }
    );
  
    let updatedBooks = await newBook.find();
    res.send({ updatedBookCollection: updatedBooks });
  };
module.exports.createBook= createBook
module.exports.getBooks= getBooks
module.exports.updateBooks = updateBooks;
