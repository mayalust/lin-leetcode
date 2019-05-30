/* 168. Excel Sheet Column Title */
let convertToTitle = function (n) {
    let chars = [String.fromCharCode(65 + 25)],
        rs = [];
    for (let i = 0; i < 25; i++) {
        chars.push(String.fromCharCode(65 + i));
    }
    while (n >= 26) {
        let rest = n % 26;
        n = Math.floor(n / 26);
        if (rest == 0) {
            n--;
        }
        rs.push(chars[rest]);
    }
    if (n > 0) {
        rs.unshift(chars[n]);
    }
    return rs.join("");
};
for (let i = 1; i < 100; i++) {
    console.log(convertToTitle(i));
}