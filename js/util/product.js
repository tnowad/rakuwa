import { getDataFromLocal } from './local-data.js'
import { createNewId } from '../util/util.js'
import { removeVietnameseTones } from '../util/util.js'

const createProduct = async (product) => {
	let { products } = await getDataFromLocal()
	product.id = createNewId(products)
	products.push(product)
	localStorage.setItem('products', JSON.stringify(products))
}

const removeProduct = async (productId) => {
	let { products } = await getDataFromLocal()
	products = products.filter((product) => product.id != productId)
	localStorage.setItem('products', JSON.stringify(products))
}

const updateProduct = async (product) => {
	let { products } = await getDataFromLocal()
	for (let i = 0; i < products.length; i++) {
		if (products[i].id == product.id) {
			products[i] = product
			break
		}
	}
	localStorage.setItem('products', JSON.stringify(products))
}

const getProductById = async (productId) => {
	let { products } = await getDataFromLocal()
	return products.find((product) => product.id == productId)
}

const getProductBySearch = async (productName) => {
	let { products } = await getDataFromLocal()
	return products.filter(
		(product) =>
			product.title.toLowerCase().includes(productName.toLowerCase()) ||
			product.id == productName ||
			removeVietnameseTones(product.title)
				.toLowerCase()
				.includes(productName.toLowerCase()),
	)
}

const getProducts = async (options) => {
	let { products } = await getDataFromLocal()
	if (options != undefined && options != null) {
		if (
			options.category != undefined &&
			options.category != null &&
			options.category != 'all'
		)
			products = products.filter(
				(product) => product.category === options.category,
			)
		if (options.price != undefined && options.price != null) {
			if (options.price.low != undefined && options.price.low != null)
				products = products.filter(
					(product) => product.price >= options.price.low,
				)
			if (options.price.high != undefined && options.price.high != null)
				products = products.filter(
					(product) => product.price <= options.price.high,
				)
		}
		if (
			options.name != undefined &&
			options.name != null &&
			options.name != 'null'
		) {
			options.name = options.name.toLowerCase()
			products = products.filter((product) => {
				if (
					product.title.toLowerCase().includes(options.name) ||
					options.name.includes(product.title.toLowerCase())
				) {
					return true
				}
				if (
					product.category.toLowerCase().includes(options.name) ||
					options.name.includes(product.category.toLowerCase())
				) {
					return true
				}
			})
		}
	}
	return products
}

const getCategories = async () => {
	let { products } = await getDataFromLocal()
	let category = {}
	products.forEach((value) => {
		category[value.category] = category[value.category]
			? category[value.category] + 1
			: 1
	})
	return category
}

const handleTime = async (comment) => { 
	// const time = Date.now() - comment.time
	const time = Math.floor((Date.now()-comment.time) / (1000*60))
	console.log(time)
	// if (comment.time > 60 * 60) return comment.time / 3600
	// if (time > 60) return time/60
	return time 
}

export {
	createProduct,
	updateProduct,
	getProducts,
	getCategories,
	removeProduct,
	getProductById,
	getProductBySearch,
	handleTime
}
