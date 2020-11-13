// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        console.log("id", id);
        var newdevour = $(this).data("newdevour");
        console.log("newdevour", newdevour);

        var newDevourState = {
            devour: newdevour,

        };
        console.log("newDevourState", newDevourState);
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devour to", newdevour);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log("user_select_burger")
        var newBurger = {
            burger_name: $("#user_select_burger").val().trim(),
            //devour: $("[burger_name=devour]:checked").val().trim()
        };
        console.log(newBurger);

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});
