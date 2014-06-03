function imgInsert(div, image) {
	var H =  div.offsetHeight,
		W = div.offsetWidth,
		h = image.height,
		w = image.width;
	return function() {
		/*if (w > W && w/W < h/H) {
			image.width = W;
		} else if (h > H && w/W >= h/H) {
			image.height = H;
		};*/
		image.style.top = (H - image.height)/2 + "px";
		image.style.left = (W - image.width)/2 + "px";
	};
}
document.addEventListener("DOMContentLoaded", function() {
	var articles = document.getElementsByClassName('post'),
		len = articles.length;
	for (var i = 0; i < len; i++) {
		var artc = articles[i],
			img = artc.getElementsByTagName('img')[0],
			imgDiv = artc.getElementsByTagName("div")[0];
		if (!img) {
			imgDiv.style.display = "none";
			continue;
		};	
		imgDiv.appendChild(img);
		
		img.onload = imgInsert(imgDiv, img);
	}	
}, false);

window.onresize = function() {
	var imgDivs = document.querySelectorAll(".post div"),
		len = imgDivs.length;
	for (var i = 0; i < len; i++) {
		var imgDiv = imgDivs[i],
			img = imgDiv.getElementsByTagName("img")[0];
		imgInsert(imgDiv, img)();
	};
}