var isHappy = function (n) {
    while (n <= 50) {
        let str = n.toString().split("").reduce((acc, ele) => acc += Math.pow(ele), 0);

        if (str === 1) {
            return true;
        }
        else return str;
    }
};