/*
 * Permet de définir la route par défaut
 * body utilisé comme champs
 * Utilisation du templating Sammy
 */
(function ($) {
    var app = Sammy('body');
    app.use(Sammy.Template);
    $(document).ready(function () {
        app.run('#/');
    });
})(jQuery);

/*
 * Gestion des événements de la navbar
 */
$(document).ready(function () {
    
    $("#btn_connexion").click(function () {
        event.preventDefault();
        connexion();
    });

    $("#btn_deconnexion").click(function () {
        event.preventDefault();
        deconnexion();
    });
});

function connexion() {

    var data = {};
    data.login = $("#inputLogin").val();
    data.password = $("#inputPwd").val();

    $.ajax({
        type: "POST",
        url: "http://localhost:8080/auth-tokens",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            Cookies.set('token', data.value, {expires: 0.5});
            Cookies.set('idToken', data.id, {expires: 0.5});
            $("#formConnexion").hide();
            $("#accessProfil").show();
        },
        failure: function () {
            alert('Login ou mot de passe incorrect');
        }
    });

}

function deconnexion() {

    $.ajax({
        type: "DELETE",
        headers : { 'X-Auth-Token': Cookies.get('token') },
        url: "http://localhost:8080/auth-tokens/" + Cookies.get('idToken'),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function () {
            Cookies.remove('token');
            Cookies.remove('idToken');
            $("#accessProfil").hide();
            $("#formConnexion").show();
            console.log("Deconnexion réussie !");
        }
    });
}
