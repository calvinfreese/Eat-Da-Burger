const express = require('express');
const expHandleBars = require('express-handlebars');
const routes = require('./controllers/burgerController.js');

let PORT = process.env.PORT || 8080;
let app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

app.engine('handlebars', expHandleBars({defaultLayout: "main"}));
app.set('view engine', 'handlebars');


app.listen(PORT, function(){
    console.log("Server listening on http://localhost:" + PORT);
});
