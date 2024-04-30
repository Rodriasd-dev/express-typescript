import express from 'express'
const app = express()
app.use(express.json())

const PORT = 4000

app.get('/ping', (_,res) => {
    console.log('pinged');
    res.send('pong')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})