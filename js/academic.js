/*
    Academic Page - Academic Records Menu
*/
var title = document.getElementsByClassName("academic_menu_title");
var openned_menu = title[0].parentElement;
for(var i = 0; i < title.length; i++){
    title[i].addEventListener("click", function(){
        target_menu = this.parentElement;
        toggleMenu(target_menu);
        if((openned_menu != target_menu) && !hasClass(openned_menu, "cuhk_collapsed")){
            toggleMenu(openned_menu);
        }
        openned_menu = target_menu;
    }, true);
}

function toggleMenu(obj){
    var begin_height = obj.offsetHeight;
    toggleClass(obj, "cuhk_collapsed");
    var end_height = obj.offsetHeight;
    obj.style.height = begin_height + "px";
    move(obj, "height", end_height, 40, function(){
        obj.style.height = "";
    });
}
    
