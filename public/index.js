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
    textMusic += '<div class="card-header" id="headingThree">' +
    '<h5 class="mb-0"><button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false"  value="' +
    i +
    '">' + arrayMusic[i].title  + " </button></h5></div>";
    textMusic +=
      '<div class="card-body">' +
      '<a  id="collapseOne" class="collapse"  "' +
      i +
      '">' +
      arrayMusic[i].snippet + '<br> ID do artigo - ' + arrayMusic[i].pageid +
      "</a></div>";
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

