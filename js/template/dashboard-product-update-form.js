// import { getDataFromLocal, updateLocalDataFromServer } from "../util/local-data"
const productForm = (product) => {
	return `
        <form class="table-product-form">
            <div class="group-edit-product edit-name">
				<label for="">Chỉnh sửa tên</label>
				<input type="text" name="" id="">${product.title}
			</div>
			<div class="group-edit-product edit-img">
				<label for="">Chỉnh sửa ảnh</label>
				<input type="file">
			</div>
			<div class="group-edit-product edit-amount">
				<label for="">Chỉnh số lượng</label>
				<input type="text">
			</div>
			<div class="group-edit-product edit-price">
				<label for="">Chỉnh Giá</label>
				<input type="text">
			</div>
            <div class="group-edit-product submit"> 
                <button onclick="updateProduct()">Submit</button> 
            </div>
        </form>
    `
}
window.updateProduct = ()=>{}
// const updateProduct = (productId) => {
//     getDataFromLocal('products')
//     updateLocalDataFromServer
// }

export { productForm }
