const express = require('express')
const app = express()
const PORT = 3000

app.get('/greeting/:name', (req, res) =>{
    res.send(`What's up, ${req.params.name}`)

})

app.get('/tip/:total/:tipPercentage', (req, res) =>{
    
    res.send(`${req.params.tipPercentage/100*req.params.total}`)
})

app.listen(PORT, () => {
    console.log('Running in Port 3000')
})