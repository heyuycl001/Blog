this.name = 'hy'

let fn = () => {
  console.log(this.name)
}

let fn1 = function () {
  console.log(this.name)
}

fn()
fn1()