//press cat
$("#coding-cat").click(function(){
	console.log("Clicou no gato!");
	littleCat();
	backgroundChange();
    mediaColor();

})


//change photo

let photo = 1;
$("#arrow-left").click(function(){

	if(photo >= 2){
        photo--;
    } else{
        photo = 8;
    }
    let actualPhotoLeft = "image/share-" + photo + ".jpg";
    $("#photo img").attr("src", actualPhotoLeft);
});
    
$("#arrow-right").click(function(){

    if(photo <= 7){
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
function backgroundChange(){
    
    var actualBckg = "light-theme";

    if($("body").attr("class")==="light-theme"){
        $("body").removeClass("light-theme");
        $("header").removeClass("light-theme");
        actualBckg = "dark-theme";
    } else{
        $("body").removeClass("dark-theme");
        $("header").removeClass("dark-theme");
        actualBckg = "light-theme";
    }

    $("body").addClass(actualBckg);
    $("header").addClass(actualBckg);
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







// special message
$("#name").click(function(){
    var question = prompt("What is the password? ");
    var password = "iloveu";
    if(question === password){
        alert("Sorry, but my heart already has an owner!");
    } else{
        alert("Not.");
    }
})