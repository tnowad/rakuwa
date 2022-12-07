const productRow = (product) => {
	return `
        <tbody class="table-item">
			<tr class="table-item-top">
				<td>${product.id}</td>
				<td>${product.title}</td>
				<td><img src="${product.image}" alt=""></td>
				<td>${product.quantity}</td>
				<td>${product.quantity * product.price} VNĐ</td>
			</tr>
		</tbody>`
}
const cartForm = (cart) => {
	return /* html */ `
        <h4 style="text-align:start;">Danh sách sản phẩm</h4>
        <table style="width:100%;">
            <thead class="table-head">
				<tr>
					<th style="width: 5%">Id</th>
					<th style="width: 35%">
						Tên sản phẩm
					</th>
					<th style="width: 15%">Hình ảnh</th>
					<th style="width: 15%">Số lượng</th>
					<th style="width: 15%">Giá</th>
				</tr>
			</thead>
            ${cart.cart.reduce((previousValue, currentValue) => {
				return previousValue + productRow(currentValue)
			}, '')}
        </table>
    `
}
export { cartForm }
