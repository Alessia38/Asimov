// Middleware d'authentification
function isAuthenticated(req, res, next) {
    // Vérifie si l'utilisateur est authentifié
    if (req.session && req.session.userId) {
        // Utilisateur authentifié
        return next();
    } else {
        // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
        res.redirect('/connexion');
    }
}

// Middleware de contrôle d'accès basé sur les rôles
function checkRole(role) {
    return function(req, res, next) {
        // Vérifie si l'utilisateur a le rôle requis pour accéder à la page
        if (req.session && req.session.role && req.session.role === role) {
            // Utilisateur a le rôle requis
            return next();
        } else {
            // Redirige vers une page d'erreur ou une autre page appropriée
            res.status(403).send('Accès interdit');
        }
    };
}

module.exports = { isAuthenticated, checkRole };
