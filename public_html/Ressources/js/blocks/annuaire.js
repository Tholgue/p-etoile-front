/*
 * Définition de la route
 * Render le template en html dans la div "app"
 */
(function () {
    var app = Sammy.apps.body;

    app.get('#/annuaire', function (context) {
        context.render("Template/annuaire.template",
                function (output) {
                    $("#app").html(output);
                });
    });
})();



function lectureMembres(){
    localStorage
    var authorizationToken = localStorage.getItem("authorizationToken");
    $.ajax({
        type: "GET",
        beforeSend: function(request) {
            request.setRequestHeader("Authority", authorizationToken);
        },
        url: "http://localhost:8080/users",
        data:{},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success:
            function (data) {
                $.each(data, function (index, user) {
                    $("#listeMembres").append('<p><strong>' + user.firstname + ' ' +
                        user.lastname + '</strong> -- Promotion: ' +
                        user.promotion + ' -- Email: ' +
                        user.email + ' <button class="btn btn-primary">Details</button></p>');
                });
            },
        failure:
            function (message) {
                $("#listeMembres").text(message);
            }
    });
}
