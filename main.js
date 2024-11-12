window.addEventListener('DOMContentLoaded',main)

function main(){
    startingPage();
}

const backgrounds = [
    "url('assets/background.webp')",
    "url('assets/Djungel.jpg')",
    "url('assets/Mountain.webp')",
    "url('assets/beach.webp')",
  ];

function changeBackground(index) {
    const bodyElement = document.body;

    bodyElement.style.backgroundImage = backgrounds[index];
}
  


function startingPage() {
    changeBackground(0)
    const laraPage = document.querySelector(".femalePage");
    const knappLara = document.createElement("button");
    knappLara.textContent = "Choose Lara";

    const indyPage = document.querySelector(".malePage");
    const knappIndy = document.createElement("button");
    knappIndy.textContent = "Choose Indy";
    
    laraPage.appendChild(knappLara);
    indyPage.appendChild(knappIndy);

    knappLara.onclick = goToNext1;
    knappIndy.onclick = goToNext2;

}

function goToNext1(){
    cleanSheet();
    const headline = document.getElementById("headLine");
    headline.textContent = "";
    headline.textContent = "You have choosen Lara Soft!"; //Tar bort innehållet av ett element och ersätter
    
    const welcomeMessage = document.getElementById("welcomePage");
    welcomeMessage.textContent ="";
    welcomeMessage.textContent ="Welcome Lara, I hope you are ready for an adventure!"; //Nytt välkomstmeddelande
    const laraPic = document.createElement("img");
    laraPic.src = "assets/Female.png";
    laraPic.style.height = "20rem";

    const contentDiv = document.getElementById("infoPage");
    contentDiv.appendChild(laraPic);

    const knapp4 = document.createElement("button");
    knapp4.innerText = "Proceed";
    const buttonPage = document.querySelector(".buttonClass");
    buttonPage.appendChild(knapp4);
    knapp4.onclick = loadFirstPage;

   
}

function goToNext2(){
    cleanSheet();
    const headline = document.getElementById("headLine");
    headline.textContent = "";
    headline.textContent = "You have choosen Indiana Stones!"; //Tar bort innehållet av ett element och ersätter
    const welcomeMessage = document.getElementById("welcomePage");
    welcomeMessage.textContent ="";
    welcomeMessage.textContent ="Welcome Indiana, I hope you are ready for an adventure!"; //Nytt välkomstmeddelande
    const indianaPic = document.createElement("img");
    indianaPic.src = "assets/Male.png";
    indianaPic.style.height = "20rem";

    const contentDiv = document.getElementById("infoPage");
    contentDiv.appendChild(indianaPic);

   

    const knapp4 = document.createElement("button");
    knapp4.innerText = "Proceed";
    const buttonPage = document.querySelector(".buttonClass");
    buttonPage.appendChild(knapp4);

    knapp4.onclick = loadFirstPage;
    

}

function cleanSheet(){
    const pictures = document.querySelectorAll("img"); //Tar bort bilderna
    pictures.forEach(Image => Image.remove());
    const removePara = document.getElementById("characterPage");
    removePara.textContent =""; //Tar bort beskrivningarna
    buttonPage.textContent = ""; //Tar bort knapparna
}

function loadFirstPage(){
    cleanSheet();
    changeBackground(3);
    

    const headline = document.getElementById("headLine");
    headline.textContent = "";
    headline.textContent = "You are currently by the beach"; //Tar bort innehållet av ett element och ersätter
    const welcomeMessage = document.getElementById("welcomePage");
    welcomeMessage.textContent ="";
    welcomeMessage.textContent ="There are more than one way to find the island treasure. What path will you choose?"; //Nytt välkomstmeddelande
   
    



    const space = document.getElementById("buttonPage");
    const knapp1 = document.createElement("button");
    knapp1.textContent = "Go up to the mountains";
    const knapp2 = document.createElement("button");
    knapp2.textContent = "Explore the jungle";

    space.appendChild(knapp1);
    space.appendChild(knapp2);

    knapp1.onclick = loadMountainPage;
    knapp2.onclick = loadJunglePage;
}

function loadMountainPage(){
    cleanSheet();
    changeBackground(2);
    const headline = document.getElementById("headLine");
    headline.textContent = "";
    headline.textContent = "Up in the Mountains"; //Tar bort innehållet av ett element och ersätter
    const welcomeMessage = document.getElementById("welcomePage");
    welcomeMessage.textContent ="";
    welcomeMessage.textContent ="You are getting cold by the strong winds up here!"; //Nytt välkomstmeddelande


    const button1 = document.createElement("button");
    button1.textContent = "Go Left";

    const button2 = document.createElement("button");
    button2.textContent = "Go Right";

    buttonPage.append(button1, button2);
}

function loadJunglePage(){
    cleanSheet();
    changeBackground(1);
    const headline = document.getElementById("headLine");
    headline.textContent = "";
    headline.textContent = "Deep in the Jungle"; //Tar bort innehållet av ett element och ersätter
    const welcomeMessage = document.getElementById("welcomePage");
    welcomeMessage.textContent ="";
    welcomeMessage.textContent ="Watch out for spiders!"; //Nytt välkomstmeddelande

    

    

    const button1 = document.createElement("button");
    button1.textContent = "Go Left";

    const button2 = document.createElement("button");
    button2.textContent = "Go Right";

    buttonPage.append(button1, button2);
}











