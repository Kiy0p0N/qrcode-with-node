
//change theme
function changeTheme(){
    let theme = 0;
    $("#coding-cat").click(function(){
        setTimeout(function(){
            if(theme === 0){
                $("body").removeClass("dark-theme").addClass("light-theme");
                
                $("#arrow-left").attr("src", "image/arrow_back-dark.svg");
                $("#arrow-right").attr("src", "image/arrow_forward-dark.svg");


                //change theme svg images
                setTimeout(function(){
                    
                    $("#github").attr("src", "image/github-dark.svg");
                    $("#instagram").attr("src", "image/instagram-dark.svg");
                    $("#linkedin").attr("src", "image/linkedin-dark.svg");
                    $("#whatsapp").attr("src", "image/whatsapp-dark.svg");
                }, 100);

                theme++;

            } else {
                $("body").removeClass("light-theme").addClass("dark-theme");

                
                $("#arrow-left").attr("src", "image/arrow_back-light.svg");
                $("#arrow-right").attr("src", "image/arrow_forward-light.svg");

                //change theme svg images
                setTimeout(function(){
                    
                    $("#github").attr("src", "image/github-light.svg");
                    $("#instagram").attr("src", "image/instagram-light.svg");
                    $("#linkedin").attr("src", "image/linkedin-light.svg");
                    $("#whatsapp").attr("src", "image/whatsapp-light.svg");
                },100);

                theme = 0;
            }

        }, 100);
    })
}

changeTheme();

//change photo
function changePhoto(){
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
}
changePhoto();