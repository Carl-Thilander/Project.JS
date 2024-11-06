window.addEventListener('DOMContentLoaded',main)

function main(){
    button1.onclick = goToNext1;
    button2.onclick = goToNext2;
}

const femalePic = getElementById("picture1");
const malePic = getElementById("picture2");

function goToNext1(){
    const headline = document.getElementById("headLine");
    headline.textContent = "";
    headline.textContent = "You have choosen Lara Soft!"; //Tar bort innehållet av ett element och ersätter
    
    const welcomeMessage = document.getElementById("welcomePage");
    welcomeMessage.textContent ="";
    welcomeMessage.textContent ="Welcome Lara, I hope you are ready for an adventure!";

    femalePic

    
    
    cleanSheet();
}

function goToNext2(){
    const headline = document.getElementById("headLine");
    headline.textContent = "";
    headline.textContent = "You have choosen Indiana Stones!"; //Tar bort innehållet av ett element och ersätter
    cleanSheet();
    const welcomeMessage = document.getElementById("welcomePage");
    welcomeMessage.textContent ="";
    welcomeMessage.textContent ="Welcome Indiana, I hope you are ready for an adventure!";
}

function cleanSheet(){
    const pictures = document.querySelectorAll("img");
    pictures.forEach(Image => Image.remove());
    const removePara = document.getElementById("characterPage");
    removePara.textContent ="";
    const characterPage = document.getElementById("characterPage");
    const buttons = characterPage.querySelectorAll(".chooseCharacter");
    buttons.forEach(button => characterPage.appendChild(button));
}









