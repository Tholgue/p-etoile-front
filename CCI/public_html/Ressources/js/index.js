$(document).ready(function () {

    $("#register").submit(function () {
        event.preventDefault();
        verifChamps();
        inscriptionMembre();
    });
});

function valideEmail(Email) {
    var filtre = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var valid = filtre.test(Email);

    if (!valid) {
        return true;
    }
    return false;
}

function verifChamps() {

    if ($("#inputNom").val() == "") {
        alert("Merci de saisir votre nom");
        $("#inputNom").focus();
        return false;
    }
    if ($("#inputPrenom").val() == "") {
        alert("Merci de saisir votre prenom");
        $("#inputPrenom").focus();
        return false;
    }
    if ($("#inputEmail").val() == "" || valideEmail($("#inputEmail").val())) {
        alert("Merci de saisir votre adresse email correcte");
        $("#inputEmail").focus();
        return false;
    }
    if ($("#inputPassword").val() == "") {
        alert("Merci de saisir votre mot de passe");
        $("#inputPassword").focus();
        return false;
    }
    if ($("#inputPromotion").val() == "") {
        alert("Merci de saisir le numéro de votre promotion");
        $("#inputPromotion").focus();
        return false;
    }

    if ($("#inputValidation").val() == "") {
        alert("Merci de saisir la vérification de votre mot de passe");
        $("#inputValidation").focus();
        return false;
    }
}


function inscriptionMembre() {

    var firstname = $("#inputPrenom").val();
    var lastname = $("#inputNom").val();
    var email = $("#inputEmail").val();
    var password = $("#inputPassword").val();
    var promotion = $("#inputPromotion").val();
    var login = $("#inputPrenom").val().substring(0,1)+$("#inputNom").val();

    $.ajax({
        type: "POST",
        url: "http://localhost:8080/p-etoile-master/web/app_dev.php/users",
        data: JSON.stringify({firstname: firstname, lastname: lastname, email: email, password: password, promotion: promotion, login: login}),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (message){
            $("#statutInscription").append('<p>Inscription success !</p>');
        },
        failure: function(message){
            $("#statutInscription").append('<p>Inscription fail !</p>')
        }
    });
}