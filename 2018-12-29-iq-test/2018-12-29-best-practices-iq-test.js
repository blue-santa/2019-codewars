// https://www.codewars.com/kata/552c028c030765286c00007d

function iqTest(numbers) {
  numbers = numbers.split(" ").map((el) => return parseInt(el))

  let odd = numbers.filter((el) => return el % 2 === 1)
  let even = numbers.filter((el) => return el % 2 === 0)

  return odd.length > even.length ? numbers.indexOf(even[0]) + 1 : numbers.indexOf(odd[0]) + 1
}
