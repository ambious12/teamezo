require('dotenv').config()
const config = {
    db: {
        development: {
            username: process.env.DB_USERNAME || 'teamEzo',
            password: process.env.DB_PASSWORD || 'teamEzo',
            host: process.env.DB_HOST || '3.35.9.237',
            port: process.env.DB_PORT || '3306',
            database: process.env.DATABASE || 'teamezo',
            dialect: 'mysql',
            define: {
                freezeTableName: true,
                timestamps: false,
            },
        },
    },
}

module.exports = config
