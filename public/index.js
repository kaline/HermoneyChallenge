
function requestMusicData(){

const http = new XMLHttpRequest()

http.open("GET","http://localhost:3000/music")
http.send()

http.onload = () => console.log(http.responseText)

}
