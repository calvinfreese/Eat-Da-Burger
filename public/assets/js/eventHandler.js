$(function() {

$('.add-burger').on("submit", function(event){
    event.preventDefault();

    //If submission is not an empty string, set value then POST
    if($('#burger-text').val().length > 1){
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
    } else {
        console.log('Empty string deteced for burger submission. Please retry your entry.')
    }

    
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