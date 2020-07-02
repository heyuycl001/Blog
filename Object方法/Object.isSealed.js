Object.isSealed()
// 方法判断一个对象是否被密封
// 如果这个对象是密封的,则返回true，否则返回false。密封对象是指那些不可 扩展的，
// 且所有自身属性都不可配置且因此不可删除（但不一定是不可写的）的对象。

// 新建对象默认是不可密封的
const empty = {}
Object.isSealed(empty) // false

// 如果你把一个空对象变得不可扩展，则它同时也会变成个密封对象
Object.preventExtensions(empty)
Object.isSealed(empty) // true

// 如果这个对象不是空对象，如果把它变成不可扩展则它不会变成密封对象。因为密封对象的所有自身属性必须是不可配置的。
const hasProp = {
  fee: "fie foe fum"
};
Object.preventExtensions(hasProp)
Object.isSealed(hasProp) // false
// 如果把这个属性变得不可配置，则这个对象也就变成了密封对象。
Object.defineProperty(hasProp, 'fee', {
  configurable: false
})
Object.isSealed(hasProp) // true


// 最简单的方法来生成一个密封对象，当然是使用Object.seal
const sealed = {}
Object.seal(sealed)
Object.isSealed(sealed) // true

// 一个密封对象同时也是不可扩展的。
Object.isExtensible(sealed) // false

// 一个密封对象也可以是一个冻结对象,但不是必须的.
Object.isFrozen(sealed); // === true ，所有的属性都是不可写的
const s2 = Object.seal({
  p: 3
});
Object.isFrozen(s2); // === false， 属性"p"可写

const s3 = Object.seal({
  get p() {
    return 0;
  }
});
Object.isFrozen(s3); // === true ，访问器属性不考虑可写不可写,只考虑是否可配置