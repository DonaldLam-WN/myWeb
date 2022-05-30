/*
    Animation - Home background images gradient effect
*/
var img1 = document.getElementById("home_img1");
var img2 = document.getElementById("home_img2");
// The changing images - Apply the gradient effect function
gradientEffect(img1, img2, ...["./img/A01.webp", "./img/A02.webp", "./img/A03.webp", "./img/A04.webp", "./img/A05.webp"]);



/*
    Home Icon hyperlink
*/
var home_hyperlink = document.getElementsByClassName("home_hyperlink");
for(var i = 0; i < home_hyperlink.length; i++){
    home_hyperlink[i].addEventListener("click", function(){
        goToHome();
    }, true);
}



/*
    Topbar effect
*/
var topbar = document.getElementById("topbar_container");
var target = document.getElementById("page_container");
if(hasClass(target, "cur_home")){
    window.addEventListener("scroll", function(){
        if(this.document.documentElement.scrollTop >= 200){
            addClass(topbar, "topbar_disappear");
        }else{
            removeClass(topbar, "topbar_disappear");
        }
        if(this.document.documentElement.scrollTop >= 400){
            addClass(topbar, "topbar_scrolling");
        }else{
            removeClass(topbar, "topbar_scrolling");
        }
    }, true);
}



/*
    Add/ Remove home header
*/
function homeHeaderAnimation(operation, funct){
    var s = document.getElementById("home_header_container");
    var height = (operation == "add") ? 800 : 50;
    move(s, "height", height, 50, function(){
        funct();
    });
}
