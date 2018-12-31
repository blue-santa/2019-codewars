// https://www.codewars.com/kata/52774a314c2333f0a7000688/solutions/javascript
const validParentheses = function(parens) {

  let tokenizer = /[()]/g,
      count = 0,
      token

  while (token = tokenizer.exec(parens), token !== null) {

    if (token === '(') {
      count++
    } else if (token === ')') {
      count--
      if (count < 0) {
        return false
      }
    }

  }

  return count === 0

}
