/* 168, Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...
Example 1:

Input: 1
Output: "A"
Example 2:

Input: 28
Output: "AB"
Example 3:

Input: 701
Output: "ZY" */
function convertToTitle(n) {
  if (n == 0) {
    return;
  }
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
    rs.unshift(chars[rest]);
  }
  if (n > 0) {
    rs.unshift(chars[n]);
  }
  return rs.join("");
}
/* 171. Excel Sheet Column Number
Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
Example 1:

Input: "A"
Output: 1
Example 2:

Input: "AB"
Output: 28
Example 3:

Input: "ZY"
Output: 701 */
function titleToNumber(s) {
  let dics = {},
    sum = 0;
  if (!s) {
    return;
  }
  for (let i = 0; i < 26; i++) {
    dics[String.fromCharCode(65 + i)] = i + 1;
  }
  for (let i = 0; i < s.length; i++) {
    sum += Math.pow(26, i) * dics[s.charAt(s.length - i - 1)];
  }
  return sum;
}
var trailingZeroes = function(n) {
  let m = 1;
  while (n > 0) {
    m *= n;
    n--;
  }
  let zero = 0;
  console.log(m % 10);
  while (m > 10) {
    if (m % 10 == 0) {
      zero++;
    } else {
      break;
    }
    m = Math.floor(m / 10);
  }
  return zero;
};
module.exports = {
  convertToTitle: convertToTitle,
  titleToNumber: titleToNumber,
  trailingZeroes: trailingZeroes
};
