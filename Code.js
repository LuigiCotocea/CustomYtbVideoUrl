function ReplaceUrlWithCurrent(){
  var url = document.getElementById("YtbInsertUrl").value;
  var next = url.toString().substring(url.toString().indexOf('=') + 1);
  var final = "https://www.youtube.com/embed/" + next;
  document.getElementById("Frame").src = final
}