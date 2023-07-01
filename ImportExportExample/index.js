const average = (inputArr) => {
	const sum = inputArr.reduce((total, element) => total + element)
	return sum / arr.length
}

const sum = (inputArr) => {
	const sum = inputArr.reduce((total, element) => total + element)
	return sum
}

let arr = [4, 5, 12, 19, 16]

console.log('index.js AVERAGE', average(arr));
console.log('index.js SUM', sum(arr))

export { average, sum };

/*
  ## DRY Principle :
	DRY: Don't Repeat Yourself is a principle of software development that aims at reducing the repetition of patterns and code duplication to prevent redundancy; Less code is always good, it saves time and effort; it is easy to maintain and also reduces the chances of bugs;

	## Modules: A block of code which can be re-usable acrosss multiple files
	## Types of exports
		- default export
		- named export
*/