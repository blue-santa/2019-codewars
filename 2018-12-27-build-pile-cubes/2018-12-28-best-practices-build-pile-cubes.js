// https://www.codewars.com/kata/build-a-pile-of-cubes/train/javascript

function findNb(m) {

  let n = 0
  while (m > 0) m -= ++n**3
  return m ? -1 : n

}
