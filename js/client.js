var userIn =  prompt('Please enter the sub Reddit you would like to view');
var oReq = new XMLHttpRequest();

function reqListener () {
  var x = JSON.parse(this.responseText);
  var redditData = x.data.children;
  createTitleBar(redditData);
}
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://www.reddit.com/r/" + userIn + ".json");
oReq.send();