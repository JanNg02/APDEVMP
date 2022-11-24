const router = require('./routes.js'); 
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const addEntry = require("./model/dbEntries.js")
const session = require("express-session");
const MongoDBSession = require("connect-mongodb-session")(session)

const mongoURI = "mongodb://0.0.0.0:27017/MCO"

mongoose.connect(mongoURI , {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
    //useCreateIndex:true,
})
    .then((res )=> {
        console.log("Connected");
    })

const store = new MongoDBSession({
    uri: mongoURI ,
    collection: "sessions",
})

//for css, js and images and such
app.use(express.static(__dirname + '/Public'));
app.use(express.static(__dirname));

app.use(express.urlencoded({extended: true}));

//Ejs enabled   
app.set('view engine', 'ejs');
app.set('views', 'view'); 

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret:'key that will sign cookie',
    resave: false,
    saveUninitialized:false,
    store: store,
}))

/*This is the part to comment out after running once 
addEntry.newUser1(); 
addEntry.newUser2();
addEntry.newUser3(); 
addEntry.newUser4();
addEntry.newUser5(); 

addEntry.newProduct1(); 
addEntry.newProduct2();
addEntry.newProduct3(); 
addEntry.newProduct4();
addEntry.newProduct5(); 

addEntry.newOrder1(); 
addEntry.newOrder2();
addEntry.newOrder3(); 
addEntry.newOrder4();
addEntry.newOrder5(); 
*/
//addEntry.newProduct1(); 
port = 3000; 
app.listen(port, function(){
    console.log("Server is running at port: " + port)
}); 


app.use("/",router); 