<<<<<<< HEAD
=======
window.addEventListener('DOMContentLoaded',main)

function main() {

}



>>>>>>> be4fac438d7fd4c163941988640ba5c84ec1cc2f
function navigate(pageId) {
    var pages = document.querySelectorAll('.page');
    pages.forEach(page=> page.classList.remove('visible'));

    document.getElementById(pageId).classList.add('visible');
}   /*Byter sida vid knapptryck till vald sida*/





