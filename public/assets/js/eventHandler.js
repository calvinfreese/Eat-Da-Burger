$(function() {

$('.add-burger').on("submit", function(event){
    event.preventDefault();

    let newBurg = {
        burger_name: $('#burger-text').val().trim(),
        devoured: 0
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
    
    
    let eatBurger = {
        devoured: true
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