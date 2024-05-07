const express = require('express');
const mysql = require('mysql2');
const iniparser = require('iniparser');
const session = require('express-session');
const configDB = iniparser.parseSync('./DB.ini');
const app = express();

// Import des routes
const connexionRoutes = require('./routes/routeConnexion.js');
const deconnexionRoutes = require('./routes/routeDeconnexion.js');
const eleveRoutes = require('./routes/routeEleve.js');
const enseignantRoutes = require('./routes/routeEnseignant.js');
const proviseurRoutes = require('./routes/routeProviseur.js');
const secretariatRoutes = require('./routes/routeSecretariat.js');

// Connexion à la base de données
const mysqlconnexion = mysql.createConnection({
    host: configDB['dev']['host'],
    user: configDB['dev']['user'],
    password: configDB['dev']['password'],
    database: configDB['dev']['database']
});

mysqlconnexion.connect((err) => {
    if (!err) console.log('BDD connectée.');
    else console.log('BDD connexion échouée \n Erreur: ' + JSON.stringify(err));
});

// Configuration de la session
app.use(session({
    secret: 'Epoka',
    resave: false,
    saveUninitialized: false
}));

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

app.get('/accueil', function(req, res) {
    res.render('accueil');
});

// Utilisation des routes

app.use('/eleve', eleveRoutes);
/*
app.use('/enseignant', enseignantRoutes);
app.use('/proviseur', proviseurRoutes);
app.use('/secretariat', secretariatRoutes);*/
app.use('/connexion', connexionRoutes);
app.use('/deconnexion', deconnexionRoutes);


module.exports = app;