$("#genre-list button").on("click", function(event) {
  const genre = event.target.textContent;
  console.log("getting books for " + genre)
  
  fetch("/:genre" + genre )
  .then(res => res.json())
  //.then(data => {
    
      //console.log(data)
      //const book = data
      
      
      //data.forEach((book) => {
          
      // const newDiv = $("<div>");
      // newDiv.addClass("card");
      //newDiv.css("width", "18rem");
      

    //   newDiv.html(`
    //   <div class="card" style="width: 18rem;">
    //   <img class="card-img-top" src="${book.smallThumbnail}" alt="Card image cap">
    //   <div class="card-body">
    //     <h5 class="card-title">title</h5>
    //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //   </div>
    // </div>
    //   `)

    //   $("#results-list").append(newDiv)

    //   })

      // create a for loop that will create a card

      
  //})
})

console.log("hello")