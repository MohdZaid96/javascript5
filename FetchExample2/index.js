let container = document.getElementById("container");

const fetchProducts = async () => {
	try {
		let res = await fetch("https://fakestoreapi.com/products")
		let products = await res.json()
		displayData(products);
	} catch (err) {
		console.log(err);
	}
}
fetchProducts()

function displayData(products) {
	products.forEach(function (product) {
		let div = document.createElement("div");

		let productImg = document.createElement("img");
		productImg.src = product.image;

		let title = document.createElement("p");
		title.innerText = product.title;

		let price = document.createElement("p");
		price.innerText = "INR : " + product.price;

		div.append(productImg, title, price);
		container.append(div);
	});
}