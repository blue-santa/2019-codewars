//  https://www.codewars.com/kata/ip-validation/train/javascript

const isValidIP = function(str) {
  console.log('string: ', str)
  str = str.split(".")
  console.log('length: ', str.length)

  if (str.length != 4) {
    return false
  }

  let res = true

  str.forEach((el) => {

    console.log
      (
        'el: ', el, '\n',
        'number: ', typeof(parseInt(el)), '\n',
        '(el != 0 && !(parseInt(el))): ', (el != 0 && !(parseInt(el))), '\n',
        '/^0[0123456789]+/.test(el) : ', /^0[0123456789]+/.test(el), '\n',
        '/[^0123456789]+/.test(el) : ', /[^0123456789]+/.test(el), '\n',
        '!(/[0123456789]{1,3}/.test(el)) : ', !(/[0123456789]{1,3}/.test(el)), '\n',
        '!(0 <= parseInt(el) && parseInt(el) <= 255) : ',  !(0 <= parseInt(el) && parseInt(el) <= 255), '\n',
      )



    if  (
            (el != 0 && !(parseInt(el)))
        ||  /^0[0123456789]+/.test(el)
        ||  /[^0123456789]+/.test(el)
        ||  !(/[0123456789]{1,3}/.test(el))
        ||  !(0 <= parseInt(el) && parseInt(el) <= 255)
        )
    {
      console.log('Switch res to false')
      res = false
    }
  })

  return res

}
