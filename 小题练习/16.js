var arr = [53, 13, 45, 13, 43, 54, 42, 76, 53, 32, 34]

function fn (arr, n) {
  if (arr.length == n) return arr[n]

  var v = fn(arr, n + 1)
  return v > arr[n] ? v : arr[n]
}

fn(arr, 0)


function fn1 (arr, i, j) {
  if (j - i === 1) {
    return arr[i] > arr[j] ? arr[i] : arr[j]
  }

  let t = Math.ceil((i + j) / 2)

  let v = fn1(arr, i, t)
  let s = fn1(arr, t, j)

  return v > s ? v : s
}
fn1(arr, 0, 10)
fn1(arr, 5, 10)