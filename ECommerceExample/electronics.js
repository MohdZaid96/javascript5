import navbar from './components/navbar.js'
import { getData, displayData } from './scripts/showData.js'

document.getElementById('navbar-container').innerHTML = navbar()

async function main () {
	let electronicProducts = await getData('https://fakestoreapi.com/products/category/electronics')
	displayData(electronicProducts)
}
main()