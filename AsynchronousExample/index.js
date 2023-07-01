/*
    https://cdn.pixabay.com/photo/2019/05/29/14/30/cinque-terre-4237666_1280.jpg
    https://cdn.pixabay.com/photo/2022/01/28/21/10/honeybee-6975865_1280.jpg
    https://cdn.pixabay.com/photo/2021/10/16/05/43/love-6713977_1280.jpg
    https://cdn.pixabay.com/photo/2022/01/25/12/58/conifer-6966140_1280.jpg
 */

var images = [];
var slideshowContainer = document.getElementById("slideshow-container");

function storeImages() {
  let img = document.getElementById("url").value;
  images.push(img);
  console.log(images);
	document.getElementById("url").value = '';
}

var timeInterval;
function start() {
  let slideshowImgElement = document.createElement("img");

  let i = 0;
  timeInterval = setInterval(function () {
    if (i === images.length) {
      i = 0;
    }
    slideshowImgElement.src = images[i];
    i++;
  }, 1000);

  slideshowContainer.append(slideshowImgElement);
}

function stop() {
  clearInterval(timeInterval);
}
