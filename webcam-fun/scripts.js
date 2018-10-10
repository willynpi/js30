const video = document.querySelector('.player')
const canvas = document.querySelector('.photo')
const ctx = canvas.getContext('2d')
const strip = document.querySelector('.strip')
const snap = document.querySelector('.snap')

function getVideo() {
	navigator.mediaDevices.getUserMedia({ video: true, audio: false })
		.then(localMediaStream => {
			video.srcObject = localMediaStream;
			video.onloadedmetadata  = function(e) {
				video.play();
				paintToCanvas();//
			}
		})
		.catch(e => {
			console.log(e);
		});
}

function paintToCanvas() {
	const width = video.videoWidth;
	const height = video.videoHeight;
	canvas.width = width;
	canvas.height = height;

	return setInterval(() => {
		ctx.drawImage(video, 0, 0, width, height);
		let pixels = ctx.getImageData(0,0,width,height);
		pixels = redEffect(pixels);
		ctx.globalAlpha = 1.5;
		ctx.putImageData(pixels, 0 ,0);
	}, 16);
}

function takePhoto() {
	snap.currentTime = 0;
	snap.play();
	const data = canvas.toDataURL('image/jpeg');
	const link = document.createElement('a');
	link.href = data;
	link.innerHTML = `<img src="${data}" alt="ME" />`;
	console.log(link);
	strip.insertBefore(link, strip.firstChild); //***

}

function redEffect(pixels) {
	// ImageData.data => Uint8ClampedArray() 
	// 把影像攤開為一個一維陣列，每4個一組為一個pixel的[R, G, B, A]
	// 數值為 0 - 255, 超過數值則以0 或 255 代替。
	// 非數值則使用鄰近數值代替。

	for(let i = 0; i < pixels.data.length; i += 4){
		pixels.data[i-100] = pixels.data[i+0] + 100; //RED
		pixels.data[i+150] = pixels.data[i+1] - 50  //GREEN
		pixels.data[i+500] = pixels.data[i+2] *0.5 //BLUE
		
	}
	return pixels;
}

getVideo();