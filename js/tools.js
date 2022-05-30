// function addScript(url){
// 	document.write("<script language=javascript src='" + url + "'></script>");
// 	document.write("<script language=javascript src='./main-page.js'></script>");
// 	document.write("<script language=javascript src='./home-page.js'></script>");
// 	document.write("<script language=javascript src='./about-page.js'></script>");
// 	document.write("<script language=javascript src='./profession-page.js'></script>");
// 	document.write("<script language=javascript src='./self-function.js'></script>");
// }

function test(){
    alert("helloTest");
};

function move(obj, attr, target, speed, callback) {

    // 關閉上一個定時器
    clearInterval(obj.timer);

    // 獲取obj目前的位置
    var current = parseInt(getComputedStyle(obj, null)[attr]);

    // 判斷速度的正負值(方向)
    if (current > target) {
        speed = -speed;
    }

    // 開啟定時器用來執行動畫效果
    // 向執行動畫的對象中添加timer屬性用來讓他保存自己定時器的標識
    obj.timer = setInterval(function () {

        // 獲取obj原來的attr值
        var oldValue = parseInt(getComputedStyle(obj, null)[attr]);

        // 在舊值的基礎上增加
        var newValue = oldValue + speed;

        // 向左移動時，需要判斷 newValue 是否小於target
        // 向右移動時，需要判斷 newValue 是否大於target
        if (speed < 0 && newValue < target || speed > 0 && newValue > target) {
            newValue = target;
        }

        // 將新值設置為obj
        obj.style[attr] = newValue + "px";

        // 當元素移動到target時，使其停止動畫
        if (newValue == target) {
            clearInterval(obj.timer);
            // 動畫執行完畢，調用回調函數
            callback && callback();
        }

    }, 30);

};

function addClass(obj, cn) {

    // 檢查obj裏面是否含有cn
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn;
    }

};

function hasClass(obj, cn) {

    // 判斷obj中有沒有cn的class
    // 創建一個正則表達式
    // var reg = /\bb2\b/;
    var reg = new RegExp("\\b" + cn + "\\b");
    return reg.test(obj.className);

};

function removeClass(obj, cn) {

    // 創建正則表達式
    var reg = new RegExp("\\b" + cn + "\\b");
    // 刪除class
    obj.className = obj.className.replace(reg, "");

};

function swapClass(obj, cn1, cn2){
    removeClass(obj, cn1);
    addClass(obj, cn2);
}

function toggleClass(obj, cn) {

    if (hasClass(obj, cn)) {
        removeClass(obj, cn);
    } else {
        addClass(obj, cn);
    }

};

function replaceClass(obj, rep, add){
    removeClass(obj, rep);
    addClass(obj, add);
}

function removeClasses(obj, ...cnArr){
    for(var i = 0; i < cnArr.length; i++){
        removeClass(obj, cnArr[i]);
    }
}

function goToTop(speed){
    var timer = setInterval(function(){
        var scrollTop = document.documentElement.scrollTop;

        if(scrollTop == 0){
            clearInterval(timer);
        }

        document.documentElement.scrollTop = scrollTop - speed;

    },30)
};

function goToHeight(speed, height){
    var timer = setInterval(function(){
        var scrollTop = document.documentElement.scrollTop;
        if(scrollTop == height){
            clearInterval(timer);
        }
        document.documentElement.scrollTop = scrollTop - speed;
    },30)
}