$(document).ready(function () {

    $("#register").submit(function () {

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
        //inscriptionMembre;
        lectureMembres();
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

/*
 * Pour tester le GET.
 * Doit pouvoir remplir une div dans le html.
 * Penser à commenter la méthode POST.
 */

function lectureMembres(){
    $.ajax({
        type: "GET",
        url: "localhost:8080/petoile/web/app_dev.php/users",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var users = response.d;
            $("#testContenu").empty();
            $.each(users, function (index, user) {
                $("#testContenu").append('<p><strong>' + user.firstname + ' ' +
                        user.lastname + '</strong><br />Promotion: ' +
                        user.promotion + '<br /> Email: ' +
                        user.email + '</p>');
            });
            alert("success !");
            },
            failure: function (message) {
                $("#testContenu").text(message);
                alert("fail la putain de toi");
        }
        });
}

/*
 * Pour tester le POST.
 * A finir
 * Doit afficher un message de succès ou d'echec, en plus de réussir l'écriture
 * Penser à commenter le GET.
 */
//function inscriptionMembre() {
//    var firstname = $("#inputPrenom").val();
//    var lastname = $("#inputNom").val();
//    var email = $("#inputEmail").val();
//    var password = $("#inputPassword").val();
//    var promotion = $("#inputPromotion").val();
//    $.ajax({
//        type: "POST",
//        url: "postUser",
//        data: {firstname: firstname, lastname: lastname, email: email, password: password, promotion: promotion},
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        success: function (message) {
//
//        }
//    });
//}

