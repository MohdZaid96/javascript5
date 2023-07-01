import navbar from "../components/navbar.js";

let navbarDiv = document.getElementById("navbar_div");
navbarDiv.innerHTML = navbar();

let blogId = localStorage.getItem('blogId')

const getBlogData = async () => {
	try {
		let res = await fetch(`http://localhost:3000/blogs/${blogId}`)
		let blog = await res.json()

		let { title, body, author } = blog
		
		document.getElementById('title').value = title
		document.getElementById('body').value = body
		document.getElementById('author').value = author
	} catch (err) {
		console.log(err)
	}
}
getBlogData()

let confirmBtn = document.getElementById('edit-blog-btn')
confirmBtn.addEventListener('click', async () => {
	try {
		let title = document.getElementById('title').value
		let body = document.getElementById('body').value
		let author = document.getElementById('author').value
		await fetch(`http://localhost:3000/blogs/${blogId}`, {
			method: 'PUT',
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
})
