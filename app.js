var express = require('express')
var request = require('request');
var app = express()


// 用簡單的get
const url = "http://www.google.com"
app.get('/', function (req, res) {
  const text = {
    "response_type": "in_channel",
    "text": "娘子快出來",
    "attachments": [
      {
        "text":"Teng上電視了"
      }
    ]
  }
  res.send(text)
})
app.listen(3000)



// var url = 'http://ironmans.goodideas-studio.com/'
// app.get('/', function (req, res) {
//   res.status(200).send('reading api ...')
//   request(url , function (error, response, body) {
//     console.log(JSON.parse(body)[0].title)
//   })
// })
// app.listen(3000)
