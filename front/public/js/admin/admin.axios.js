const request = axios.create({
    baseURL: 'http://3.35.9.237:3000/admin',
    withCredentials: true,
})

export default request
