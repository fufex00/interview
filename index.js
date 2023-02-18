//FOR THE COMPLEXIY ANALYSIS I CONSIDER THIS ALGORITHM TO BE -- O(n)-Linear -- due to the loop through the string array


/**
 * Function that checks if a string of brackets is balanced.
 * @param {string} String - A string of brackets ex: {[()]}
 * @return {Boolean} bool - True if balanced, false otherwise.
 */
function balancedBracketChecker(string) {

    // map to store key value pairs for "symbol type"
    const bracketMap = new Map([[123, 'curly'], [125, 'curly'], [91, 'square'], [93, 'square'], [40, 'rounded'], [41, 'rounded']]);

    if (string.length === 0) return false;

    // checks if opening and closing symbol are of the same "type", if not brackets cannot be balanced
    if (bracketMap.get(string.charCodeAt(0)) !== bracketMap.get(string.charCodeAt(string.length - 1))) return false;

    // values to compare if each value has its corresponding pair
    let openingCount = 0;
    let closingCount = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === '{') {
            openingCount++
        } else if (string[i] === '[') {
            openingCount++;
        }
        else if (string[i] === '(') {
            openingCount++;
        } else {
            closingCount++;
        }

        // if closing symbols are greater than the opening ones, brackets are not balanced
        if (openingCount < closingCount) return false;
    }

    return openingCount === closingCount;
}


console.log("is it balanced?", balancedBracketChecker("([)]"));
console.log("is it balanced?", balancedBracketChecker("(]"));
console.log("is it balanced?", balancedBracketChecker("([{}])"));
console.log("is it balanced?", balancedBracketChecker("((()))"));
console.log("is it balanced?", balancedBracketChecker("{}"));
console.log("is it balanced?", balancedBracketChecker("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"));





