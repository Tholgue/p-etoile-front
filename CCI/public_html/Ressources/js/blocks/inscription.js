/*
 * Définition de la route
 * Render le template en html dans la div "app"
 */
(function () {
    var app = Sammy.apps.body;

    app.get('#/inscription', function (context) {
        context.render("Template/inscription.template",
                function (output) {
                    $("#app").html(output);
                });
    });
})();

/*
 * Gestion des événements dans le bloc
 */
$(document).ready(function () {

    $("#btn_inscription").click(function () {
        inscription();
    });
});

/*
 * Vérification des champs et inscription
 */
function inscription() {

    var name = $("#inputNom").val();
    var firstname = $("#inputPrenom").val();
    var promotion = $("#inputPromotion").val();
    var mail = $("#inputEmail").val();
    var password = $("#inputPassword").val();
    var validPassword = $("#inputValidation").val();

    if (confirm("Souhaitez-vous valider les informations d'inscription ?")) {
        // Contrôle si les champs sont remplis
        if (name === "" || firstname === "" || promotion === "" || mail === "" || password === "" || validPassword === "") {
            alert("Merci de remplir toutes les informations");
        } else if (isNaN(promotion)) {
            alert("La promotion doit être un chiffre");
        } else if (valideEmail(mail)) {
            alert("L'adresse mail n'est pas valide");
        } else if (password !== validPassword) {
            alert("Les mots de passe ne correspondent pas");
        } else {
            postMembre();
            alert("You did it bro! Go take a break now...");
        }
    }
}

/*
 * Vérification de l'email
 */
function valideEmail(Email) {
    var filtre = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var valid = filtre.test(Email);

    if (!valid) {
        return true;
    }
    return false;
}

/*
 * POST, url fait référence à la méthode présente en BackEnd
 */
function postMembre() {

    var data = {};
    data.firstname = $("#inputPrenom").val();
    data.lastname = $("#inputNom").val();
    data.email = $("#inputEmail").val();
    data.plainPassword = $("#inputPassword").val();

    $.ajax({
        type: "POST",
        url: "http://localhost:80/p-etoile-master/web/app_dev.php/addUser",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function () {
            alert("Inscription réussie !");
        },
        failure: function () {
            alert("Echec de l'inscription");
        }
    });
}