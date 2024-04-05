//change photo

function changePhoto (share){

    
    document.querySelector(".button-right").addEventListener("click", function(){

        if(share <= 5){
            share++;
        } else {
            share = 1;
        }
        var photo = "images/share-" + share + ".jpg";
        document.querySelector("#picture").setAttribute("src", photo);

    })

    document.querySelector(".button-left").addEventListener("click", function(){

        if(share >= 2){
            share--;
        } else {
            share = 6;
        }
        var photo1 = "images/share-" + share + ".jpg";
        document.querySelector("#picture").setAttribute("src", photo1);
    })

}

var i = 1;

changePhoto(i);

