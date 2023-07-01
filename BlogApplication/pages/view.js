import navbar from "../components/navbar.js";

let navbarDiv = document.getElementById("navbar_div");
navbarDiv.innerHTML = navbar();

let blogId = localStorage.getItem("blogId")
const getBlogData = async () => {
	try {
		let res = await fetch(`http://localhost:3000/blogs/${blogId}`)
		let blog = await res.json()

		displayData(blog)
	} catch (err) {
		console.log(err)
	}
}
getBlogData()

let parentNode = document.getElementById("main-content")

function displayData(blog) {
  parentNode.innerHTML = "";

  let blogTitleElement = document.createElement("p");
  blogTitleElement.textContent = blog.title;
  let blogBodyElement = document.createElement("p");
  blogBodyElement.textContent = blog.body;
  let blogAuthorElement = document.createElement("p");
  blogAuthorElement.textContent = `By : ${blog.author}`;

  parentNode.append(blogTitleElement, blogBodyElement, blogAuthorElement);
}