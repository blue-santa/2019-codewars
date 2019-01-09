// https://www.codewars.com/kata/54b724efac3d5402db00065e/solutions/javascript

const decodeMorse = function(morseCode) {
  const decodeMorseLetter = function(letter) {
    return MORSE_CODE[letter]
  }

  const decodeMorseWord = function(word) {
    return word.split(' ').map(decodeMorseLetter).join('')
  }

  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ')
}
