import { getDataFromLocal } from "./local-data.js"
import { createNewId } from "./util.js"


const createNewComment = async (comment) => {
    let { comments } = await getDataFromLocal()
    comment.id = createNewId(comment)
    comments.push(comment)
    localStorage.setItem('comments', JSON.stringify(comments))
}


export { createNewComment }