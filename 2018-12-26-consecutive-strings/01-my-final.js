function longestConsec(strarr, k) {
  
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return ""
  }

  let res = ''

  for (let i = 0; i < strarr.length; i++) {

    let temp = strarr[i]

    if (k > 1) {

      for (let t = 1; t < k; t++) {
        if (strarr[i + t] === undefined) {
        
          break
        
        } else {
          
          temp = temp + strarr[i + t]
      
        }
    
      }

    }

    if (temp.length > res.length) {
      res = temp
    }

  }

  return res
}
