// https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript
//
// I'm taking a break on this one. It's too far above current skill level.



const getPINs = function(observed) {

	const par = {
		'1': ['1', '2', '4'],
		'2': ['1', '2', '3', '5'],
		'3': ['2', '3', '6'],
		'4': ['1', '4', '5', '7'],
		'5': ['2', '4', '5', '6', '8'],
		'6': ['3', '5', '6', '9'],
		'7': ['4', '7', '8'],
		'8': ['5', '7', '8', '9', '0'],
		'9': ['6', '8', '9'],
		'0': ['8', '0']
	}

	let count = 1

	observed = observed.split('').map((el) => {
		return par[el]
	})

	observed.forEach((el, index) => {
		console.log(`observed[${index}]: ${el}`)
	})

	observed.forEach((el) => count = count * el.length)

	let res = new Array(count).map((el) => {
		return ''
	})

	const buildRes = function(mainArr) {

		let currPrefix = ''

		const lengthOfEach = mainArr.map((el) => { return el.length })

		let currPosEach = new Array(mainArr.length).fill(0)
		const resetFollowing = function(arr, pos) {
			arr = arr.map((el, index) => {
				if (index > pos) {
					return 0
				}
			})

			return arr
		}

		for (let i = 0; i < count; i++) {
			
			lengthOfEach.forEach((currPos, index) => {
				
				tipArr = mainArr[index]
				console.log(`index: ${index}, currPosEach: ${currPosEach}, currPosEach[index]: ${currPosEach[index]}`)
				console.log(`lengthOfEach: ${lengthOfEach}`)
				console.log(`tipArr: ${tipArr}, tipArr[${currPosEach[index]}]: ${tipArr[currPosEach[index]]}`)
				if (currPosEach[index] < lengthOfEach[index]) {
					currPrefix.concat(tipArr[currPosEach[index]])
					currPosEach[index]++
				} else if (currPosEach[index] === lengthOfEach[index] && typeof(currPosEach[index + 1]) === 'undefined') {
					currPrefix.concat(tipArr[currPosEach[index]])
					currPosEach[index - 1]++
					currPosEach[index] = 0
				} else if (currPosEach[index] === lengthOfEach[index] && typeof(currPosEach[index + 1]) != 'undefined' && typeof(currPosEach[index - 1]) != 'undefined') {
					currPrefix.concat(tipArr[currPosEach[index]])
					currPosEach[index - 1]++
					currPosEach[index] = 0 
					currPosEach = resetFollowing(currPosEach, index)
				} else if (currPosEach[index] === lengthOfEach[index] && typeof(currPosEach[index - 1]) === 'undefined') {
					currPrefix.concat(tipArr[currPosEach[index]])
				}
			})
			console.log(`i: ${i}, currPrefix: ${currPrefix}`)
			res[i] = currPrefix

			currPrefix = ''
		}
	}

	buildRes(observed)
}

getPINs('123')
