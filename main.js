window.addEventListener('DOMContentLoaded',main)

function main() {

}



function navigate(pageId) {
    var pages = document.querySelectorAll('.page');
    pages.forEach(page=> page.classList.remove('visible'));

    document.getElementById(pageId).classList.add('visible');
}   /*Byter sida vid knapptryck till vald sida*/





