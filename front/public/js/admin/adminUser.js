const updateBtn = document.querySelectorAll('.trBody > td > button')
const useridValue = document.querySelectorAll('.trBody > .userid')

for (let i = 0; i < Object.values(updateBtn).length; i++) {
    const userid = Object.values(useridValue)[i].innerHTML
    Object.values(updateBtn)[i].addEventListener('click', (e) => {
        location.href = `http://3.35.9.237:3005/admin/userEdit?userid=${userid}`
    })
}

const pageNumber = document.querySelectorAll('.pageNumber')
const currentPageNumber = location.search.split('=')[1]

for (let i = 0; i < Object.values(pageNumber).length; i++) {
    if (Object.values(pageNumber)[i].textContent === currentPageNumber) {
        Object.values(pageNumber)[i].style.background = '#fdfdfd'
        Object.values(pageNumber)[i].style.color = '#526a7e'
    }
    const number = Object.values(pageNumber)[i].innerHTML
    Object.values(pageNumber)[i].addEventListener('click', (e) => {
        location.href = `http://3.35.9.237:3005/admin/user?page=${number}`
    })
}

const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const totalPage = document.querySelector('#totalPage')

prevBtn.addEventListener('click', (e) => {
    pageNum = Number(location.search.split('=')[1])
    if (pageNum === 1) {
        location.href = `http://3.35.9.237:3005/admin/user?page=${1}`
        alert('첫번째 페이지입니다.')
    } else {
        location.href = `http://3.35.9.237:3005/admin/user?page=${pageNum - 1}`
    }
})

nextBtn.addEventListener('click', (e) => {
    pageNum = Number(location.search.split('=')[1])
    if (pageNum === Number(totalPage.value)) {
        alert('마지막페이지 입니다.')
    } else {
        location.href = `http://3.35.9.237:3005/admin/user?page=${pageNum + 1}`
    }
})
