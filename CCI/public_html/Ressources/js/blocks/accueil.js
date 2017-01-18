/*
 * Définition de la route
 * Render en html dans la div "app"
 */
(function () {
    var app = Sammy.apps.body;

    app.get('#/', function (context) {
        context.render('Template/accueil.template',
                function (output) {
                    $("#app").html(output);
                });   
    });
})();
