function openInformation () {
  if (this.dataset.isOpen === 'false'){
    this.style.height = "140px";
    var y = document.createElement('div');
    y.className = 'previewImage';
    y.id = "image";
    this.dataset.isOpen = true;
    pictureLink(this);
    var k = document.createElement('div');
    this.appendChild(k);

  } else if (this.dataset.isOpen === 'true'){
    this.style.height = '40px';
    this.dataset.isOpen = false;
    this.removeChild(this.querySelector('#image'));
  }
}

function pictureLink (parent) {
  var aElement = document.createElement('a');
  var imgElement = document.createElement('img');
  imgElement.src = aElement.href= parent.dataset.articleLink + "\"";
  parent.appendChild(aElement);
}