// https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/train/javascript

const pickPeaks = function(arr) {

	let res = {
		pos: [],
		peaks: []
		
	}

	arr.forEach((el, index) => {
		if (index === 0 || index === arr.length) {
			return
		}

		if (el > arr[index - 1]) {
			if (el >= arr[index + 1]) {
				if (el > arr[index + 1]) {
					res.pos.push(index)
					res.peaks.push(el)
				} else {
					let currPos = index + 1
					while (currPos <= arr.length && arr[index + 1] >= arr[currPos]) {
						if (el > arr[currPos]) {
							res.pos.push(index)
							res.peaks.push(el)
							break
						}
						currPos++
					}
				}
			}
		}
	})

	return res
}

pickPeaks([ 3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1 ])
