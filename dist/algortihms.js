"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestPalindromInAString = void 0;
function longestPalindromInAString(text) {
    let longestString = "";
    for (let i = 0; i < text.length; i++) {
        let maxWidth = Math.min(i, text.length - i);
        let tempString = text[i];
        for (let j = 1; j < maxWidth; j++) {
            if (text[i - j] === text[i + j]) {
                tempString = text[i - j] + tempString + text[i + j];
                continue;
            }
            else {
                if (text[i - j] === text[i])
                    tempString = text[i - j] + tempString;
                if (text[i + j] === text[i])
                    tempString += text[i + j];
                break;
            }
        }
        if (tempString.length > longestString.length)
            longestString = tempString;
    }
    return longestString;
}
exports.longestPalindromInAString = longestPalindromInAString;
