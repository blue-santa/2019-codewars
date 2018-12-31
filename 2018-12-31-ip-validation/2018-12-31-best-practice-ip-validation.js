// https://www.codewars.com/kata/515decfd9dcfc23bb6000006/solutions/javascript

const isValidIP = function(str) {
  console.log(str)
  return str.split(".").filter(v => {return v === Number(v).toString() && Number(v) >= 0 && Number(v) <= 255}).length === 4
}
