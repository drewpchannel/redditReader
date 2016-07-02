var latestPostId = 0;

function createTitleBar (redditData) {
  for (var i = 0; i < redditData.length; i++) {
    var x = document.getElementById('main');
    var newDiv = document.createElement('div');
    newDiv.className = 'titles';
    newDiv.innerHTML = redditData[i].data.title;
    newDiv.addEventListener("click", openInformation);
    checkImageRes(redditData[i].data.preview, newDiv);
    newDiv.dataset.isOpen = false;
    newDiv.dataset.articleLink = redditData[i].data.url;
    // newDiv.dataset.comments = JSON.parse(redditData[i].data.url + "comments/.json");
    x.appendChild(newDiv);
    if (i === redditData.length - 1){
      latestPostId = redditData[redditData.length - 1].data.name;
    }
  }
}

function checkImageRes(redd, y) {
  if (redd !== undefined) {
    y.dataset.imageURL = redd.images[0].resolutions[1].url;
  } else if (redd !== undefined) {
    y.dataset.imageURL = redd.images[0].resolutions[0].url;
  } else {
    y.dataset.imageURL = "./images/nada.png";
  }
}