module.exports = function check(str, bracketsConfig) {
    let array = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        array.push(bracketsConfig[i].join(""));
    }

    function checking(someStr) {
        let checkStr = someStr;

        for (let i = 0; i < array.length; i++) {
            checkStr = checkStr.replace(array[i], "");
        }

        if (someStr === checkStr) {
            return checkStr;
        } else {
            return checking(checkStr);
        }
    }
    let result = checking(str);
    if (result === "") {
        return true;
    } else {
        return false;
    }
};
