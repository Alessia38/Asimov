const express = require('express');
const mysql = require('mysql2');
const iniparser = require('iniparser');
const configDB = iniparser.parseSync('./DB.ini')
const app = express();

// Importer les routes
const connexionRoutes = require('./routes/routesConnexion.js');

// Connection à la bdd
let mysqlconnexion = mysql.createConnection({
    host:configDB['dev']['host'],
    user:configDB['dev']['user'],
    password:configDB['dev']['password'],
    database:configDB['dev']['database']
   })

   mysqlconnexion.connect((err) => {
    if (!err) console.log('BDD connectée.')
    else console.log('BDD connexion échouée \n Erreur: '+JSON.stringify(err))
   });

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('views'));
app.use(express.static('public'));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

app.get('/', (req, res) => {
    res.render('connexion');
});



