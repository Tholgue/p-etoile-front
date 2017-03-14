(function () {
    var app = Sammy.apps.body;

    app.get('#/profile', function (context) {
        context.render("Template/profile.template",
                function (output) {
                    $("#app").html(output);
                });
    });
})();

