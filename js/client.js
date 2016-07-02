var oReq = new XMLHttpRequest();
function reqListener () {
  var x = JSON.parse(this.responseText);
  var redditData = x.data.children;
  createTitleBar(redditData);
}
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://www.reddit.com/r/Futurology.json");
oReq.send();

