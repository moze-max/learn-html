let currentImageIndex = 0;  
const images = [  
    'url(../img/header1.jpg)',  
    'url(../img/header2.jpg)',  
    'url(../img/header3.jpg)' // 替换为你的图片URL  
];  

function changeBackgroundforpages() {  
    // 更新当前图片索引  
    currentImageIndex = (currentImageIndex + 1) % images.length;  
    // 设置新的背景图  
    document.getElementById('begin').style.display = images[currentImageIndex];  
}  

setInterval(changeBackgroundforpages, 100);