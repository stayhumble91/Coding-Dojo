var mongoose = require("mongoose");
var path = require("path");
var bodyParser = require("body-parser");
var express = require ("express")
var app = express();
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./views")));
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.post('/users', function(req, res) {
 console.log("POST DATA", req.body);
 res.redirect('/');
}) 

app.get("/", (req,res)=> {
    res.render("index",{})

});
app.listen(3000, function(){
   console.log("listening to port 3000")
});

mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
 name: String,
 age: Number
})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'