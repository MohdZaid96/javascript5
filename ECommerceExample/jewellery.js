import navbar from './components/navbar.js'
import { getData, displayData } from './scripts/showData.js'

document.getElementById('navbar-container').innerHTML = navbar()

async function main () {
	let jewelleryProducts = await getData('https://fakestoreapi.com/products/category/jewelery')
	displayData(jewelleryProducts)
}
main()