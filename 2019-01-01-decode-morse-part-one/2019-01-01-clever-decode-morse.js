const decodeMorse = function(morseCode) {

  return morseCode
    .trim()
    .split(/  | /)
    .map((code) => MORSE_CODE[code] || ' ')
    .join('')

}
