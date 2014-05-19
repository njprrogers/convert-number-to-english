/**
 * Created by nickrogers on 29/04/2014.
 */

window.onload = function () {
    var inputField;

    var callConvert = function () {
        var string = convertNumToText.translate(this.value);
        var outputField = document.getElementById('number');
        outputField.innerHTML = string;
    };
    inputField = document.getElementById('inputNum');
    inputField.onkeyup = callConvert;
};

if (!Array.prototype.forEach)
{
  Array.prototype.forEach = function(fun /*, thisArg */)
  {
    "use strict";

    if (this === void 0 || this === null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function")
      throw new TypeError();

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++)
    {
      if (i in t)
        fun.call(thisArg, t[i], i, t);
    }
  };
}
