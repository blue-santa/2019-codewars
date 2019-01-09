// https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript

const getPINs = function(observed) {

	const res = []

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

	observed.forEach((el) => count = count * el.length)

	let res = new Array(count)

	res = res.map((el) => return '')

	observed.forEach((arr) => {

		arr.forEach((str, index) => {
			
		})

	})

}

getPINs('123')
