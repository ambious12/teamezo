const writeDataForm = document.querySelector('.write > form')
const submitHandler = async (e) => {
    e.preventDefault()

    let body = new FormData(e.target)
    body.append('userid', document.cookie)
    const insertBoardContent = await axios.post('http://3.35.9.237:3000/qna/write', body, {
        header: {
            ['Content-type']: 'multipart/form-data',
        },
    })
    location.href = `/qna/view?id=${insertBoardContent.data}`
}
writeDataForm.addEventListener('submit', submitHandler)
