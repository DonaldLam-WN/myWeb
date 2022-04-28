/*
    Profession Page Nav Effect
*/
profession.addEventListener("click", function(){
    goToProfession();
}, true);

var professionLink = document.getElementsByClassName("professionLink");
for(var i = 0; i < professionLink.length; i++){
    professionLink[i].addEventListener("click", function(){
        goToProfession();
    }, true);
}