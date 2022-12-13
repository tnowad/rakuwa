import { getDataFromLocal } from '../util/local-data.js'
import { createNewComment } from '../util/product-detail.js'
import { handleTime } from '../util/product.js'
import { getUserById } from '../util/user.js'
import { getParams } from '../util/util.js'
import { rate } from './rate.js'



let productDetail = (product) => /* html */ `
    <div class="product-details-top-right">
        <div class="product-detail-slide-show">
            <img src="${product.image}" alt="">
        </div>
    </div>
    <div class="product-details-top-left">
        <span class="stock-status ${product.label}"></span>
        <h2 class="title-detail">
            ${product.title}
        </h2>
        <div class="product-detail-rating">
            <a class="product-rate">
                ${rate(product.rating)}
            </a>
        </div>
        <span
            class="product-category ${product.category}">
        </span>
        <div class="product-detail-price">
            <span class="product-detail-price-current">
                ${new Intl.NumberFormat('ja-JP').format(product.price)} VNĐ
            </span>
            <span class="product-detail-price-old">
                ${product.oldPrice || ''}
            </span>
        </div>
        <div action="" class="product-add-to-cart">
            <input
                type="submit"
                value="Thêm vào giỏ hàng"
                onclick="addProductIdToCart(${product.id})">
        </div>
        <h2>Thông tin sản phẩm</h2>
        <p class="product-detail-description">
            ${product.description}
        </p>
    </div>
`

const commentRow = async (comment) => {
    const user = await getUserById(comment.userId)
    if (comment.cartId != getParams('id')) return ''
    if (user == undefined) return ''
    let time = await handleTime(comment)
    let timeUnit = ''
    if (time > 60) {
        time = Math.floor(time / 60)
        timeUnit = ' giờ'
    }
    else if (time > 60 * 24) {
        time = Math.floor(time / (60 * 24))
        timeUnit = ' ngày'
    }
    else if (time > 60 * 24 * 7) {
        time = Math.floor(time / (60 * 24 * 7))
        timeUnit =' tuần'
    }
    else if (time > 60 * 24 * 30) {
        time = Math.floor(time/(60*24*30))
        timeUnit ='ngày'
        timeUnit = ' tháng'
    }
    else timeUnit = ' phút'
    return `
    <div class="comment">
							<div class="comment-top">
								<a class="comment-name">${user.fullName}</a>
								<a class="comment-rating">
									<a class="product-rate">
										<em class="fas fa-star active"></em
										><em class="fas fa-star active"></em
										><em class="fas fa-star active"></em
										><em class="fas fa-star active"></em
										><em class="fas fa-star"></em>
									</a>
								</a>
							</div>
							<div class="comment-center">
								<a class="comment-content">${comment.body}</a
								>
							</div>
							<div class="comment-bottom">
								<a href="" class="comment-discuss">Thảo luận</a>
								<a href="" class="comment-like"
									><i class="fas fa-thumbs-up"></i> Thích</a
								>
								<a>hơn ${time} ${timeUnit} trước</a>
							</div>
						</div>`
}

window.addProductComments = async () => {
    const commentText = document.querySelector('.comment-input').value
    if (commentText == '') {
        alert('Vui lòng nhập nội dung bình luận')
        return
    }
    let { currentUser } = await getDataFromLocal()
    const cartId = getParams('id')
    console.log(cartId)
    let comment = {
        body: commentText,
        time: Date.now(),
        userId: currentUser.id ,
        cartId: cartId
    }
    createNewComment(comment)
    screenComment(comment)
}

const screenComment = async (comment) => { 
    const tableComment = document.querySelector('.product-comments')
    tableComment.innerHTML += await newComments(comment)
}

const newComments = async (comment) => {
    const user = await getUserById(comment.userId)
    if (user == undefined) return ''
    let time = await handleTime(comment)
    let timeUnit = ''
    if (time > 60) {
        time = Math.floor(time / 60)
        timeUnit = ' giờ'
    }
    else if (time > 60 * 24) {
        time = Math.floor(time / (60 * 24))
        timeUnit = ' ngày'
    }
    else if (time > 60 * 24 * 7) {
        time = Math.floor(time / (60 * 24 * 7))
        timeUnit =' tuần'
    }
    else if (time > 60 * 24 * 30) {
        time = Math.floor(time/(60*24*30))
        timeUnit ='ngày'
        timeUnit = ' tháng'
    }
    else timeUnit = ' phút'
    return `
    <div class="comment">
							<div class="comment-top">
								<a class="comment-name">${user.fullName}</a>
								<a class="comment-rating">
									<a class="product-rate">
										<em class="fas fa-star active"></em
										><em class="fas fa-star active"></em
										><em class="fas fa-star active"></em
										><em class="fas fa-star active"></em
										><em class="fas fa-star"></em>
									</a>
								</a>
							</div>
							<div class="comment-center">
								<a class="comment-content">${comment.body}</a
								>
							</div>
							<div class="comment-bottom">
								<a href="" class="comment-discuss">Thảo luận</a>
								<a href="" class="comment-like"
									><i class="fas fa-thumbs-up"></i> Thích</a
                                    >
                                    <a>hơn ${ time } ${timeUnit} phút trước</a>
							</div>
						</div>`
}


export { productDetail,screenComment,newComments,commentRow } 
