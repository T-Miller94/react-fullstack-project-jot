const express = require('express')
const app = express()
const {Pool} = require('pg')
const { database } = require('pg/lib/defaults')
const PORT = process.env.PORT || 3333
const cors = require('cors')

app.use(cors())
app.use(express.json())

const pool = new Pool({
    host: 'localhost',
    user: 'alex',
    password: '1313',
    database: 'posts'

})

app.get('/posts/:id', async (req, res) => {
    try {
        let id = req.params.id
        let data = await pool.query(`SELECT * FROM posts WHERE genre = $1`, [id])
        res.json(data.rows)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})

app.post('/posts', async (req, res) => {
    let genre = req.body.genre
    let author = req.body.author
    let password = req.body.password
    let title = req.body.title
    let story = req.body.story
    try {
        await pool.query(
            `INSERT INTO posts (genre, author, password, title, story)
            VALUES($1, $2, $3, $4, $5)`,
            [genre, author, password, title, story]
            )
            res.send('Posted')
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})

app.patch('/posts/:id', async (req, res) => {
    let story = req.body.story
    let title = req.body.title
    let id = req.params.id
    try {
        await pool.query(`UPDATE posts SET story = $1, title = $2 WHERE id = $3`, [story, title, id])
            res.json(req.body)
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})

app.delete('/posts/:id', async (req, res) => {
    let id = req.params.id
    try {
        await pool.query(`DELETE FROM posts WHERE id = $1`, [id])
        res.send('Post Deleted')
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
})

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})