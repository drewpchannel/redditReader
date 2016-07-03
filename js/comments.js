//needs to be one big function that loads in all the comments, then adds them to the div data

function findComments (title, name, div) {
  var oReqComm = new XMLHttpRequest();
  function displayComments () {
    var x = JSON.parse(this.responseText);
    var d = x[1].data.children[0].data.body;
    if(typeof d === 'string' || d !== undefined){
      div.dataset.comments = x[1].data.children[0].data.body;
      console.log(div.dataset.comments);
    }
  }
  oReqComm.addEventListener("load", displayComments);
  oReqComm.open("GET", "https://www.reddit.com/r/" + userIn + "/comments/" + name + "/" + title + ".json");
  oReqComm.send();
}