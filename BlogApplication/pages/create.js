import navbar from "../components/navbar.js";

let navbarDiv = document.getElementById("navbar_div");
navbarDiv.innerHTML = navbar();

let createBtn = document.getElementById('create-blog-button')

createBtn.addEventListener('click', async () => {
	let title = document.getElementById("title").value;
	let body = document.getElementById("body").value;
	let author = document.getElementById("author").value;

	try {
		await fetch('http://localhost:3000/blogs', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title,
				body,
				author
			})
		})
		location.href = 'index.html'
	} catch (err) {
		console.log(err);
	}
});