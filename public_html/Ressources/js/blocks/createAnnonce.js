/*
 * Définition de la route
 * Render le template en html dans la div "app"
 */
(function () {
    var app = Sammy.apps.body;

    app.get('#/createAnnonce', function (context) {
        context.render("Template/createAnnonce.template",
                function (output) {
                    $("#app").html(output);
                });
    });
})();

/*
 * Gestion des événements dans le bloc
 */
$(document).ready(function () {

    $.validate({
        form: '#annonce',
        onModulesLoaded: function () {}
    });

    $("#selector").change(function () {
        if (this.options[this.selectedIndex].id === "apprentissage") {
            $("#specialisation").show();
        } else{
            $("#specialisation").hide();
        }
    });

    $("#btn_annonce").click(function () {
        controlAnnonce();
    });
});

function controlAnnonce() {
    postAnnonce();
}

function postAnnonce() {

}