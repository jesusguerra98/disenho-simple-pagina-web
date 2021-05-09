const hbs = require('hbs');
const express = require('express')
const app = express()
require('dotenv').config();
const port =process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');//, function (err) {});


//servir contenido estatico
app.use(express.static('public'));


app.get('/', function (req, res) {
  res.render('home',{
      nombre: 'Jesus guerra',
      titulo: 'Curso de Node'
  });
});

app.get('/generic', function (req, res) {
    res.render('generic')
  });

  app.get('/elements', function (req, res) {
    res.render('elements')
  });


//   app.get('*', function (req, res) {
//     res.sendFile(__dirname+'/public/404.html')
//   });
 
  
app.listen(port,()=>{
    console.log(`Ejemplo escuchando en http://localhost:${port}`);
});