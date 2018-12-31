// https://www.codewars.com/kata/exes-and-ohs/train/javascript

const XO = function(str) {

  let x = str.match(/x/gi)
  let o = str.match(/o/gi)

  return (x && x.length) === (o && o.length)

}
