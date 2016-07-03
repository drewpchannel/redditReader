var latestPostId = 0;

function createTitleBar (redditData) {
  for (var i = 0; i < redditData.length; i++) {
    var x = document.getElementById('main');
    var newDiv = document.createElement('div');
    newDiv.className = 'titles';
    checkTitle(newDiv, redditData, i);
    newDiv.addEventListener("click", openInformation);
    checkImageRes(redditData[i].data.preview, newDiv);
    newDiv.dataset.isOpen = false;
    newDiv.dataset.articleLink = redditData[i].data.url;
    findComments(redditData[i].data.title, redditData[i].data.id, newDiv);
    x.appendChild(newDiv);
    if (i === redditData.length - 1){
      latestPostId = redditData[redditData.length - 1].data.name;
    }
  }
}

function checkImageRes(redd, y) {
  if (redd !== undefined) {
    y.dataset.imageURL = redd.images[0].source.url;
  } else {
    y.dataset.imageURL = "./images/nada.png";
  }
}

function checkTitle (newDiv, redditData, i) {
  if (redditData[i].data.title.length < 50){
    newDiv.innerHTML = redditData[i].data.title;
  } else {
    newDiv.innerHTML = redditData[i].data.title.substring(0,50);
  }
}
