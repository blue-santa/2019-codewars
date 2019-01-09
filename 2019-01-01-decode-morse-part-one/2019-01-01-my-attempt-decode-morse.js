//  https://www.codewars.com/kata/decode-the-morse-code/train/javascript

decodeMorse = function(morseCode) {
  return morseCode
    .trim()
    .split("   ")
    .map((word) => {
      return word
        .split(" ")
        .map((letter) => {
          return MORSE_CODE[letter]
        })
        .join("")
    })
    .join(" ")
}
