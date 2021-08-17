/*
    Topbar Nav Onclick Effect
*/







/*
    Icon Onclick Effect
*/
var iconHyperlinks = document.getElementById("iconHyperlinks");
iconHyperlinks.addEventListener("click", function () {

    goToHome();

}, true)





/*
    Layout Width Limitation
*/
window.addEventListener("resize", function () {
    widthLimit(mainPageHeader);
    widthLimit(topbarWrapper);
    var img1 = document.getElementById("img1");
    widthLimit(img1);
    var img2 = document.getElementById("img2");
    widthLimit(img2);
}, true)






/*

    Display of nav List

*/
if (document.body.clientWidth <= 1150) {
    addClass(navList, "navDisappear");
} else {
    removeClass(navList, "navDisappear");
}
window.addEventListener("resize", function () {
    if (document.body.clientWidth <= 1150) {
        addClass(navList, "navDisappear");
    } else {
        removeClass(navList, "navDisappear");
    }
}, true)






