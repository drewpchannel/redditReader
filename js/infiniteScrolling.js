var scrollCount = 0;
window.onscroll = function() {
  scrollCount++;
  if (scrollCount % 58 === 0) {
    inifiniteScrollStall();
  }
};

function inifiniteScrollStall() {
  var oReqScroll = new XMLHttpRequest();
  function displayNewPosts () {
    var x = JSON.parse(this.responseText);
    var redditData = x.data.children;
    createTitleBar(redditData);
  }
  oReqScroll.addEventListener("load", displayNewPosts);
  oReqScroll.open("GET", "https://www.reddit.com/r/" + userIn + "/.json?&after=" + latestPostId);
  oReqScroll.send();
}