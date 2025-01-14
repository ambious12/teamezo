const writeDataForm = document.querySelector('.write > form')
const submitHandler = async (e) => {
    e.preventDefault()

    let body = new FormData(e.target)
    body.append('notice', true)
    body.append('userid', 'admin')
    const insertBoardContent = await axios.post('http://3.35.9.237:3000/notice/write', body, {
        header: {
            ['Content-type']: 'multipart/form-data',
            ['Set-Cookie']: `${document.cookie}`,
        },
    })
    location.href = `/board/view?id=${insertBoardContent.data}`
}
writeDataForm.addEventListener('submit', submitHandler)
