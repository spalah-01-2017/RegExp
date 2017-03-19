/*
 #### (1) ⭐ Напишите функцию htmlStrip, которая удаляет HTML тэги в строке. При этом в тэге могут быть атрибуты.
 ```javascript
 htmlStrip('<div> hi </div>'); // ' hi '
 htmlStrip('<div class="message">hello word</div>'); // 'hello word'
 ```
 */

//checks if a string contains html tags without attributes
var str = '<div> hi </div>';
function htmlStrip(str) {
    var reg = /\<\/?\w*\>/g;
    text = str.replace(reg, '');
    return text;
};
htmlStrip(str);