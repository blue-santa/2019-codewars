// https://www.codewars.com/kata/583203e6eb35d7980400002a/solutions/javascript

const countSmileys = function(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length
}
