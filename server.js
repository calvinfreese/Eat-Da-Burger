const express = require('express');
let expHandleBars = require('express-handlebars');
let routes = require('./controllers/burgerController.js');

let PORT = process.env.PORT || 8080;
let app = express();

app.use(express.static("./public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.engine('handlebars', expHandleBars({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

app.use(routes);

app.listen(PORT, function(){
    console.log("Server listening on http://localhost:" + PORT);
});
