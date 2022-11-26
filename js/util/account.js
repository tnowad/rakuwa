import { getDataFromLocal } from '../server/local-data.js'

let { users } = await getDataFromLocal()

const login = (username, password) => {
    const currentUser = users.filter(user => user.username == username && user.password == password)
    if (currentUser.length > 0) {
        localStorage.setItem('currentUser', JSON.stringify(currentUser[0]))
        return true
    }
    return false
}
const logout = () => {
    localStorage.setItem('currentUser', '{}')
}
const isUsernameValid = (username) => {
    const usernameRegex = /^[a-z0-9_.]+$/
    if (!usernameRegex.test(username)) {
        return false
    }
    if (users.map(user => user.username).includes(username)) {
        return false
    }
    return true
}
const idPasswordValid = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    return passwordRegex.test(password)
}
const register = (user) => {
    // TODO: Check valid user
    if (!isUsernameValid(user.username)) {
        return false
    } else {
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
        return true
    }
}
export {
    login,
    register,
    logout
}