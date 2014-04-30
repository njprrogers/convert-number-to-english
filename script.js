/**
 * Created by nickrogers on 29/04/2014.
 */

window.onload = function () {
    var inputField;

    var callConvert = function (field) {
        var string = convertNumToText.translate(field.target.value);
        var outputField = document.getElementById('number');
        outputField.innerHTML = string;
    };
    inputField = document.getElementById('inputNum');
    inputField.onkeyup = callConvert;
};

