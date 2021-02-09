// 처음 시작하는 곳 //

const mongoose = require('mongoose')

const userSchma = mongoose.Schema({
    name: {
        type: String,
        maxleght: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1,
    },
    password: {
        type: String,
        minleght: 6,
        maxleght: 15,
    },
    lastname: {
        type: String,
        maxleght: 50
    },
    role: {
        type: Number,
        default: 0,
    },
    image: String,
    token: {
        type: String,
    },
    tokenExp: {
        type: Number,
    },
    
})
//  mongoose.Schema({ }) 는 개인이나 접속한 user의 정보를 담는다


// 스키마를 모델로 감싸준다 mongoose.model()

const User = mongoose.model('User', userSchma )

module.exports = { User }

