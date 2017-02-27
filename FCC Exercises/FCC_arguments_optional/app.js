function addTogether() {
    console.log(arguments);
    if (arguments.length > 1) {
        if (typeof (arguments[0]) != "number" || typeof (arguments[1]) != "number") {
            return undefined;
        } else {
            return arguments[0] + arguments[1];
        }
    } else {
        var a = arguments[0];
        if (typeof (a) == "number") {
            return function (args2) {
                if (typeof (args2) != "number") {
                    return undefined;
                } else {
                    return a + args2;
                }
            }
        }
    }
}

(addTogether(2, 3));
(addTogether(2)(3));
(addTogether("http://bit.ly/IqT6zt"));
(addTogether(2, "3"));
(addTogether(2)([3]));