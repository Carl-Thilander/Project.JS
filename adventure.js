window.addEventListener('DOMContentLoaded', main)

function main(){
    loadFirstPage();
}

function loadFirstPage(){
    content.innerHTML ="";
   

    const rubrik = document.createElement("h2");
    rubrik.textContent = "Welcome to the Island!";

   const wallpaper = document.createElement("img");
   wallpaper.src = "assets/background.webp";

    const para = document.createElement("P");
    para.textContent = "Stranded and seeking fortune, you find yourself on the shores of a mysterious island after your ship broke down in uncharted waters. Legends speak of a hidden treasure buried deep within the island—an ancient relic of unimaginable power, guarded by the island’s secrets and challenges."
    
    const button = document.createElement("button");
    button.textContent = "Börja!";
    button.onclick = loadBeachScene;

    
    content.append(rubrik, para, button);
    background.append(wallpaper);
    
} 

function loadBeachScene() {
    content.textContent = "";
    

    const rubrik = document.createElement("h2");
    rubrik.textContent = "You are currently stranded on the beach after a struggling shipwreck offshore, where will your adventure start?";

    const button1 = document.createElement("button");
    button1.textContent = "Go up to the mountains";
    button1.onclick = loadMountainScene;

    const button2 = document.createElement("button");
    button2.textContent = "Discover the jungle";
    button2.onclick = loadJungleScene;

    const wallpaper = document.createElement("img");
    wallpaper.src = "assets/beach.webp";
    const image1 = document.createElement("img");
    image1.src = "assets/Male.png";
    const image2 = document.createElement("img");
    image2.src = "assets/Female.png";

    background.append(wallpaper);
    content.append(rubrik,button1,button2);
    
    
  }

  function loadJungleScene(){
    content.innerHTML = "";
   

    const rubrik = document.createElement("h2");
    rubrik.innerText = "You are now deep in the jungle. You notice some fearsome insects and distant sounds. What do you do?"

    const button1 = document.createElement("button");
    button1.textContent = "Go deeper in the jungle";
    button1.onclick = loadCaveScene;

    const button2 = document.createElement("button");
    button2.textContent = "Run back to the beach";
    button2.onclick = loadBeachScene;

    const wallpaper = document.createElement("img");
    wallpaper.src = "assets/jungle.webp";

    content.append(rubrik, button1, button2);
    background.append(wallpaper);
  }

  function loadMountainScene(){
    content.innerHTML = "";
   

    const rubrik = document.createElement("h2");
    rubrik.innerText = "You are now mid-climb in the mountain. Will you pursue your summit or look for food?"

    const button1 = document.createElement("button");
    button1.textContent = "Pursue summit";
    button1.onclick = loadCaveScene;

    const button2 = document.createElement("button");
    button2.textContent = "Find some grub";
    button2.onclick = loadBeachScene;

    const wallpaper = document.createElement("img");
    wallpaper.src = "assets/jungle.webp";

    content.append(rubrik, button1, button2);
    background.append(wallpaper);
  }

  function loadCaveScene(){
    content.innerHTML = "";
   

    const rubrik = document.createElement("h2");
    rubrik.innerText = "You made it even deeper through the jungle and can now see the glimpse of a cave behind som tall trees! In the other direction you can clearly see some faded footsteps in the mud. What path will you choose?"

    const button1 = document.createElement("button");
    button1.textContent = "Explore cave";
    button1.onclick = loadInsideCaveScene;

    const button2 = document.createElement("button");
    button2.textContent = "Follow the footsteps";
    button2.onclick = loadTrailScene;

    const wallpaper = document.createElement("img");
    wallpaper.src = "assets/jungle.webp";

    content.append(rubrik, button1, button2);
    background.append(wallpaper);
  }

  function loadInsideCaveScene(){

  }

  function loadTrailScene(){

  }