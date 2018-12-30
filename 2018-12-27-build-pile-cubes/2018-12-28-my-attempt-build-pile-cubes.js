// https://www.codewars.com/kata/build-a-pile-of-cubes/train/javascript

function findNb(m) {

  let val = 0

  for (let i = 1; i <= Math.pow(m, (1 / 3)); i++) {

    val = val + Math.pow(i, 3)

    if (val === m) {

      return i

    }

  }

  return -1;

}
