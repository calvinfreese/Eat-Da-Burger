$(function() {

$('.add-burger').on("submit", function(event){
    event.preventDefault();

    let newBurg = {
        burger_name: $('#burger-text').val().trim()
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurg
    }).then(
        function() {
            console.log("New burger added to the menu!");
            location.reload();
        }
    );
});

$('.devour').on('click', function(event){
    let id = $(this).data("id");
    let devourBool = $(this).data("data-devoured");

    let eatBurger = {
        devoured: devourBool
    };

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eatBurger
    }). then(
        function() {
            console.log('Burger has been devoured!');
            location.reload();
        }
    );
});
});