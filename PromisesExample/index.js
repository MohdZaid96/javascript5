let queue = ["Amar", "Akbar", "Anthony", "Ronaldo"]

const register = () => {
	let name = document.getElementById("name").value
	queue.push(name);
	console.log("Queue: ", queue)

	let message = `${name}: Your registration is succesfull. Please wait for your turn.`
	alert(message);

	let promise = new Promise((resolve, reject) => {
		let timeInterval = setInterval(() => {
			let currentTurn = queue.shift()
			document.getElementById('current-turn').innerText = currentTurn
			console.log(queue)

			if (currentTurn == name) {
				resolve(`${name}: It's your turn now`)
				clearInterval(timeInterval)
			}
		}, 2000);
	});

	promise.then((res) => {
		alert(res)
	}).catch((err) => {
		console.log(err)
	});
}