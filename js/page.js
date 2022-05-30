const page = document.getElementById("page_container");
monitorSwitch("about");
monitorSwitch("home");
monitorSwitch("academic");
monitorSwitch("profession");

function monitorSwitch(target){
    var monitors = document.getElementsByClassName("go_to_" + target);
    for(var i = 0; i < monitors.length; i++){
        monitors[i].addEventListener("click", function(){
            switchPage(target);
        }, true);
    }
}

function swicthPageTags(target){
    replaceClass(page, page.className.trim(), "cur_" + target);
}

function switchPage(target){
    goToTop(50);
    swicthPageTags(target);
    switch(target){
        case "home":
            homePage("add", target);
            break;
        case "about":
            aboutPage("add", target);
            break;
        case "academic":
            academicPage("add", target);
            break;
        case "profession":
            professionPage("add", target);
            break;
        default:
    }
}

function homePage(operation, target){
    if(operation == "add"){
        aboutPage("remove", target);
        academicPage("remove", target);
        professionPage("remove", target);

        homeHeaderAnimation(operation);
    }else{
        homeHeaderAnimation(operation, function(){});
    }   
}

function aboutPage(operation, target){
    if(operation == "add"){
        if(document.documentElement.scrollTop > 750){
            document.documentElement.scrollTop = 750;
        }
        homePage("remove", target);
        academicPage("remove", target);
        professionPage("remove", target);
        var area = document.getElementById("nav_drop_area");
        var obj = document.getElementById("about_nav_list");
        mouseDragAndDrop(area, obj);
    }
    
    iconAnimation(operation, target);
    aboutHeaderAnimation(operation, target);
}

function academicPage(operation, target){
    if(operation == "add"){
        homePage("remove", target);
        aboutPage("remove", target);
        professionPage("remove", target);
    }

}

function professionPage(operation, target){
    if(operation == "add"){
        homePage("remove", target);
        aboutPage("remove", target);
        professionPage("remove", target);
    }
}

