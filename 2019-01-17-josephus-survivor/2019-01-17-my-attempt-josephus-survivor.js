const josephusSurvivor = function(n, k) {

    let arr = [...Array(n)].map((el, index) => { return index + 1 })

    let i = 0

    while (arr.length > 1) {

        arr.splice(i = (i + k - 1) % arr.length, 1)

    }

    return arr[0]

}
