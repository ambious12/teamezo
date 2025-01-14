/* 클릭시 좋아요 이미지 변경*/
const changeIMG = document.querySelector('.changeIMG')
const img = document.querySelectorAll('.changeIMG > img')
const arr = Object.values(img) // 리턴값->배열 : 유사배열 벗기기
const likedPost = document.querySelectorAll('#likedPost > input')

for (let i = 0; i < arr.length; i++) {
    img[i].setAttribute('value', `${i}`)
    arr[i].addEventListener('click', async (e) => {
        const boardId = Object.values(likedPost)[i].value
        const userid = document.cookie.split('=')[1]
        // const {boardId, userid} = 어디서 받아오지
        const response = await axios.post('http://3.35.9.237:3000/board/list', { boardId, userid })

        if (response.data != 1) {
            e.target.removeAttribute('src')
            e.target.setAttribute('src', '/img/thumsupClick.png')
        } else {
            e.target.removeAttribute('src')
            e.target.setAttribute('src', '/img/thumsup.png')
        }
    })
} // 모든 이미지에 이벤트 걸어버려서 e.target에 걸리는 애는 그냥 바로 이벤트 걸리게 만들어놓음

/*페이징 다음, 이전 이벤트*/
const prevBtn = document.querySelector('.listPagingPrev')
const nextBtn = document.querySelector('.listPagingNext')

const prev = (e) => {
    pageNum = Number(location.search.split('=')[1])
    if (pageNum === 1) {
        location.href = `http://3.35.9.237:3005/board/list?page=${1}`
        alert('첫번째 페이지입니다.')
    } else {
        location.href = `http://3.35.9.237:3005/board/list?page=${pageNum - 1}`
    }
}
const next = (e) => {
    pageNum = Number(location.search.split('=')[1])
    if (pageNum === Number(totalPage.value)) {
        alert('마지막페이지 입니다.')
    } else {
        location.href = `http://3.35.9.237:3005/board/list?page=${pageNum + 1}`
    }
}

prevBtn.addEventListener('click', prev)
nextBtn.addEventListener('click', next)
