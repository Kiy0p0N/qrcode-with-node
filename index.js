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

        console.log("share-" + share);
    })

    document.querySelector(".button-left").addEventListener("click", function(){

        if(share >= 2){
            share--;
        } else {
            share = 6;
        }
        var photo1 = "images/share-" + share + ".jpg";
        document.querySelector("#picture").setAttribute("src", photo1);

        console.log("share-" + share);
    })

    

}

var i = 1;

changePhoto(i);




//see more

function seeMore (btn){

    document.getElementById("btn").addEventListener("click", function(){
        
        if (btn == 0){

            document.querySelector(".project #desabled").setAttribute("id", "active");

            document.querySelector("#btn").innerHTML = "Ver Menos";

            btn++;
            
        } else {
            document.querySelector(".project #active").setAttribute("id", "desabled");

            document.querySelector("#btn").innerHTML = "Ver Mais";

            btn = 0;

        }


    })
    
}

var btn = 0;

seeMore(btn);