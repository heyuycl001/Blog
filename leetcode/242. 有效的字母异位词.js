// 242. 有效的字母异位词
/* 
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

示例 1:
输入: s = "anagram", t = "nagaram"
输出: true

示例 2:
输入: s = "rat", t = "car"
输出: false

说明:
你可以假设字符串只包含小写字母。 
*/

const s = "anagramg",
    t = "nagaramz"
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    return s.length === t.length && [...s].sort().join('') === [...t].sort().join('')
};
console.log(isAnagram(s, t));
/* 
    思路：
        如果 s、t两个的长度不相等，则直接可以返回不想等
        如果长度相等  则把s、t转成数组在排序在转换成字符串，如果是字母异位词则应该 === 为 true
*/

var isAnagram1 = function (s, t) {
    if (s.length !== t.length) {
        return false
    }
    const table = new Array(26).fill(0)
    for (let i = 0; i < s.length; ++i) {
        table[s.codePointAt(i) - 'a'.codePointAt(0)]++
    }
    for (let i = 0; i < t.length; i++) {
        table[t.codePointAt(i) - 'a'.codePointAt(0)]--
        if (table[t.codePointAt(i) - 'a'.codePointAt(0)] < 0) return false
    }

    return true
};
console.log(isAnagram1(s, t));

/* 
    思路：
        如果 s、t两个的长度不相等，则直接可以返回不想等
        因可以假设为小写字母，小写字母一共26位，则创建一个26长度的数组
        table[t.codePointAt(i) - 'a'.codePointAt(0)] a-z 代码 索引0-26
        循环 s 把 每个i 对映索引的 值 +1
        循环 t 把 每个i 对映索引的 值 -1
        当t中有值小于0时，则证明 不是 字母异位词
        反则 是 字母异位词
*/