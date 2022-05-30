/*
    The topbar icon animation
*/
function iconAnimation(operation){
    var icon_container = document.getElementById("home_icon_container");
    var contact_list = document.getElementById("contact_list");
    if(operation == "add"){
        move(icon_container, "top", -50, 15, function(){
            move(contact_list, "left", -50, 30, function(){});
        });
    }else{
        move(contact_list, "left", -400, 30, function(){
        move(icon_container, "top", 0, 15, function(){});
        });
    }
}

function aboutHeaderAnimation(operation){
    var home_intro = document.getElementById("about_short_intro");
    var about_intro = document.getElementById("about_me_container");

    if(operation == "add"){
        fadeOut(home_intro, 0.5);
        fadeIn(about_intro, 0.5);
    }else{
        fadeOut(about_intro, 0.5);
        fadeIn(home_intro, 0.5);
    }
}


// function aboutContentCompress(operation, obj){
//     var content = document.getElementById("about_content_container");
//     if(operation == "add"){
//         removeClass(content, "content_compress");
//     }else{
//         addClass(content, "content_compress");
//     }
// }


var go_info = document.getElementById("go_info");
var go_intro = document.getElementById("go_intro");
var intro_content = document.getElementById("about_intro_container");
var info_content = document.getElementById("about_info_container");
var bar = document.getElementById("about_intro_bar");
go_info.addEventListener("click", function(){
    var page = document.getElementById("about_header_container");
    fadeOut(intro_content, 0.05);
    bar.style.backgroundImage = "linear-gradient(" + 270 + "deg, #c2c572, transparent);";
    move(intro_content, "left", 225, 20, function(){
        addClass(page, "cur_info");
        fadeIn(info_content, 0.05);
        move(info_content, "left", 0, 20, function(){})
    });
}, true);
go_intro.addEventListener("click", function(){
    var page = document.getElementById("about_header_container");
    fadeOut(info_content, 0.05);
    bar.style.backgroundImage = "linear-gradient(" + 90 + "deg, #c2c572, transparent);";
    move(info_content, "left", -225, 20, function(){
        removeClass(page, "cur_info");
        fadeIn(intro_content, 0.05);
        move(intro_content, "left", 0, 20, function(){})
    });
}, true);

// function gradientRotation(obj, deg, speed){
//     target = (deg > 180) ? deg - 180 : deg + 180;
//     function degreeAdd(){
//         deg = (deg > 360) ? deg - 360 : deg;
//         if(deg < target){
//             deg = deg + 1;
//             obj.style.backgroundImage = "linear-gradient(" + deg + "deg, #c2c572, transparent);";
//         }else{
//             clearInterval(degreeCounter);
//         }
//     }
//     var degreeCounter = setInterval(degreeAdd, speed);

javascript:;

// }

