/*
    Home Page Nav Effect
*/
homePage.addEventListener("click", function () {
    goToHome();
}, true);





/*
    Home Page Background Gradient Effect
*/
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
// The changing images - Apply the gradient effect function
gradientEffect(img1, img2, ...["./img/home/A00.webp", "./img/home/A01.webp", "./img/home/A02.webp"
, "./img/home/A03.webp", "./img/home/A04.webp"]);





/*
    Topbar Appear Effect 
*/
var topbarWrapper = document.getElementById("topbarWrapper");
// Detect whenever in the home page
if (hasClass(mainPageContainer, "homePageWrapper")) {
    // Detect the scrolling height
    window.addEventListener("scroll", function(){
        // when scrolling height = 100px
        if (document.documentElement.scrollTop >= 100) {
            // Reduces the height of topbar to 0 (to do the transition effect)
            addClass(topbarWrapper, "homePageTopbarDisappear");
        } else if (document.documentElement.scrollTop < 100) {
            // Increases the height to original height to make sure it display normally on the top of the page
            removeClass(topbarWrapper, "homePageTopbarDisappear");
        }

        // when scrolling height = 400px
        if (document.documentElement.scrollTop >= 400) {
            // The top bar appear with transition
            addClass(topbarWrapper, "homePageTopbarScrolling");
        } else if (document.documentElement.scrollTop < 400) {
            // The top bar disappear
            removeClass(topbarWrapper, "homePageTopbarScrolling");
        }
    }, true);
}
