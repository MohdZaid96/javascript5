const getTodos = async () => {
	try {
		let res = await fetch('http://localhost:3000/todos')
		let todos = await res.json()
		displayTodos(todos)
	} catch (e) {
		console.log(e)
	}
}

const displayTodos = (todos) => {
	let todoContainer = document.getElementById('todo-container')

	todos.forEach(todo => {
		let li = document.createElement('li')

		let span = document.createElement('span')
		span.innerText = todo.title

		let div = document.createElement('div')
		let editBtn = document.createElement('button')
		editBtn.innerText = '✎'
		editBtn.addEventListener('click', () => {
			document.getElementById('todo-input').value = todo.title
			document.getElementById('add-todo').innerText = '✔️'
			localStorage.setItem("todoId", todo.id);
		})
		let deleteBtn = document.createElement('button')
		deleteBtn.innerText = '❌'
		deleteBtn.addEventListener('click', () => {
			deleteTodo(todo.id)
		})

		div.append(editBtn, deleteBtn)
		li.append(span, div)

		todoContainer.appendChild(li)
	})
}

const addTodo = async () => {
  try {
		let buttonText = document.getElementById('add-todo').innerText
		if(buttonText == '✔️') {
			updateTodo()
			return
		}
		let title = document.getElementById('todo-input').value
    await fetch("http://localhost:3000/todos", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				"title": title
			})
		});
  } catch (err) {
    console.log(err);
  }
}

const updateTodo = async function () {
  try {
		let updatedTitle = document.getElementById('todo-input').value
		let todoId = localStorage.getItem("todoId")
    await fetch(`http://localhost:3000/todos/${todoId}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				"title": updatedTitle
			})
		});
		document.getElementById('add-todo').innerText = '➕'
  } catch (err) {
    console.log(err);
  }
}

const deleteTodo = async function (todoId) {
  try {
    await fetch(`http://localhost:3000/todos/${todoId}`, {
			method: "DELETE"
		});
  } catch (err) {
    console.log(err);
  }
}

getTodos()


































/*
	## json-server package

	## Package: Dependencies for your project
	## NPM
		- Node Package Manager
		- Install and run packages
	## Node.js 
		- BE development 
		- 2009 - Ryan Dahl
		- BE library built on top of JS and provides with a JS runtime
	## Browser use V8 Engine to execute JS code

	## npm init -y: Initialize a project
		- Create a file package.json (Metadata of project)
	
	## Install json-server globally
		- npm i -g json-server

	## Command to create API from db.json file
		- json-server --watch db.json


	## HTTP Methods
	- GET: Fetch any information from the server
	- POST: Add / Create information on the server, usually information to add (payload) is sent to the server as well.
	- PUT/PATCH: Update the information on the server
	- DELETE: Delete the information on the server
*/