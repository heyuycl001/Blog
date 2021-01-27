(function () {
    function hiName(name) {
        return name.firstName + "_" + name.lastName;
    }
    var name = {
        lastName: 'zz',
        firstName: 'xx',
        fullName: 'zz xx'
    };
    console.log(hiName(name));
})();
