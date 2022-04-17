let dots = document.querySelectorAll(".dot");
let slides = 0;
let maxSlides = 3;

for (let i=0; i<=dots.length-1; i++){
  dots[i].onclick = () => {
    let slide = document.querySelector(".slide");
    
    switch(i){
      case 0:
        slide.style.transform = "translateX(0)";
        dots[0].style.background="white";
        dots[1].style.background="rgba(255, 255, 255, 0.5)";
        dots[2].style.background="rgba(255, 255, 255, 0.5)";
        dots[3].style.background="rgba(255, 255, 255, 0.5)";
        break;
        
      case 1:
        slide.style.transform = "translateX(-100%)";
        dots[1].style.background = "white";
        dots[0].style.background = "rgba(255, 255, 255, 0.5)";
        dots[2].style.background = "rgba(255, 255, 255, 0.5)";
        dots[3].style.background = "rgba(255, 255, 255, 0.5)";
        break;
        
      case 2:
        slide.style.transform = "translateX(-200%)";
        dots[2].style.background = "white";
        dots[1].style.background = "rgba(255, 255, 255, 0.5)";
        dots[0].style.background = "rgba(255, 255, 255, 0.5)";
        dots[3].style.background = "rgba(255, 255, 255, 0.5)";
        break;
        
      case 3:
        slide.style.transform = "translateX(-300%)";
        dots[3].style.background = "white";
        dots[1].style.background = "rgba(255, 255, 255, 0.5)";
        dots[2].style.background = "rgba(255, 255, 255, 0.5)";
        dots[0].style.background = "rgba(255, 255, 255, 0.5)";
        break;
  
    }

    slides++;
  }
}

setInterval(() => {
  // slides++;
  if (slides >= maxSlides+1){
    slides = 0;
  }
  
  document.querySelectorAll('.dot')[slides].click();
}, 5000);