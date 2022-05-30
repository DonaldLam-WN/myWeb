var prog_lang_list = document.getElementById("prog_lang_list");
var prog_lang_element = document.getElementsByClassName("prog_lang_element");
carouselList(prog_lang_list, prog_lang_element, 840, 40);

var frontend_list = document.getElementById("frontend_list");
var frontend_element = document.getElementsByClassName("frontend_element");
carouselList(frontend_list, frontend_element, 840, 40);

function carouselList(target, elements, value, speed){
    var cur_index = 0;
    for(var i = 0; i < elements.length; i++){
        elements[i].index = i;
        elements[i].addEventListener("click", function(){
            swapClass(elements[cur_index], "cur_element", "mouse_pointer")
            cur_index = this.index;
            swapClass(elements[cur_index], "mouse_pointer", "cur_element")
            move(target, "left", -1 * value * cur_index, speed, function(){
            });
        }, true);
    }
}

// btn01.addEventListener("click", function(){
//     removeClass(elements[index], "cur_element");
//     if(index != 0){
//         index--;
//     }
//     addClass(elements[index], "cur_element");
//     move(target, "left", -620 * index, 30, function(){
//     });
// }, true);

// btn02.addEventListener("click", function(){
//     removeClass(elements[index], "cur_element");
//     if(index != elements.length - 1){
//         index++;
//     }
//     addClass(elements[index], "cur_element");
//     move(target, "left", -620 * index, 30, function(){
//     });
// }, true);
