(function(){
    let htmlTag = document.querySelector('html');
    htmlTag.classList.remove('has--adblock');
    let blockDiv = document.querySelector('div.bck-adblock.is--active');
    blockDiv.classList.remove('is--active');
})();