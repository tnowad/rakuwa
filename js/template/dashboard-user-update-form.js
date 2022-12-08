const userForm = (user) => {
	return `
	<form class="form-action-user" onsubmit="return false">
			<div class="group-form-edit-user edit-fullName" >
				<label for="" id="fullName-Text" >Thay đổi tên</label>
				<input type="text" id="fullName" value="${user.fullName}">
			</div>
			<div class="group-form-edit edit-dateOfBirth">
				<label for="">Thay đổi ngày sinh </label>
				<input type="date" name="" id="dateOfBirth" value="${user.dateOfBirth}">
			</div>
			<div class="group-form-edit edit-email">
				<label for="">Thay đổi email</label>
				<input type="text" name="" id="email" value="${user.email}">
				</div>
			<div class="group-form-edit edit-image">
				<label for="">Thay đổi ảnh</label>
				<input type="file" name="" id="image" value="${user.image}">
			</div>
			<div class="group-form-edit edit-phone">
				<label for="">Thay đổi số điện thoại</label>
				<input type="text" name="" id="phone" value="${user.phoneNumber}">
			</div>
			<select name="gender" id="gender">
				<option value="male">Male</option>
				<option value="female">Female</option>
				<option value="order">Order</option>
 			</select>
			<div class="group-form-edit edit-address">
			<label for="">Thay đổi địa chỉ</label>
				<textarea id="address" name="w3review" rows="4" cols="50">${user.address}</textarea>
			</div>
			<div class="group-form-edit edit-role" >
				<label for="">Thay đổi quyền</label>
				<input type="option" id="role" value="${user.role}">
			</div>
			<div class="group-form-edit edit-password" >
				<label for="">Thay đổi mật khẩu</label>
				<input type="text" id="password" value="${user.password}">
			</div>
			<div class="edit-option">
				<button id="cancel">Hủy</button>
				<button id="submit" onclick="updateUser(this.parentElement.parentElement, ${user.id})" >Hoàn tất</button>
				</div>
		</form>
	`
}
window.updateUser = async () => {

}
export { userForm }
