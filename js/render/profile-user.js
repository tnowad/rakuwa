import { getDataFromLocal } from '../util/local-data.js'
const render = async () => {
	const { currentUser } = await getDataFromLocal()
    
}
render()
