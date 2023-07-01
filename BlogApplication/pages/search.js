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

    blogRow.append(td1, td2, td3, td4, td5, td6);
    parentNode.append(blogRow);
  });
}

let searchBtn = document.getElementById('search-blog-button')
searchBtn.addEventListener("click", async () => {
	try {
		let query = document.getElementById('search-param').value
		let res = await fetch(`http://localhost:3000/blogs?q=${query}`)
		let blogs = await res.json()
		displayData(blogs)
	} catch(err) {
		console.log(err);
	}
})

let resetBtn = document.getElementById('reset-button')
resetBtn.addEventListener("click", () => {
	document.getElementById('search-param').value = ''
	getBlogs()
})

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