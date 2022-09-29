const express = require('express')
const app = express()
const PORT = 3000

app.get('/greeting/:name', (req, res) =>{
    res.send(`What's up, ${req.params.name}`)

})

app.get('/tip/:total/:tipPercentage', (req, res) =>{
    
    res.send(`${req.params.tipPercentage/100*req.params.total}`)
})

app.get('/magic/:question',(req, res) => {
    const answers =["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    let ran = Math.floor(Math.random()* answers.length)
    res.send(`${req.params.question}: <h2>${answers[ran]}</h2>`)
})

app.listen(PORT, () => {
    console.log('Running in Port 3000')
})