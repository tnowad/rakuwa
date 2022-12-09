import { getUserById, getUserByName, updateUser } from '../util/user.js'
import { convertBase64 } from '../util/file-to-base64.js'
import { renderSearch } from '../render/dashboard-users.js'
const userForm = (user) => {
	return `
	<form class="form-action-user" onsubmit="return false">
			<div class="group-form-edit-user edit-fullName" >
				<label for="" id="fullName-Text" >Họ tên</label>
				<input type="text" id="fullName" value="${user.fullName}">
			</div>
			<div class="group-form-editUser edit-dateOfBirth">
				<label for="">Ngày sinh </label>
				<input type="date" name="" id="dateOfBirth" value="${user.dateOfBirth}">
			</div>
			<div class="group-form-editUser edit-email">
				<label for="">Email</label>
				<input type="text" name="" id="email" value="${user.email}">
				</div>
			<div class="group-form-editUser edit-image">
				<label for="">Ảnh</label>
				<input type="file" name="" id="image" value="${user.image}">
			</div>
			<div class="group-form-editUser edit-phoneNumber">
				<label for="">Số điện thoại</label>
				<input type="text" name="" id="phone" value="${user.phoneNumber}">
			</div>
			<select name="gender" class="group-form-editUser edit-gender" value="${user.gender}" >
				<option value="Nam">Nam</option>
				<option value="Nữ">Nữ</option>
				<option value="Khác">Khác</option>
 			</select>
			<div class="group-form-editUser edit-address">
				<label for="">Địa chỉ</label>
				<textarea id="address" name="address" rows="4" cols="50">${user.address}</textarea>
			</div>
			<select name="status" class="group-form-editUser edit-status">
				<option value="active">Active</option>
				<option value="ban">Ban</option>
				<option value="deleted">Deleted</option>
			 </select>			
			<select name="role" value="${user.role}" class="group-form-editUser edit-role">
				<option  value="admin">Admin</option>
				<option value="user">User</option>
 			</select>
			<div class="group-form-editUser edit-password" >
				<label for="">Mật khẩu</label>
				<input type="text" id="password" value="${user.password}">
			</div>
			<div class="group-form-editUser edit-option-user">
				<button id="cancel">Hủy</button>
				<button id="submit" onclick="updateUser(this.parentElement.parentElement, ${user.id})" >Hoàn tất</button>
				</div>
		</form>
	`
}
window.updateUser = async (form, userId) => {
	let user = await getUserById(userId)
	user = {
		...user,
		fullName: form.querySelector('#fullName').value,
		dateOfBirth: form.querySelector('#dateOfBirth').value,
		email: form.querySelector('#email').value,
		phoneNumber: form.querySelector('#phone').value,
		gender: form.querySelector('.edit-gender').value,
		address: form.querySelector('#address').value,
		status: form.querySelector('.edit-status').value,
		role: form.querySelector('.edit-role').value,
		password: form.querySelector('#password').value,
	}
	try {
		user = {
			...user,
			image: await convertBase64(form.querySelector('#image').files[0]),
		}
		console.log(user)
	} catch {}
	updateUser(user)
	location.reload()
}

window.searchUser = async () => {
	let valueSearchUser = document.querySelector('.form-search-user input').value
	renderSearch(await getUserByName(valueSearchUser))
}

export { userForm }
