let currentImageIndex = 0;  
const images = [  
    'url(img/header1.jpg)',  
    'url(img/header2.jpg)',  
    'url(img/header3.jpg)' // 替换为你的图片URL  
];  

function changeBackground() {  
    // 更新当前图片索引  
    currentImageIndex = (currentImageIndex + 1) % images.length;  
    // 设置新的背景图  
    // setTimeout = (()=>{
    //     document.getElementById('searchbar').style.backgroundImage = images[currentImageIndex]; 
    // },1000);
    document.getElementById('searchbar').style.backgroundImage = images[currentImageIndex];  
}  
  
// 设置幻灯片放映的时间间隔，例如每3秒更换一次图片  
setInterval(changeBackground, 2000);

