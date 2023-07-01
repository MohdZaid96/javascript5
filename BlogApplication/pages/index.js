import navbar from "../components/navbar.js";

let navbarDiv = document.getElementById("navbar_div");
navbarDiv.innerHTML = navbar();

let parentNode = document.getElementById("table-body")

const displayData = (blogs) => {
  parentNode.innerHTML = "";
  blogs.forEach((blog) => {
    let blogRow = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = blog.id;
    let td2 = document.createElement("td");
    td2.textContent = blog.title;
    let td3 = document.createElement("td");
    td3.textContent = blog.author;

    let td4 = document.createElement("td");
    let viewBtn = document.createElement("button");
    viewBtn.textContent = "VIEW";
    td4.append(viewBtn);
		viewBtn.addEventListener('click', () => {
			location.href = 'view.html'
			localStorage.setItem("blogId", blog.id);
		})

    let td5 = document.createElement("td");
    let editBtn = document.createElement("button");
    editBtn.textContent = "EDIT";
    td5.append(editBtn);
		editBtn.addEventListener('click', () => {
			location.href = 'edit.html'
			localStorage.setItem("blogId", blog.id);
		})

    let td6 = document.createElement("td");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    td6.append(deleteBtn);
		deleteBtn.addEventListener('click', async () => {
			try {
				await fetch(`http://localhost:3000/blogs/${blog.id}`, {
					method: 'DELETE',
				})
			} catch (err) {
				console.log(err);
			}
		})

    blogRow.append(td1, td2, td3, td4, td5, td6);
    parentNode.append(blogRow);
  });
}

const getBlogs = async () => {
	try {
		let res = await fetch('http://localhost:3000/blogs')
		let blogs = await res.json()
		displayData(blogs)
	} catch(err) {
		console.log(err);
	}
}
getBlogs()
















/*
	- components
		- navbar.js
	- styles
		- main.css
	- pages
		- index.html
		- index.js
		- view.html
		- view.js
		- create.html
		- create.js
		- edit.html
		- edit.js
	- db.json
	- package.json
*/