let container = document.getElementById("container");

fetch("https://reqres.in/api/users")
	.then((res) => {
		return res.json();
	})
	.then((res) => {
		displayData(res.data)
	}).catch((err) => {
		console.log(err)
	});

const displayData = (users) => {
	users.forEach((user) => {
		let div = document.createElement("div")

		let avatar = document.createElement("img")
		avatar.src = user.avatar

		let name = document.createElement("p")
		name.innerText = `${user.first_name} ${user.last_name}`

		let email = document.createElement("p")
		email.innerText = user.email;

		div.append(avatar, name, email);
		container.appendChild(div);
	});
}