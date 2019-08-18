const express = require("express");
const app = express();

let potatoes=1, eggs=1, onions=1;
let balance=100;
let error = false;


app.use(express.static("public"));

// app.get('/', function(req, res){
//     console.log("request granted");
//     // res.send("Landing page");
//     res.render("index.ejs");
// });

app.get('/',function(req,res){
    res.render('index.ejs',{ xpotatoes : potatoes, xeggs : eggs, xonions : onions, xbalance : balance,error: error});
    error=false;
});

app.get('/buyPotatoes', function(req,res){
    buyPotatoes();
    res.redirect('/');
    console.log('potatoes');
});

app.get('/buyEggs', function(req,res){
    buyEggs();
    res.redirect('/');
    console.log('eggs');
});

app.get('/buyOnions', function(req,res){
    buyOnions();
    res.redirect('/');
    console.log('onions');
});

app.get('/sellFrenchFries', function(req,res){
    sellFrenchFries();
    res.redirect('/');
    console.log('french fries');
});

app.get('/sellOmelettes', function(req,res){
    sellOmelettes();
    res.redirect('/');
    console.log('omelettes');
});

app.get('*', function(req, res){
    res.send("Page Not Found");
});

app.listen(3000, function(){
    console.log("Server is Up");
});

function buyPotatoes(){
    potatoes = potatoes+1;
    balance = balance-2;
    console.log(potatoes);
}

function buyEggs(){
    eggs = eggs+1;
    balance = balance-1;
    console.log(potatoes);
}

function buyOnions(){
    onions = onions+1;
    balance = balance-2;
    console.log(onions);
}

function sellFrenchFries(){
    if(potatoes>=3){
    balance = balance+40;
    potatoes = potatoes-3;
    }
    else {
        error = true;
    }
}

function sellOmelettes(){
    if(eggs>=4 && onions>=1){
    balance = balance+30;
    eggs = eggs-4;
    onions = onions-1;
    }
    else {
        error = true;
    }
}