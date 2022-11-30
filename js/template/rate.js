let rate = (rating) => {
    const star = Math.floor(rating)
    let html = ''
    for (let i = 1; i <= 5; i++) {
        if (i <= star) {
            html += '<em class="fas fa-star active"></em>'
        } else {
            html += '<em class="fas fa-star"></em>'
        }
    }
    return html
}

export { rate }
