module.exports = function check(str, bracketsConfig) {
  var i, ch;

    var bracketsMap = new Map();
    bracketsMap.set("]", "[");
    bracketsMap.set("}", "{");
    bracketsMap.set(")", "(");

    var closingBrackets = [...bracketsMap.keys()];
    var openingBrackets = [...bracketsMap.values()];

    var temp = [];
    var len = str.length;

    for (i = 0; i < len; i++) {
        ch = str[i];

        if (openingBrackets.indexOf(ch) > -1) {
            temp.push(ch);
        } else if (closingBrackets.indexOf(ch) > -1) {
            var expectedBracket = bracketsMap.get(ch);
            if (temp.length === 0 || temp.pop() !== expectedBracket) {
                return false;
            }
        } else {
            continue;
        }
    }
    return temp.length === 0;
};

}
