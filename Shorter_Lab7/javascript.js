var $ = function(id) {
    return document.getElementById(id);
}
window.onload = function() {
  var listNode = $("images");
  

  var imageLinks = listNode.getElementsByTagName("a");
}

  function changePicture() {
      console.log("changePicture")
  }
  //$("changePicture").addEventListener("click", changePicture, false)
$("changePicture").onclick = changePicture
var i, image, listNode, link;
for  ( i = 0;  i < imageLinks.length; i++) {
  var timeOut = setTimeout(swapPictures, 1000)
//count down timerCount
//get value from the input
//at end of delay swap pictures
//
}

function swapPictures() {

}
