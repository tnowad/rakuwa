import { getUserById, getUserBySearch, updateUser } from '../util/user.js'
import { convertBase64 } from '../util/file-to-base64.js'
import { renderSearch } from '../render/dashboard-users.js'
const userForm = (user) => {
	return `
	<form class="form-action form-group-user" onsubmit="return false">
			<div class="group-form-option-user group-fullName" >
				<label for="" id="fullName-Text" >Họ tên</label>
				<input type="text" id="fullName" value="${user.fullName}">
			</div>
			<div class="group-form-option-user group-dateOfBirth">
				<label for="">Ngày sinh </label>
				<input type="date" name="" id="dateOfBirth" value="${user.dateOfBirth}">
			</div>
			<div class="group-form-option-user group-email">
				<label for="">Email</label>
				<input type="text" name="" id="email" value="${user.email}">
				</div>
			<div class="group-form-option-user group-image">
				<label for="">Ảnh</label>
				<input type="file" name="" id="image" value="${user.image}">
			</div>
			<div class="group-form-option-user group-phoneNumber">
				<label for="">Số điện thoại</label>
				<input type="text" name="" id="phone" value="${user.phoneNumber}">
			</div>
			<div class="group-form-option-user group-gender">
				<label for="">Giới tính </label>
				<select name="gender" id="gender" value="${user.gender} selected disabled hidden" >
					<option value="Nam">Nam</option>
					<option value="Nữ">Nữ</option>
					<option value="Khác">Khác</option>
 			</select>
			</div>
			<div class="group-form-option-user group-address">
				<label for="">Địa chỉ</label>
				<textarea id="address" name="address" rows="4" cols="50">${user.address}</textarea>
			</div>
			<div  class="group-form-option-user group-status" >
			<label for="">Trạng thái người dùng </label>
			<select name="status" id ="status" > 
				<option value="active">active</option>
				<option value="ban">ban</option>
				<option value="deleted">deleted</option>
			 </select>			
			</div>
			<div class="group-form-option-user group-role"> 
				<label>Quyền</label>
				<select name="role" value="${user.role}" id="role">
					<option  value="admin">admin</option>
					<option value="user">user</option>
 				</select>
			</div>
			<div class="group-form-option-user group-password" >
				<label for="">Mật khẩu</label>
				<input type="text" id="password" value="${user.password}">
			</div>
			<div class="group-form-option-user group-option-user">
				<button id="cancel">Hủy</button>
				<button id="submit"  onclick="updateUser(this.parentElement.parentElement, ${user.id})" >Hoàn tất</button>
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
		gender: form.querySelector('#gender').value,
		address: form.querySelector('#address').value,
		status: form.querySelector('#status').value,
		role: form.querySelector('#role').value,
		password: form.querySelector('#password').value,
	}
	try {
		user = {
			...user,
			image: await convertBase64(form.querySelector('#image').files[0]),
		}
	} catch {}
	
	if (
		user.fullName == "" ||
		user.dateOfBirth == null ||
		user.email == "" ||
		user.phoneNumber == "" ||
		user.gender == "" ||
		user.address == "" ||
		user.status == "" ||
        user.role == "" ||
		user.password == "" ||
		user.image == null
		) {
			alert('Không được để trống')
			return
		} else {
		updateUser(user)
		location.reload()
	}
}

window.searchUser = async () => {
	let valueSearchUser = document.querySelector(
		'.form-search-user input',
	).value
	renderSearch(await getUserBySearch(valueSearchUser))
}

export { userForm }
