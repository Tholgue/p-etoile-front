/*
 * Permet de définir la route par défaut
 * body utilisé comme champs
 * Utilisation du templating Sammy
 */
(function ($) {
    var app = Sammy('body');
    app.use(Sammy.Template);
        this.debug = true;
        $(document).ready(function(){
            app.run('#/');
        });
})(jQuery);


/*
 * Gestion des événements de la navbar
 */
$(document).ready(function () {
    $("#btn_connexion").click(function () {
        event.preventDefault();
        $("#formConnexion").hide();
        $("#accessProfil").show();
    });
});