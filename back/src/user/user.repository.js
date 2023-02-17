const board = require('../../dummy/board_data')
const { Op } = require('sequelize')

class UserRepository {
    constructor({ User, Board }) {
        this.User = User
        this.Board = Board
    }

    // async checkLogin(payload) {
    //     try {
    //         const { userid, userpw } = { ...payload }
    //         console.log(userid)
    //         console.log(userpw)
    //         const user = await this.User.findOne({
    //             raw: true,
    //             where: {
    //                 userid,
    //                 userpw,
    //             },
    //         })
    //         if (user === null) throw '아이디가 없습니다'
    //         return user
    //     } catch (e) {
    //         next(e)
    //     }
    // }

    async getUserById(userid) {
        try {
            console.log('user.Repository getUserById')
            const user = await this.User.findOne({
                raw: true,
                where: {
                    userid,
                },
            })
            console.log('user.Repository getUserById')
            console.log(user)
            return user
        } catch (e) {
            throw new Error(e)
        }
    }

    async getUserByInfo({ userid, page = 1 }) {
        try {
            console.log('repository userid')
            console.log({ userid, page })
            const user = await this.User.findAll({
                where: {
                    userid,
                },
                include: {
                    model: this.Board,
                    offset: Number(page) * 5 - 4, // Current
                    limit: 5,
                    order: [['id', 'desc']],
                },
            })

            return user
        } catch (e) {
            throw new Error(e)
        }
    }
    async checkUserId({ userid }) {
        try {
            console.log('userRepository checkUserId')
            console.log({ userid })
            const user = await this.User.findOne({
                where: {
                    userid,
                },
            })
            console.log('userRepository checkUserId after')
            console.log(user)
            return user
        } catch (e) {
            throw new Error(e)
        }
    }

    async addUser(userInfo) {
        try {
            console.log('user.repository')
            console.log(userInfo)

            const [user, created] = await this.User.findOrCreate({
                where: { userid: userInfo.userid },
                defaults: {
                    userpw: userInfo.userpw,
                    username: userInfo.username,
                    email: userInfo.email,
                },
                raw: true,
            })

            console.log('user.repository after')
            console.log(user)
            console.log('user.repository after')
            console.log(created)
            return [user, created]
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = UserRepository
