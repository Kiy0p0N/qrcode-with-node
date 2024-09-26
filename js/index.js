$(document).ready(function(){
    $(".cat img").click(function(){ 
        const cat_sound = new Audio("assets/sound/cat-sound.mp3");
        cat_sound.play();
    })
})