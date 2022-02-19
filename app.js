const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const req = require("express/lib/request");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost:27017/wikiDB");

app.set("view engine", "ejs");
app.use(express.static("public"));


// ----------Mongoose Schema---------
const articleSchema = {
    title: String,
    content: String
};

// ----------- mongoose Model-----------
const Article = mongoose.model("Article", articleSchema);

// mongoose documentation = mongoose data.


// ------Express chain Method
app.route("/articles")
.get(function(req,res){
    Article.find({}, function(err,foundArticles){
        if(!err){
        res.send(foundArticles); //It will send the data to the articles route.
        } 
        else {
            res.send(err);
        };
    });
    console.log("Server is running and accessing the Articles route");
})
.post(function(req,res){

    // Adding the data to the MongoDB using mongoose Document.
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });
    newArticle.save(function(err){
        if(!err){
            res.send("Successfully added a new article");
        } else {
            res.send(err);
        }
    });
})
.delete(function(req,res){
    Article.deleteMany({},function(err){
        if(!err){
            res.send("Successfully deleted all the articles.")
        } else {
            res.send(err);
        }
    });
});

// ////////////////Express chanied method Targeting a specific article///////////////////
//////////////Route parameters/////////////
app.route("/articles/:articleTitle")
    // req.params.articleTitle = localhost:3000/articles/userInput
.get(function(req,res){
    Article.findOne({title: req.params.articleTitle},function(err, foundArticle){
        if(foundArticle){
            res.send(foundArticle);
        } else {
            res.send("No artlcle found matching the title")
        }
    })
})
.put(function(req,res){
    Article.replaceOne(
        {title: req.params.articleTitle}, //user input title
        {title: req.body.title, content: req.body.content},
        {overwrite: true},
        function(err){
            if(!err){
                res.send("Successfully updated article.")
            }
        }
    )
})
.patch(function(req,res){
    Article.updateOne(
        {title: req.params.articleTitle},
        {$set: req.body},
        function(err){
            if(!err){
                res.send("Successfully updated the articles")
            } else {
                res.send(err);
            }
        }
    )
})
.delete(function(req,res){
    Article.deleteOne(
    {title: req.params.articleTitle},
    function(err){
        if(!err){
            res.send("Successfully delete the article")
        } else {
            res.send(err)
        }
    }
    );
});

app.listen(3000, function(req,res){
    console.log("Server is runnning at localhost:3000");
});