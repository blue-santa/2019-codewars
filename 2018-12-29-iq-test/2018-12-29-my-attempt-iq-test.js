// https://www.codewars.com/kata/552c028c030765286c00007d

function iqTest(numbers){
  numbers = numbers.split(" ").map(number => {
    return parseInt(number)
  })

  let a = []
  let b = []

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      a.push(numbers[i])
    } else {
      b.push(numbers[i])
    }

    if (a.length >= 2 || b.length >= 2) {
      break
    }
  }

  return a.length < b.length ? numbers.indexOf(a[0]) + 1 : numbers.indexOf(b[0]) + 1
}
