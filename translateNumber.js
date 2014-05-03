/**
 * Created by nickrogers on 30/04/2014.
 */
var convertNumToText = (function () {
    var _self = {},
        numberTranslation = {
            "oneToTwenty": ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
            "tenToHundred": ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
            "numCategory": ["", "", "thousand", "million", "billion", "trillion", "gazillion"]
        };
    /**
     * Get the text version of a passed (up to) three digit number
     * '12' would return 'twelve', '100' would return 'one hundred'
     * @param num - (up to) three digit number
     * @returns {string} - text version of the passed number
     */
    var getText = function (num) {
        var numArray = num.split('').reverse();
        var single = numArray[0];
        var tens = numArray[1];
        var hundreds = numArray[2];
        var textString = "";

        if (hundreds === 0 && tens === 0 && single === 0) {
            // nothing to report
            return "";
        }
        if (hundreds) {
            if (getOneToTwenty(hundreds)) {
                textString = getOneToTwenty(hundreds) + ' hundred';
            }
        }
        if (tens && single) {
            if (tens === '1') {
                // we are dealing with a number between 10 and twenty
                textString += ' ' + getOneToTwenty(tens + single);
            } else {
                if (tens !== '0') {
                    textString += ' ' + getTens(tens);
                }
                if (single !== '0') {
                    textString += ' ' + getOneToTwenty(single);
                }
            }
        } else {
            textString += ' ' + getOneToTwenty(single);
        }

        return textString;

    };
    /**
     * Passed a number between 1 and 10, will return the text description of number
     * @param ones
     * @returns {string}
     */
    var getOneToTwenty = function (ones) {
        return ones === "0" ? "" : numberTranslation.oneToTwenty[ones - 1];
    };
    /**
     * Passed a number which is a multiple of 10, (10,20,30,40,50,60,70,80,90)
     * function returns text description of number
     * @param tens
     * @returns {string} text description of number
     */
    var getTens = function (tens) {
        return tens === "0" ? "" : numberTranslation.tenToHundred[tens - 1];
    };

    _self.translate = function (num) {
        var numberToText = "";
        var numberChunked = num.split( /(?=(?:...)*$)/ ); // split array in chunks of three numbers (or less);
        var bigNumRef = numberChunked.length;
        /**
         * Loop through the 3 digit chunks of the number provided.
         * Add a description for each chunk e.g. 'thousand', 'million' etc.
         */
        numberChunked.forEach(function (ournum) {

            var returnedText = getText(ournum);
            numberToText += returnedText;

            if (numberTranslation.numCategory[bigNumRef] && returnedText) {
                numberToText += ' ' + numberTranslation.numCategory[bigNumRef] + ', ';
                bigNumRef--;
            }

        });
        return numberToText;
    };

    return _self;

})();
