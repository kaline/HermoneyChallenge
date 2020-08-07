const musicData = 'https://pt.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=%5Bm%C3%BAsica%5D&origin=*';

$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
 
});


var loadData = function(response){
  console.log("Load Data");
  var arrayMusicLength = response.query.search.length;
  var arrayMusic = response.query.search;
  console.log(arrayMusic)
  var textMusic = "";

  for(var i = 0; i < arrayMusicLength; i++){
    textMusic += '<div  class="card mb-3"> <img class="card-img-top" width="100%" height="300" src="images/'+ arrayMusic[i].title +'.jpg" alt="'+ arrayMusic[i].title +'">' +
    ' <div class="card-body"> <h5 class="card-title" value="' +
    i +
    '">' + arrayMusic[i].title  + ' </h5>' +
    '<p class="card-text">' + arrayMusic[i].snippet +'</p>'+
    '<p class="card-text"><small class="text-muted"><a href="https://pt.wikipedia.org/wiki/' + arrayMusic[i].title +'">Leia mais..</a></small></p>'+
    '</div></div>';
   
  }

  document.getElementById("musicData").innerHTML += textMusic; 
  console.log(textMusic)
}

fetch(musicData)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        
        loadData(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  })

