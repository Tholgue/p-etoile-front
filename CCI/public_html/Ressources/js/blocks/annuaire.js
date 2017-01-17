$(document).ready(function () {
  lectureMembres();
});

function lectureMembres(){
    localStorage
    var authorizationToken = localStorage.getItem("authorizationToken");
    $.ajax({
        type: "GET",
        beforeSend: function(request) {
            request.setRequestHeader("Authority", authorizationToken);
        },
        url: "http://localhost:8080/p-etoile-master/web/app_dev.php/users",
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