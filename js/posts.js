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