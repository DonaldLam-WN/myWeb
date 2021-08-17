// Function: Gradient Effect of changing images
function gradientEffect(obj1, obj2, ...imgArr) {

    // Define the index(represents different images) and val(represents the opacity)
    var index = 0;
    var val = 0;

    // Switch the img1 and img2 continuously and immediately
    setInterval(function () {

        obj1.src = imgArr[index++];

        if (index >= imgArr.length) {
            index = 0;
        }

        obj2.src = imgArr[index];
        obj2.style.opacity = 0;
        val = 0;

    }, 4000)

    // Gradient effect - make the upper background image have a gradient effect every 20ms
    setInterval(function () {
        if (val <= 100) {
            obj2.style.opacity = val / 100;
            val++;
        }
    }, 20);
};




// Go To Home Page
function goToHome() {

    goToTop(50);

    removeAboutMeContents();
    removeProfessionContents();
    addHomePageContents();

};

function addHomePageContents() {

    // Animation of shifting the background img
    move(mainPageHeader, "height", 800, 50, function () {
        // Effect 2.
        // To transform the prevent page
        removeClasses(mainPageContainer, ...["aboutMeWrapper", "professionWrapper", "diaryWrapper"]);
        addClass(mainPageContainer, "homePageWrapper");
    });


    // Animation of shifting the social media div and icon dic
    move(socialMedia, "left", -400, 30, function () {
        move(iconWrapper, "top", 0, 15, function () { })
    });
};

function removeHomePageContents() {
    move(mainPageHeader, "height", 0, 50, function () { });
};






// Go To About Me Page
function goToAboutMe() {

    goToTop(50);

    removeHomePageContents();
    removeProfessionContents();
    addAboutMeContent();

};


function addAboutMeContent() {

    professionHeader.style.height = "0";

    // Animation of shifting the social media div and icon dic
    move(iconWrapper, "top", -100, 15, function () {
        move(socialMedia, "top", 0, 30, function () {
            move(socialMedia, "left", -200, 30, function () { })
        })
    });

    move(avatarContainer, "left", document.documentElement.clientWidth * 0.35, 25, function () {
        aboutMeBtnGo(0);
        avatarContainer.style.left = "";
        // Effect 2.
        // To transform the prevent page
        removeClasses(mainPageContainer, ...["homePageWrapper", "professionWrapper", "diaryWrapper"]);
        addClass(mainPageContainer, "aboutMeWrapper");
    });

    move(aboutMeLink, "right", -800, 40, function () { });
};

function removeAboutMeContents() {
    aboutMeBtnReturn();
    professionHeader.style.height = "";
    move(aboutMeLink, "right", 0, 40, function () { });
    move(avatarContainer, "left", document.documentElement.clientWidth * 0.1, 25, function () {
        avatarContainer.style.left = "";
    });
};







// Go To Profession Page
function goToProfession() {

    aboutMeHeader.style.height = "0";

    goToTop(50);

    // Animation of shifting the background img
    removeHomePageContents();
    removeAboutMeContents();
    addProfessionContents();


};

function addProfessionContents() {


    // Effect 2.
    // To transform the prevent page

    removeClasses(mainPageContainer, ...["homePageWrapper", "aboutMeWrapper", "diaryWrapper"]);
    addClass(mainPageContainer, "professionWrapper");

    // Animation of shifting the social media div and icon dic
    move(socialMedia, "top", -100, 30, function () {
        move(iconWrapper, "top", 0, 15, function () { })
    });
};

function removeProfessionContents(){
    aboutMeHeader.style.height = "";
}; 






// Width Limit Function
function widthLimit(obj) {
    if (document.body.clientWidth <= 1150) {
        obj.style.minWidth = "1150px";
    } else {
        obj.style.minWidth = "";
    }
};