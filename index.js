const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')


// const express = require('express')
// 프런트 앤드의 import 문법과 유사함

//express 를 설치 했으니 가져오고 
// app 라는 함수를 만들고
// port 에는 3000 (3000 )



// 몽구스를 이욯해 우리 앱을 몽고BD에 연결하는 것
mongoose.connect('mongodb+srv://hykim:dbuser@cluster0.2owbr.mongodb.net/auth?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
// useNewUr... 이것들 4개를 써주어야 에러가 나지 않는다.
}) .then (()=> console.log('mongoDB connected.....'))
// then 이하  연결이 잘되었으면
.catch ( err => console.log(err))
// catch 이하 연결이 잘안되었으면


app.get('/', (req, res) => {
  res.send('Hello World! 이것들이 정말 어렵네')
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