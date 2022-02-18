# RESTful_APIs
![RESTapiFeaturedImage](https://user-images.githubusercontent.com/94203408/154632582-da28bb1b-a926-4885-a3e9-4fb9f1282ec6.png)

REST - **RE**presentational **S**tate **T**ransfer

The whole internet is based on client and server relationship.
Client ---> Server

```
app.get(function(req,res){
});
```
There are two types of requests.
- HTTP (Hypertext Transfer Protocol)
- FTP (File Transfer Protocol)
HTTPS = (HTTP Secure)

Secure the data through cryptography and encryption.
client <----- Server

Building an API is kind of building the menu of things that are server respond to, when a client makes a request.
client ---> API ---> Server

## RESTful API
- REST is Architectural style to design APIs.
- It was Build in 2000s by Roy Thomas Fielding
- If every web API was build using the same common guiding principle then it would be so easy for everybody to work together and be able to use different APIs quickly and efficiently. 

### Rules for making An API RESTful.
- use HTTP request verbs.
- use specific patterns of Routes/Endpoints URLs

## HTTP Request Verbs like:
- GET  
- POST  
- PUT  
- PATCH  
- DELETE

**GET** same as **READ** , **POST** same as **CREATE**, **PUT** AND **PATCH** same as **UPDATE** and **DELETE** is for **DELETE**
PUT is "Entire new data to replace the previous one.
PATCH is "only sending a piece of data that needs to be updated.

## Specific routes/patters/Endpoints URLs
like: /documents /contact in webpages.

### Get Request to the server to find data (In Database).
```
app.get("/articles",function(req,res){
    Article.find({}, function(err,foundArticles){
        if(!err){
        res.send(foundArticles); //It will send the data to the articles route.
        } 
        else {
            res.send(err);
        };
    });
    console.log("Server is running and accessing the Articles route");
});
```
### Post Request to the server to add data to the server.
- We will use **Postman** at [Link](https://www.postman.com/)





