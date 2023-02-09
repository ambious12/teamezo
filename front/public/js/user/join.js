const agreeUse = document.querySelector('#agreeUse')
const agreeInfo = document.querySelector('#agreeInfo')
const duplicateBtn = document.querySelector('.duplicate')
const joinInputId = document.querySelector('.joinInputId')
const joinCheck = document.querySelectorAll('.joinCheck')
const joinInput = document.querySelectorAll('.joinInput')
const joinBtn = document.querySelector('.joinBtn')

joinBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (joinInput[0].value !== joinInput[1].value) {
        joinCheck[2].innerHTML = '비밀번호가 틀려욧!!!!'
    } else {
        joinCheck[2].innerHTML = '비밀번호 확인완료!!'
        location.href = '/user/welcome'
    }
})

duplicateBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const testUserId = 'test'
    if (testUserId === joinInputId.value) {
        joinCheck[0].innerHTML = '중복된 아이디입니다.'
    } else {
        joinCheck[0].innerHTML = '사용가능한 아이디입니다.'
    }
})

const toggle = (element) => {
    element.addEventListener('click', (e) => {
        e.target.classList.toggle('yellow')
    })
}

toggle(agreeUse)
toggle(agreeInfo)
