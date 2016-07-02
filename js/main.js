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
    console.log(redditData);
  }
}


function openInformation () {
  if (this.dataset.isOpen === 'false'){
    this.style.height = "140px";
    var y = document.createElement('div');
    y.innerHTML = "<a href=\"" + this.dataset.articleLink + "\"> <img src=\"" +  this.dataset.imageURL + "\" height=\"100px\" width=\"200px\" /> </a>";
    y.className = 'previewImage';
    y.id = "image";
    this.dataset.isOpen = true;
    this.appendChild(y);
    var k = document.createElement('div');

    this.appendChild(k);
  } else if (this.dataset.isOpen === 'true'){
    this.style.height = '40px';
    this.dataset.isOpen = false;
    this.removeChild(this.childNodes[1]);
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