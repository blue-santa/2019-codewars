// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

const validParentheses = function(parens) {

  parens = parens.split("")

  let tally = 0

  for (let i = 0; i < parens.length; i++) {

    if (parens[i] === '(') {
      tally += 1
    } else if (parens[i] === ')') {
      tally -= 1
    } else {
      return false
    }

    if (tally < 0) {
      return false
    }
  }

  return tally === 0
}
