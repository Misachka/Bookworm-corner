$("#genre-list button").on("click", function(event) {
  const genre = event.target.textContent;
  console.log("getting books for " + genre)
  
  fetch("/genre/" + genre )
  .then(res => res.json())
  .then(data => {
      console.log(data)
      data.forEach((res) => {
          
      const newDiv = $("<div>");
      newDiv.addClass("card");
      //newDiv.css("width", "18rem");
      

      newDiv.html(`
      <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${data.volumeInfo.imageLinks.smallThumbnail}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
      `)

      $("#results-list").append(newDiv)

      })

      // create a for loop that will create a card

      const newDiv = $("<div>");
      newDiv.addClass("card");
      //newDiv.css("width", "18rem");
      
       //need a button to add books to favorite//
      newDiv.html(`
      <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="..." alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

        <button type="sumbit" class="btn btn-primary">Add to favorites</button>
      
      </div>
    </div>
      `)

      $("#results-list").append(newDiv)

      
  })
})

console.log("hello")

const addToFav = async (event) => {
  const response= await fetch(`/api/favories/${title}`,{
    method: 'POST'
  });
   if (response.ok)
   
}