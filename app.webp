<!DOCTYPE html>
<html><head><style>
*
{
width: 100% !important;
heigth: 1080px !important;
scale: 100% !important;
border: 0px !important;
padding: 0px !important;
margin: 0px !important;
pointer-events: all !important;
background-color: #000000FF !important;
accent-color: #FF00FFFF !important;
visibility: visible !important;
overflow: none !important;
resize: both !important;
color: #FFFFFFFF !important;
font-size: 20px !important;
}
</style>
</head><body><div>
  	<a class="icon up" href="..">
  	<span>file://wsl.localhost/Debian</span>
	</a>
	</div>
<iframe src="file://localhost/c:/">
<iframe src="chrome://resources/">
<link rel="stylesheet" href="chrome://resources/css/text_defaults_md.css">
<div>
*
</div>
<iframe src="https://bing.com" width="1920" height="1080"></iframe>
<div lang="en" contenteditable="true" draggable="true" display_override="standalone" display="standalone"></div>
<iframe src="C:\" width="1920" height="1080">
<iframe src="https://bing.com" width="1920" height="1080">
<script async src="https://Z3l2A.github.io/gtag.js"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-PRPM8J1QZE');
</script>
<meta charset="UTF-8">y
<title>QR Code Generator and Decoder</title>
<script src="https://Z3l2A.github.io/qrcode.min.js"></script>
<h1>QR Code Generator</h1>
<input type="file" id="fileInput">
<textarea id="textInput" placeholder=""></textarea>
<button onclick="generateQRCode()">Generate QR Code</button>
<div id="qrcode"></div>
<h1>QR Code Decoder</h1>
<input type="file" id="qrInput">
<button onclick="decodeQRCode()">Decode QR Code</button>
<textarea id="decodedOutput" placeholder=""></textarea>
<h1>BASE64 Decoder</h1>
<textarea id="base64Input" placeholder=""></textarea>
<button onclick="decodeBase64()">Decode BASE64</button>
<textarea id="base64Output" placeholder=""></textarea>
<script>
function generateQRCode() {
var fileInput = document.getElementById('fileInput').files[0];
var textInput = document.getElementById('textInput').value;
var qrCodeContainer = document.getElementById('qrcode');
qrCodeContainer.innerHTML = '';
if (fileInput) {
var reader = new FileReader();
reader.onload = function(event) {
new QRCode(qrCodeContainer, event.target.result);
};
reader.readAsDataURL(fileInput);
} else if (textInput) {
new QRCode(qrCodeContainer, textInput);
}
}
function decodeQRCode() {
var qrInput = document.getElementById('qrInput').files[0];
if (qrInput) {
var reader = new FileReader();
reader.onload = function(event) {
var img = new Image();
img.src = event.target.result;
img.onload = function() {
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
canvas.width = img.width;
canvas.height = img.height;
context.drawImage(img, 0, 0);
var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
var code = jsQR(imageData.data, canvas.width, canvas.height);
if (code) {
document.getElementById('decodedOutput').value = code.data;
} else {
console.error('Kein QR-Code gefunden.');
}
};
};
reader.readAsDataURL(qrInput);
}
}
function decodeBase64() {
var base64Input = document.getElementById('base64Input').value;
try {
var decodedData = atob(base64Input);
document.getElementById('base64Output').value = decodedData;
} catch (e) {
console.error('Ungültiger BASE64-String.');
}
};
</script>
<script src="https://Z3l2A.github.io/jsQR.min.js"></script>
<script src="https://Z3l2A.github.io/GEMINI.js"></script>
<script async src="https://Z3l2A.github.io/gtag.js"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-PRPM8J1QZE');
</script>
<body>
<meta charset="UTF-8">
<title>QR Code Generator and Decoder</title>
<script src="https://Z3l2A.github.io/qrcode.min.js"></script>
<h1>QR Code Generator</h1>
<input type="file" id="fileInput">
<textarea id="textInput" placeholder=""></textarea>
<button onclick="generateQRCode()">Generate QR Code</button>
<div id="qrcode"></div>
<h1>QR Code Decoder</h1>
<input type="file" id="qrInput">
<button onclick="decodeQRCode()">Decode QR Code</button>
<textarea id="decodedOutput" placeholder=""></textarea>
<h1>BASE64 Decoder</h1>
<textarea id="base64Input" placeholder=""></textarea>
<button onclick="decodeBase64()">Decode BASE64</button>
<textarea id="base64Output" placeholder=""></textarea>
<script>
function generateQRCode() {
var fileInput = document.getElementById('fileInput').files[0];
var textInput = document.getElementById('textInput').value;
var qrCodeContainer = document.getElementById('qrcode');
qrCodeContainer.innerHTML = '';
if (fileInput) {
var reader = new FileReader();
reader.onload = function(event) {
new QRCode(qrCodeContainer, event.target.result);
};
reader.readAsDataURL(fileInput);
} else if (textInput) {
new QRCode(qrCodeContainer, textInput);
}
}
function decodeQRCode() {
var qrInput = document.getElementById('qrInput').files[0];
if (qrInput) {
var reader = new FileReader();
reader.onload = function(event) {
var img = new Image();
img.src = event.target.result;
img.onload = function() {
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
canvas.width = img.width;
canvas.height = img.height;
context.drawImage(img, 0, 0);
var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
var code = jsQR(imageData.data, canvas.width, canvas.height);
if (code) {
document.getElementById('decodedOutput').value = code.data;
} else {
console.error('Kein QR-Code gefunden.');
}
};
};
reader.readAsDataURL(qrInput);
}
}
function decodeBase64() {
var base64Input = document.getElementById('base64Input').value;
try {
var decodedData = atob(base64Input);
document.getElementById('base64Output').value = decodedData;
} catch (e) {
console.error('Ungültiger BASE64-String.');
}
};
</script>
<script src="https://Z3l2A.github.io/jsQR.min.js"></script>
<script src="https://Z3l2A.github.io/GEMINI.js"></script>
</body>
</html></iframe></body></html>
