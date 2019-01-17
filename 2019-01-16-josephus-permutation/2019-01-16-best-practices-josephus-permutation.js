// https://www.codewars.com/kata/5550d638a99ddb113e0000a2/solutions/javascript

const josephus = function(items, k) {

    let res = [],
        i = 0

    while (items.length > 0) {
        res.push(items.splice(i = (i + k - 1) % items.length, 1)[0])
    }

    return res
}
