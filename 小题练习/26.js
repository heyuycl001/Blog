function func(...args) {
    const arr = [...args]

    function s(...innerArgs) {
        arr.push(...innerArgs)
        return s
    }
    s.toString = function () {
        const sum = arr.reduce((a, b) => a + b)
        return sum
    }
    return s
}
console.log(func(3)(3, 4, 5)(2, 4)(5, 6)(7))



function baiduUrl(scheme, domain, path, path1) {
    return `${scheme}://${domain}/${path}/${path1}`;
}

function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(null, args)
        } else {
            return function (...args2) {
                return curried.apply(null, args.concat(args2));
            };
        }
    }
}
const a = curry(baiduUrl)
const b = a('https')
const c = b('baidu.com')
const d = c('xxxxxx')
const e = d('xx1xx')
console.log(e);