function openInformation () {
  if (this.dataset.isOpen === 'false'){
    this.style.height = "140px";
    var y = document.createElement('div');
    y.innerHTML = "<a href=\"" + this.dataset.articleLink + "\"> <img src=\"" +  this.dataset.imageURL + "\" class=\"loadedImage\" height=\"100px\" width=\"200px\" /> </a>";
    y.className = 'previewImage';
    y.id = "image";
    this.dataset.isOpen = true;
    this.appendChild(y);

    var x = document.createElement('div');
    x.innerHTML = this.dataset.comments;
    this.appendChild(x);
  }
  else if (this.dataset.isOpen === 'true'){
    this.style.height = '40px';
    this.dataset.isOpen = false;
    this.removeChild(this.querySelector('#image'));
  }
}

/*function pictureLink (parent) {
  var aElement = document.createElement('a');
  var imgElement = document.createElement('img');
  imgElement.src = aElement.href= parent.dataset.articleLink + "\"";
  parent.appendChild(aElement);
}*/