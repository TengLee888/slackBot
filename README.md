## 練習slack新增 command
參考：https://api.slack.com/slash-commands
1. 先打開下面網址
https://jj-roof.slack.com/apps/A0F82E8CA-slash-commands?page=1
2. Add configuration
3. 使用ngrok  
    - 下載ngrok```$brew cask install ngrok```
    - 打開ngrok，指令```ngrok http 3000```
    - 把ngrok產生的網址放到slack command的Integration Settings的URL
4. 製作app.js, 看下面import express
5. 簡單的ＧＥＴ練習
```
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
```
6. POST練習
  - insall request
  - ```var request = require('request');```


### import express
https://www.npmjs.com/package/express
```
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```




### ngrok
- 產生一個網址forward到local port
- 指令```ngrok http 3000```
