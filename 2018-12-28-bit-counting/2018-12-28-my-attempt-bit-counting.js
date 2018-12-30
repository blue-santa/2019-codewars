const countBits = function(n) {

    const binStr = (n >>> 0).toString(2)

    return (binStr.match(/1/g) || []).length

}
