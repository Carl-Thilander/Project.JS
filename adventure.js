window.addEventListener('DOMContentLoaded', main)

function main(){
    loadFirstPage();
}

function loadFirstPage(){
    content.innerHTML ="";

    // const rubrik = document.createElement("h2");
    // rubrik.textContent = "Welcome to the Island!";

    const headline = document.getElementById("headLine");
    headline = document.createElement("h2");
    headline.textContent = "Welcome to the island!"

   const wallpaper = document.createElement("img");
   wallpaper.src = "assets/background.webp";

    const para = document.createElement("P");
    para.textContent = "Stranded and seeking fortune, you find yourself on the shores of a mysterious island after your ship broke down in uncharted waters. Legends speak of a hidden treasure buried deep within the island—an ancient relic of unimaginable power, guarded by the island’s secrets and challenges."
    
    const button = document.createElement("button");
    button.textContent = "Börja!";
    button.onclick = loadKitchenScene;

    
    content.append(rubrik, para, button);
    background.append(wallpaper);
    headLine.appendChild(headline);
} 

function loadKitchenScene() {
    content.innerHTML = "";

    const button1 = document.createElement("button");
    button1.textContent = "Click here to proceed";

    const button2 = document.createElement("button");
    button2.textContent = "Click here to start over";

    const wallpaper = document.createElement("img");
    wallpaper.src = "assets/4k.jpg";
    
  
    const image1 = document.createElement("img");
    image1.src = "assets/Male.png";

    const image2 = document.createElement("img");
    image2.src = "assets/Female.png";

    
    content.append(image1);
    content.append(button1, button2);
    content.append(image2);
    background.append(wallpaper);
    
    
   
  }