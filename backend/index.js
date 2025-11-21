import express from 'express'

const app = express()
const port = 3000

const homePageHandler = (req, res) => {
    res.status(200).json({message: "test"})
}

app.get('/', homePageHandler)

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})