export default str =>
  str.split(' ').map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
