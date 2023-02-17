function parenthesisChecker(string) {
    if (string.length === 0) return false;

    let openingValue = '(';
    let closingValue = ')';
    // stringToArray = string.split('');
    let openingCount = 0;
    let closingCount = 0;

    for (let i = 0; i < string.length; i++) {

        if (openingCount < closingCount) return false;

        if (string[i] === openingValue) {
            openingCount++;
        } else {
            closingCount++;
        }

    }

    console.log(openingCount)
    console.log(closingCount)

    return openingCount === closingCount;

}

console.log(parenthesisChecker("((())"));
// console.log(parenthesisChecker("()()"));


// instead of parenthesis, include all the braket types.

// ([{}]) = true
// (] = false
// ([)] = false


