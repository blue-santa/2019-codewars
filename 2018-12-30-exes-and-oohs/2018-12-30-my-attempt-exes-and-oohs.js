// https://www.codewars.com/kata/exes-and-ohs/train/javascript

const XO = function(str) {

  str = str.toLowerCase().split("")

  let exes = str.filter((el) => el === 'x')
  let oohs = str.filter((el) => el === 'o')

  return exes.length === oohs.length

}
