const cors = require('cors') ;
const express = require('express');
const bodyParser = require('body-parser');

const morgan = require("morgan");

// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5700;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

app.use(morgan("tiny"));
// Require administrateur routes

// using as middleware

app.use(cors());

app.use('/api/v1/administrateur', require('./src/routes/administrateur.routes'))


// Require matiere routes
const matiereRoutes = require('./src/routes/matiere.routes')
// using as middleware
app.use('/api/v1/matiere', matiereRoutes)

// Require cours routes
const coursRoutes = require('./src/routes/cours.routes')
// using as middleware
app.use('/api/v1/cours', coursRoutes)

const etudiantRoutes = require('./src/routes/etudiant.routes')
app.use('/api/v1/etudiant', etudiantRoutes)


const enseignantRoutes = require('./src/routes/enseignant.routes')
app.use('/api/v1/enseignant', enseignantRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});