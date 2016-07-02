function createTitleBar (redditData) {
  for (var i = 0; i < 26; i++) {
    var x = document.getElementById('main');
    var y = document.createElement('div');
    y.className = 'titles';
    y.innerHTML = redditData[i].data.title;
    y.addEventListener("click", openInformation);
    if (redditData[i].data.preview !== undefined) {
      y.dataset.imageURL = redditData[i].data.preview.images[0].resolutions[0].url;
      y.dataset.imageHeight = redditData[i].data.preview.images[0].resolutions[0].height;
    }
    y.dataset.isOpen = false;
    x.appendChild(y);
  }
}

function openInformation (redditData) {
  if (this.dataset.isOpen === 'false'){
    var y = document.createElement('div');
    y.innerHTML = "<img src=\"" +  this.dataset.imageURL + "\" />";
    y.className = 'previewImage';
    y.id = "image";
    this.dataset.isOpen = true;
    this.appendChild(y);
    this.style.height = this.dataset.imageHeight;
  } else if (this.dataset.isOpen === 'true'){
    this.style.height = '40px';
    this.dataset.isOpen = false;
    this.removeChild(this.childNodes[1]);
  }
}