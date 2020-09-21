const name = 'hy'
const person = {
  namea: 'menglinghua',
  say: function () {
    return function () {
      console.log(this.name);
    };
  }
};

person.say()(); // undefined
const person = {
  namea: 'menglinghua',
  say: function () {
    return () => {
      console.log(this.namea);
    };
  }
};
person.say()(); // menglinghua