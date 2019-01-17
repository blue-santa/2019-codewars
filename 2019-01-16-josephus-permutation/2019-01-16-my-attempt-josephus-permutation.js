// https://www.codewars.com/kata/5550d638a99ddb113e0000a2/train/javascript


// const assert = require('assert').strict

function josephus(items, k) {
    let res = []

    let index = k - 1

    let mirrorMirror = new Array(items.length).fill(true)

    let currVal = 'err'

    while (items.length) {
       
        if (index < items.length) {
            currVal = 
            res.push(items[index])
            mirrorMirror[index] = false
            index = index + k
        } else if (index >= items.length) {
            index = index - items.length
            items = items.filter((item, itemIndex) => {
                return mirrorMirror[itemIndex]
            })
            mirrorMirror = new Array(items.length).fill(true)
        }

    }

    return res
}

// const input = josephus([1,2,3,4,5,6,7,8,9,10],1) 
// const output = [3,6,9,2,7,1,8,5,10,4]

// try {
//     assert.strictEqual(1, 1, true)
// } catch(err) {
//     assert(err instanceof assert.assertionError)
//     assert.strictEqual(err.message, message)
// }
