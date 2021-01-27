(function () {
    interface IName {
        lastName: string
        firstName: string,
        fullName: string
    }

    function hiName(name: IName) {
        return name.firstName + "_" + name.lastName
    }
    let name = {
        lastName: 'zz',
        firstName: 'xx',
        fullName: 'zz xx'
    }
    console.log(hiName(name))
})()