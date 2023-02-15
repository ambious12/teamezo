class UserService {
    constructor({ userRepository, jwt }) {
        this.userRepository = userRepository
        this.jwt = jwt
        this.crypto = jwt.crypto
    }

    // async loginChk({ userid, userpw }) {
    //     try {
    //         if (!userid || !userpw) throw '아이디 패스워드없음 이쪽 나중에수정'
    //         const payload = {
    //             userid,
    //             userpw,
    //         }
    //         console.log(payload)
    //         const user = await this.userRepository.checkLogin(payload)

    //         // const algorithm = process.env.ALGORITHM
    //         // const typ = process.env.TYP
    //         // const option = { algorithm, typ }
    //         // const hash = jwt.sign(user.userid, process.env.SALT, option)
    //         res.json(hash)
    //     } catch (e) {
    //         next(e)
    //     }
    // }

    // async getInfo(token) {
    //     try {
    //         console.log('user.service process.env.SALT')
    //         console.log(process.env.SALT)
    //         const { userid } = this.jwt.verify(token, process.env.SALT)
    //         const user = await this.userRepository.getUserById(userid)
    //         console.log('user.Service getInfo')
    //         console.log(user)
    //         return user
    //     } catch (e) {
    //         throw new Error(e)
    //     }
    // }

    async loginIdChk({ userid }) {
        try {
            console.log('userService loginIdChk')
            const userId = await this.userRepository.checkUserId({ userid })
            console.log('userService loginIdChk after')
            console.log(userId)
            if (userId === null) {
                return userId
            } else throw '아이디 중복인디?!'
        } catch (e) {
            throw new Error(e)
        }
    }

    async userCheck({ userid, page }) {
        try {
            console.log('user.service')
            const user = await this.userRepository.getUserByInfo({ userid, page })
            console.log('service user')
            console.log(user)
            return user
        } catch (e) {
            throw new Error(e)
        }
    }

    /** 회원가입  */
    async joinChk(payload) {
        try {
            if (!payload.userid) throw '값을 입력해주세요'

            const hash = this.crypto
                .createHmac('sha256', process.env.SALT)
                .update(payload.userpw)
                .digest('hex')
            console.log('hash')
            console.log(hash)
            const [user, created] = await this.userRepository.addUser({
                userid: payload.userid,
                userpw: hash,
                username: payload.username,
                email: payload.email,
            })

            if (created === false) throw '아이디 중복된다구~'
            return user
        } catch (e) {
            throw new Error(e)
        }
    }
    /** 회원가입  */
}

module.exports = UserService
