$(document).ready(function(){
    $(".cat img").click(function(){ 
        const catSound = new Audio("assets/sound/cat-sound.mp3");
        catSound.play();
    })
})