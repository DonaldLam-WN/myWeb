// Function: Gradient Effect of changing images
function gradientEffect(img1, img2, ...imgArr) {
    var index = 0;          // images index
    var opacity_val = 0;    // images opacity

    // Switch images continuously and immediately
    setInterval( function(){
        img1.src = imgArr[index++];
        if(index >= imgArr.length)
            index = 0;
            img2.src = imgArr[index];
            img2.style.opacity = 0;
        opacity_val = 0;
    }, 4000);

    /*
        Gradient effect
            reduce the opacity of img2 every 20ms to produce a gradient effect
    */
    setInterval(function(){
        if(opacity_val <= 100){
            img2.style.opacity = opacity_val / 100;
            opacity_val++;
        }
    }, 20);
};

// Function: Go to home page
function goToHome(){
    goToTop(50);
}

// Function - Fade out and fade in
//fadeOut
function fadeOut(obj, time){
    var opacity_val = obj.style.opacity || 1;
    function opacityOff(){
        if(opacity_val > 0){
            opacity_val = (opacity_val - 0.01).toFixed(2);
            obj.style.opacity = opacity_val;
        }else{
            clearInterval(opacityt)
        }
    }
    var opacityt = setInterval(opacityOff, time);
}

//fadeIn
function fadeIn(obj, speed){
    var opacity_val = obj.style.opacity || 0;
    speed = (speed / 100) || 10;
    function opacityAdd(){
        if(opacity_val < 1){
            opacity_val = (parseFloat(opacity_val) + 0.01).toFixed(2);
            obj.style.opacity = opacity_val;
        }else{
            clearInterval(opacityt);
        }
    }
    var opacityt = setInterval(opacityAdd, speed);
}

// Drag'n'Drop
function mouseDragAndDrop(area, obj){
    obj.onmousedown = function(event){
        var gapX = event.pageX - obj.offsetLeft;
        var gapY = event.pageY - obj.offsetTop;
        
        document.onmousemove = function(event){
            var left = event.pageX - gapX;
            var top = event.pageY - gapY;
            obj.style.left = left + "px";
            obj.style.top = top + "px";
        };

        document.onmouseup = function(){
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
};