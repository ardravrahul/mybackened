// const express = require('express');
// const bodyParser = require('body-parser');
// const route = require('./routes/route.js');
// const { default: mongoose } = require('mongoose');
// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
//     useNewUrlParser: true
// })
// .then( () => console.log("MongoDb is connected"))
// .catch ( err => console.log(err) )

// app.use('/', route);


// app.listen(process.env.PORT || 3000, function () {
//     console.log('Express app running on port ' + (process.env.PORT || 3000))
// });



const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://ranjan:e91pDMx03Sx9wB2V@cluster0.u4idw.mongodb.net/ranjit", {useNewUrlParser: true})
     .then(() => console.log('mongodb running on 2707'))
	 .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
