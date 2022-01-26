const express = require('express');
const app = express();
const cors = require('cors')

app.set('port', process.env.PORT || 5000);
console.log('Server on port', app.get('port'));
// Middlewares
app.use(express.json());
app.use(cors())

// Routes
app.use(require('./routes/contacto'));

//app.use(require('./routes/ciudad'));
//app.get('/ciudad', (req, res)=>{
 // res.send('Prueba de api')
//})
//app.get('/contacto', (req, res)=>{
 // app.use(require('./routes/contacto'));
//})


// Starting the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});