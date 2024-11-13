window.addEventListener('DOMContentLoaded',main)

function main(){
    startingPage();
}

const backgrounds = [
    "url('/assets/background.webp')",
    "url('/assets/Djungel.jpg')",
    "url('/assets/Mountain.webp')",
    "url('/assets/beach.webp')",
    "url('/assets/Cave.webp')"
  ];

function changeBackground(index) {
    const bodyElement = document.body;
    bodyElement.style.backgroundImage = backgrounds[index];
}
  


function startingPage() {
    changeBackground(0);

    const homePage = document.getElementById("welcomePage");
    const welcomeMessage = document.createElement("h3");
    welcomeMessage.textContent = "Stranded and seeking fortune, you find yourself on the shores of a mysterious island after your ship broke down in uncharted waters. Legends speak of a hidden treasure buried deep within the island - anancient relic of unimaginable power, guarded by the island’s secrets and challenges. Will you uncover the truth and claim the treasure, or will the island’s mysteries claim you? Your adventure begins now."
    const laraPage = document.querySelector(".femalePage");
    const knappLara = document.createElement("button");
    knappLara.textContent = "Choose Lara";

    const indyPage = document.querySelector(".malePage");
    const knappIndy = document.createElement("button");
    knappIndy.textContent = "Choose Indy";
    
    laraPage.appendChild(knappLara);
    indyPage.appendChild(knappIndy);
    homePage.appendChild(welcomeMessage);

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
    laraPic.src = "/assets/Female.png";
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
    indianaPic.src = "/assets/Male.png";
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
    welcomeMessage.textContent ="You are getting cold by the strong winds up here! Do you wish to seek shelter for the night or continue your journey?"; //Nytt välkomstmeddelande


    const button1 = document.createElement("button");
    button1.textContent = "Seek shelter";

    const button2 = document.createElement("button");
    button2.textContent = "Continue journey";

    buttonPage.append(button1, button2);

    button1.onclick = loadShelterPage;
    button2.onclick = loadSummitPage;
}

function loadJunglePage(){
    cleanSheet();
    changeBackground(1);
    const headline = document.getElementById("headLine");
    headline.textContent = "";
    headline.textContent = "Deep in the Jungle"; //Tar bort innehållet av ett element och ersätter
    const welcomeMessage = document.getElementById("welcomePage");
    welcomeMessage.textContent ="";
    welcomeMessage.textContent ="Watch out for spiders! After fighting off some spiders you see a trail of footstep on your right and to your left you can see a cave entrance. What path will you choose?"; //Nytt välkomstmeddelande

    const button1 = document.createElement("button");
    button1.textContent = "Follow the footsteps";

    const button2 = document.createElement("button");
    button2.textContent = "Explore the cave";

    buttonPage.append(button1, button2);

    button1.onclick = loadFootStepPage;
    button2.onclick = loadCavePage;
}


function loadCavePage(){
    cleanSheet();
    changeBackground(4);

    const headline = document.getElementById("headLine");
    headline.textContent = "";
    headline.textContent = "Inside the cave"; //Tar bort innehållet av ett element och ersätter
    const welcomeMessage = document.getElementById("welcomePage");
    welcomeMessage.textContent ="";
    welcomeMessage.textContent ="The cave seems dark and abandon, do you wish to go deeper or turn back?"; //Nytt välkomstmeddelande

    const picture = document.createElement("img");
    picture.src = "/assets/Cave.webp";
    picture.style.height = "20 rem";

    characterPage.append(picture);


    const button1 = document.createElement("button");
    button1.textContent = "Go deeper";

    const button2 = document.createElement("button");
    button2.textContent = "Turn back";

    buttonPage.append(button1, button2);

    button1.onclick = loadWinScene;
    button2.onclick = loadJunglePage;

}


function loadFootStepPage(){
    cleanSheet();
    changeBackground();

    const headline = document.getElementById("headLine");
    headline.textContent = "";
    headline.textContent = "House"; //Tar bort innehållet av ett element och ersätter
    const welcomeMessage = document.getElementById("welcomePage");
    welcomeMessage.textContent ="";
    welcomeMessage.textContent ="You followed the footsteps for 2 miles, now you stop and see smoke emitting from a distance. Could it be more survivors?"; //Nytt välkomstmeddelande

    const button1 = document.createElement("button");
    button1.textContent = "Follow the smoke";

    const button2 = document.createElement("button");
    button2.textContent = "Turn back";

    buttonPage.append(button1, button2);

    button1.onclick = loadEndScene;
    button2.onclick = loadJunglePage;
}

function loadEndScene(){
    cleanSheet();
    changeBackground();

    const headline = document.getElementById("headLine");
    headline.textContent = "";
    headline.textContent = "With the tribe"; //Tar bort innehållet av ett element och ersätter
    const welcomeMessage = document.getElementById("welcomePage");
    welcomeMessage.textContent ="";
    welcomeMessage.textContent ="Unfortunately for you, this is as far as outsiders come. On this Island there is dangerous tribe who doesnt take prisoners. You are now their dinner"; //Nytt välkomstmeddelande
}

function loadWinScene(){
    cleanSheet();
    changeBackground();

    const headline = document.getElementById("headLine");
    headline.textContent = "";
    headline.textContent = "With the tribe"; //Tar bort innehållet av ett element och ersätter
    const welcomeMessage = document.getElementById("welcomePage");
    welcomeMessage.textContent ="";
    welcomeMessage.textContent ="Unfortunately for you, this is as far as outsiders come. On this Island there is dangerous tribe who doesnt take prisoners. You are now their dinner";
}

function loadShelterPage(){
    cleanSheet();
    changeBackground();

    const headline = document.getElementById("headLine");
    headline.textContent = "";
    headline.textContent = "Under the tree"; //Tar bort innehållet av ett element och ersätter
    const welcomeMessage = document.getElementById("welcomePage");
    welcomeMessage.textContent ="";
    welcomeMessage.textContent ="Nicely done! You've managed to find shelter from the nights cold winds. Maybe you should get some rest and continue your adventure in the morning.";

    const button1 = document.createElement("button");
    button1.textContent = "Have a goodnight sleep";

    const button2 = document.createElement("button");
    button2.textContent = "Get going";

    buttonPage.append(button1, button2);


}

function loadSummitPage(){
    cleanSheet();
    changeBackground();

    const headline = document.getElementById("headLine");
    headline.textContent = "";
    headline.textContent = "The mountain top"; //Tar bort innehållet av ett element och ersätter
    const welcomeMessage = document.getElementById("welcomePage");
    welcomeMessage.textContent ="";
    welcomeMessage.textContent ="Good job! You have made the summit and now the Island is at your feet! However there isnt that much to do here but to enjoy the view. You do however notice a path which leads down to a cave. On the other side of the mountain it appears to be an even quicker way down, looks more dangerous tho...";


}











