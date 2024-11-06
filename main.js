window.addEventListener('DOMContentLoaded',main)

function main(){
    button1.onclick = goToNext1;
    button2.onclick = goToNext2;
}

const background = document.getElementById(infoPage);
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");

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

    option1.style.display = "block";
    option1.textContent = "Press here to proceed";
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

    option1.style.display = "block";
    option1.textContent = "Press here to proceed";
}

function cleanSheet(){
    const pictures = document.querySelectorAll("img"); //Tar bort bilderna
    pictures.forEach(Image => Image.remove());
    const removePara = document.getElementById("characterPage");
    removePara.textContent =""; //Tar bort beskrivningarna
    
}









