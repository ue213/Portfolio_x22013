const image01src = "img/image01.png";
const image02src = "img/image02.png";
const image03src = "img/image03.jpg";

 function nextImage(){
  const header=document.getElementById("top");
  const currentImageSrc=header.style.backgroundImage;
  if(currentImageSrc===`url("${image01src}")`){
    header.style.backgroundImage=`url("${image02src}")`;
  }else if(currentImageSrc===`url("${image02src}")`){
    header.style.backgroundImage=`url("${image03src}")`;
  }else{
    header.style.backgroundImage=`url("${image01src}")`;
  }
}
function prevImage(){
  const header=document.getElementById("top");
  const currentImageSrc=header.style.backgroundImage;
  if(currentImageSrc===`url("${image01src}")`){
    header.style.backgroundImage=`url("${image03src}")`;
  }else if(currentImageSrc===`url("${image02src}")`){
    header.style.backgroundImage=`url("${image01src}")`;
  }else{
    header.style.backgroundImage=`url("${image02src}")`;
  }
}

document.getElementById("top").style.backgroundImage=`url("${image01src}")`;
document.getElementById("sc-to-left").addEventListener("click", prevImage);
document.getElementById("sc-to-right").addEventListener("click", nextImage);
setInterval(nextImage, 5000);