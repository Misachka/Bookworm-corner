$("#genre-list button").on("click", function(event) {
    const genre = event.target.textContent;
    console.log("getting books for " + genre)
    
    fetch("/genre/" + genre )
    .then(res => res.json())
    .then(data => {
        console.log(data)

        // create a for loop that will create a card

        const newDiv = $("<div>");
        newDiv.addClass("card");
        newDiv.css("width", "18rem");

        newDiv.html(`
        <img class="card-img-top" src="https://placehold.co/600x400" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
        </div>
        `)

        $("#results-list").append(newDiv)

        ///
    })
})

console.log("hello")