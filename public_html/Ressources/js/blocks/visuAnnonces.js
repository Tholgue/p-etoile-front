(function () {
    var app = Sammy.apps.body;

    app.get('#/visuAnnonce', function (context) {
        context.render("Template/visuAnnonces.template",
                function (output) {
                    $("#app").html(output);
                });
    });
})();

