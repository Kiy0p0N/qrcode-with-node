//press cat
$("#coding-cat").click(function(){
	console.log("Clicou no gato!");
	littleCat();
	changeBackground();
	mediaColor();

	

})


//change photo

let photo = 1;
$("#arrow-left").click(function(){

	if(photo >= 2){
        photo--;
    } else{
        photo = 6;
    }
    let actualPhotoLeft = "image/share-" + photo + ".jpg";
    $("#photo img").attr("src", actualPhotoLeft);
});
    
$("#arrow-right").click(function(){

    if(photo <= 5){
        photo++;
    } else{
        photo = 1;
    }
    let actualPhotoRight = "image/share-" + photo + ".jpg";
    $("#photo img").attr("src", actualPhotoRight);
});



//little cat
function littleCat(){
	var catSound = new Audio("image/cat-sound.mp3");
	catSound.play();

	setTimeout(function(){
		alert("Por favor, não atrapalhe o gatinho enquanto ele programa!");
	}, 1000);
}


// change background color
function changeBackground() {
    var currentTheme = localStorage.getItem('theme');
    console.log("Tema atual:", currentTheme);

    if (currentTheme === 'light-theme') {
        localStorage.setItem('theme', 'dark-theme');
    } else {
        localStorage.setItem('theme', 'light-theme');
    }

    applyTheme();

}

function applyTheme() {
    var currentTheme = localStorage.getItem('theme')  || 'light-theme';
    console.log("Aplicando tema:", currentTheme);
    $("body").attr("class", currentTheme);
	$("header").attr("class", currentTheme);
	$(".btn button").attr("class", currentTheme);
}



// social media icons color
function mediaColor(){
	if($("body").attr("class") === "light-theme"){

		$("#github").attr("src", "image/github-dark.svg");
		$("#instagram").attr("src", "image/instagram-dark.svg");
		$("#linkedin").attr("src", "image/linkedin-dark.svg");
		$("#whatsapp").attr("src", "image/whatsapp-dark.svg");

	} else {

		$("#github").attr("src", "image/github-light.svg");
		$("#instagram").attr("src", "image/instagram-light.svg");
		$("#linkedin").attr("src", "image/linkedin-light.svg");
		$("#whatsapp").attr("src", "image/whatsapp-light.svg");
	}
}