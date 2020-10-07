const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    } else {
        let arr = [];
        let x = 0;
        let sp = [];
        let firstLet = '';
        for (let i = 0; i < members.length; i++) {
            if (typeof (members[i]) === "string") {
                sp = members[i].split('');
                while (sp[0] === ' ') {
                    sp = sp.splice(1);
                }
                firstLet = sp[0];
                arr[x] = firstLet.toUpperCase();
                x++;
            }
        }
        arr = arr.sort();
        let res = '';
        for (let i = 0; i < arr.length; i++) {
            res += arr[i];
        }
        return res;
    }
};
