const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ArticleInfo = require('./src/model/BlogDB');
const Article = require('./src/model/ArticleDB')
const Register = require('./src/model/RegisterDB');
const path = require("path");
require("dotenv").config();


const app = express();

const port = process.env.PORT || 7397;
app.use(cors());
// Post Method
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));

mongoose.connect(process.env.MONGODB_CONNECTION_STRING,
    {
        useNewUrlParser:true,
        useUnifiedTopology: true
    });


// Each Article Fetch Route
// app.get('/api/article/:name',  async (req, res) => {

//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
//     try {
//         const articleName = req.params.name;

//         console.log(articleName);
//       var list = await  Article.find({ "title" : articleName });
//       res.send(list);
        

        
            
//     }
//     catch (error) {
//         res.status(500).json({ message: 'Error', error });
//     }
// });

// Each Article  fetch Route
app.get('/api/article/:name',async (req, res) => {
   
    
        const list = req.params.name;
     var article =  await  Article.find({ title: list });
            res.send(article);
           
    
   
});

// Upvotes Routing
app.post('/api/article/:name/upvotes', (req, res) => {
    const articleName = req.params.name;
    const filter = { username: articleName };
    const update = { $inc: { upvotes: 1 } };
    ArticleInfo.findOneAndUpdate(filter, update, { new: true })
        .then(function (article) {
            res.json(article);
        })
})

// Comments Routing
app.post('/api/article/:name/comments', (req, res) => {
    const articleName = req.params.name;
    const { person, text } = req.body;
    const filter = { username: articleName };
    const update = { $push: { comments: { person, text } } };
    ArticleInfo.findOneAndUpdate(filter, update, { new: true })
        .then(function (article) {
            res.json(article);
        })
})

//   Article Entry Routing
app.post('/api/article/add', async (req, res) => {
    
    
    const data = req.body;
    var seek= await Article.find({title:data.title});
    if(seek.length===0){

        var info = new Article(data);
    var newInfo = await info.save();
    var book = new ArticleInfo(data);
    var newdata = await book.save();
    
    console.log(newInfo);
    res.send(newInfo);

    }

    else{
        res.send("Tiltle already exists");
    }
    
    
})

// Fetch complete Article data

app.get('/api/articlelist', async (req, res) => {
    
    var list = await Article.find();
    
    res.json(list);
})

// Signup

app.post('/api/register', async (req, res) => {
    
    var data = req.body;

    var details = await Register.find({username:data.userame});
    var email = await Register.find({email:data.email});
    console.log(email);
    console.log(details);
    if((email.length==0) && (details.length==0)&&(data.password!="" && data.username!=""&& data.email!="")){
        var registry =  Register(data);
        var registerData = await registry.save();
         res.send(registerData);

    // var info = ArticleInfo(req.body);
    // var newInfo = await info.save();

    // var details = Article(req.body);
    // var newDetails = await details.save();

    }
    else {
        res.send("Username or Email already exists");
    }
        

    
    
})

// Login
app.post('/api/login', async (req, res) => {
    
    var data=  req.body;
    var user = data.username;
    var pass = data.password;
    var em = data.email;
    var result = await Register.find( {
        $and : [
                 { 
                   $or : [ 
                           {username : user},
                           {email : em}
                         ]
                 },
                 { 
                    password: pass
                 }
               ]
      } );

      console.log(result);

      if(result.length>0){

        res.json(result);
      }

      else{
        res.json({status:'Authentication failed'});
      }

    
    
})


// article Update
app.post('/api/edit/:name', async (req, res,next) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    // const articleName = req.params.name;
    // const   description  = req.body.description;
    var found = await Article.find({title : req.params.name});
    var updated = await Article.updateOne({ "title": req.params.name },{ $set: {"description": req.body.description  } })
//     const filter = { "title": articleName };
//     const update = { $push: {"description":description  } };
//    await  Article.updateOne(filter, update)
//         .then(function (article) {
//             res.json(article);
//         })
console.log(updated);
console.log(found);
res.send(updated);

next();

})

// article Update
app.delete('/api/delete/:name', async (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    // const articleName = req.params.name;
    // const   description  = req.body.description;
    
    var del = await Article.deleteOne({ "title": req.params.name })
//     const filter = { "title": articleName };
//     const update = { $push: {"description":description  } };
//    await  Article.updateOne(filter, update)
//         .then(function (article) {
//             res.json(article);
//         })
console.log(del);

res.send(del);

})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Port number
app.listen(port, () => {
    console.log("Listening on port 5001");
})