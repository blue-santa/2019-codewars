// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
const countSmileys = function(arr) {
    let counter = 0
      arr.forEach((el) => {
        el = el.split("")
        if (el.length === 2) {
          if ((el[0] === ":" || el[0] === ";") && (el[1] === ")" || el[1] === "D")) {
            counter++
          }
        } else if (el.length === 3) {
          if ((el[0] === ":" || el[0] === ";") && (el[1] === "-" || el[1] === "~") && (el[2] === ")" || el[2] === "D")) {
            counter++
          }
        }
      })
    return counter
}
