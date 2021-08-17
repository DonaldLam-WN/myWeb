/*
    About Me Page Nav Effect
*/
aboutMe.addEventListener("click", function () {
    goToAboutMe();
}, true);


var aboutMeLink = document.getElementsByClassName("aboutMeLink")[0];
aboutMeLink.addEventListener("click", function () {
    goToAboutMe();
}, true)




/*
    About Me Page > Academic Table

    Effect:
        1. Collapse the non-click table
        2. Click the table title, appear the table and collapse the others tables
*/
var resultTitleA = document.getElementsByClassName("resultTitle");
// var tableDir = document.getElementsByClassName("tableDir");
var openDiv = resultTitleA[0].parentElement;
// To detect whenever title be clicked
for (var i = 0; i < resultTitleA.length; i++) {
    resultTitleA.index = i;

    resultTitleA[i].addEventListener("click", function () {

        var parentDiv = this.parentElement;

        toggleMenu(parentDiv);
        if ((parentDiv != openDiv) && !hasClass(openDiv, "collapsed")) {
            toggleMenu(openDiv);
        }
        openDiv = parentDiv;
    }, true);
}

// Function: The effect of displaying and collapsing the tables
function toggleMenu(obj) {
    var beginHeight = obj.offsetHeight;
    toggleClass(obj, "collapsed");
    var endHeight = obj.offsetHeight;
    obj.style.height = beginHeight + "px";

    move(obj, "height", endHeight, 20, function () {
        obj.style.height = "";
    });
};






// aboutMeInfoBtn
var aboutMeInfoBtn = document.getElementsByClassName("aboutMeInfoBtn");
var aboutMeInfoContent = ["info", "graduation", "academicResult"];


for (var i = 0; i < aboutMeInfoBtn.length; i++) {
    aboutMeInfoBtn[i].index = i;
    aboutMeInfoBtn[i].addEventListener("click", function () {
        aboutMeBtnGo(this.index);
    }, true)
}


function aboutMeBtnGo(i) {

    aboutMeBtnReturn();

    move(aboutMeInfoBtn[i], "left", -300, 30, function () {
        move(aboutMeInfoBtn[i], "top", 405, 20, function () {
            addClass(aboutMeInfoWrapper, aboutMeInfoContent[i]);
            removeClass(aboutMeInfoWrapper, "aboutMeInfoCollapsed");
        });
    })

}


function aboutMeBtnReturn() {

    for (var j = 0; j < aboutMeInfoBtn.length; j++) {

        addClass(aboutMeInfoWrapper, "aboutMeInfoCollapsed");
        removeClasses(aboutMeInfoWrapper, ...aboutMeInfoContent);

        switch (j) {
            case 0:
                move(aboutMeInfoBtn[0], "top", 0, 20, function () {
                    move(aboutMeInfoBtn[0], "left", 0, 20, function () {});
                })
                break;
            case 1:
                move(aboutMeInfoBtn[1], "top", 300, 20, function () {
                    move(aboutMeInfoBtn[1], "left", 0, 20, function () {});
                })
                break;
            case 2:
                move(aboutMeInfoBtn[2], "top", 0, 20, function () {
                    move(aboutMeInfoBtn[2], "left", 300, 20, function () {});
                })
        }
    }
};