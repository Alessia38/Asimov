async function deconnexion(req, res) {
    try {
        // Vérifier si l'utilisateur est connecté
        if (req.session && req.session.user) {
            // Détruire la session
            req.session.destroy((err) => {
                if (err) {
                    console.error("Erreur lors de la déconnexion :", err);
                    res.status(500).send('Erreur lors de la déconnexion');
                } else {
                    res.redirect("/");
                }
            });
        } else {
            res.redirect("/");
        }
    } catch (error) {
        console.error("Erreur lors de la déconnexion :", error);
        res.status(500).send('Erreur lors de la déconnexion');
    }
}

module.exports = {
    deconnexion
};
