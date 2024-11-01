function navigate(pageId) {
    var pages = document.querySelectorAll('.page');
    pages.forEach(page=> page.classList.remove('visible'));

    document.getElementById(pageId).classList.add('visible');
}