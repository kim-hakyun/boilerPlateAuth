
// const express = require('express')
// 프런트 앤드의 import 문법과 유사함

const express = require('express')
const app = express()
const port = 5000
//express 를 설치 했으니 가져오고 
// app 라는 함수를 만들고
// port 에는 3000 (3000 이나 5000 ) 넣는다.


const config = require ('./config/key');

const bodyParser = require ('body-parser');
const { User } = require ('./models/User');
//기존에 만들어 둔 User 모델을 가져온다.

//  아래 두개의 app.use는 이렇게 생긴 데이터를 분석해서 가져온다.
// application /x-www-form-urlencoded 
app.use(bodyParser.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json());

// bodyparser 는 클라이언트에서 오는 정보를 분석해서 서버로 가져올 수 있게 하는 것

const mongoose = require('mongoose')
// 몽구스를 이욯해 우리 앱을 몽고BD에 연결하는 것
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
// useNewUr... 이것들 4개를 써주어야 에러가 나지 않는다.
}) .then (()=> console.log('mongoDB connected.....'))
// then 이하  연결이 잘되었으면
.catch ( err => console.log(err))
// catch 이하 연결이 잘안되었으면


app.get('/', (req, res) => {
  res.send('Hello World! 이것들이 정말 어렵네')
})


// 회원가입 라우트 만들기 
// post 매서드를 이용한다.  콜백평션으로  (req, res) => {} 형식으로 사용한다.
app.post('/register', (req, res) => {

   // 회원가입정보를  client 에서 가져오면
   // 그 정보들을 데이터베이스에 넣어준다

   const user = new User(req.body)
   
   // req.body에는
   // {
   //    id: "",
   //    password: ""
   // }

    user.save( (err, userInfo) => {
        if (err) return res.json({ success: false, err})  
        // 만약 에러이면 json 형식으로 응답을 돌려준다 성공하지 못했다.. err 에러메세지와 함께 
        return res.status(200).json({
            success: true
        // 성공이면 클라이언트에 200 과 json 형식으로 성공했다고 보내준다
        })
    })
   // user.save() 는  몽고db 매서드이다
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//  app(express함수).get 
// 주소  '/'(루트)에 오면, 요청과 답장이 있는데 
//  hello world 를 보내는 답장을 보낸다(res.send). (의역: 출력된도록 한다.)

// app(express함수).listen
//port에 (변수) 들어온 값 3000 이나 5000 이 들어오면 뒤의 에로우 함수를 실행한다.

// res.send()  가로안의 답장을 플런트앤드에 보내는 매서드
// console.log()  가로안의 내용을 터미널의 콘솔 로그에 보여라
// app 먼저 실행하고
// mongoose.connected 를 출력한다.