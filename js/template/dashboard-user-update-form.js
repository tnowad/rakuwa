const userForm = (user) => {
	return `
        <form class="form-action" onsubmit="return false">
			<div class="group-form-edit edit-password" >
				<label for="">Thay đổi mật khẩu</label>
				<input type="text" id="password" value="${product.password}">
			</div>
			<div class="group-form-edit edit-fullName" >
				<label for="">Thay đổi tên</label>
				<input type="text" id="fullName" value="${product.fullName}">
			</div>
			<div class="group-form-edit edit-email">
				<label for="">Thay đổi email</label>
				<input type="text" name="" id="email" value="${product.email}">
			</div>
			<div class="group-form-edit edit-image">
				<label for="">Thay đổi ảnh</label>
				<input type="file" name="" id="image" value="${product.image}">
			</div>
			<div class="group-form-edit edit-dateOfBirth">
				<label for="">Thay đổi ngày sinh </label>
				<input type="date" name="" id="dateOfBirth" value="${product.dateOfBirth}">
			</div>
			<div class="group-form-edit edit-phone">
					<label for="">Thay đổi </label>
					<input type="text" name="" id="price" value="${product.price}">
			</div>
			<div class="edit-describe">
				<label for="">Thay đổi miêu tả</label>
				<textarea id="description" name="w3review" rows="4" cols="50">${product.description}</textarea>
				</div>
			<div class="edit-option">
				<button id="cancel">Hủy</button>
				<button id="submit" onclick="updateProduct(this.parentElement.parentElement, ${product.id})" >Hoàn tất</button>
			</div>
		</form>
	`
}
export { userForm }
