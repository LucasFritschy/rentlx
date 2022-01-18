import express from 'express'

const app = express()

app.get('/', (request, response) => response.json({ message: 'hello bacana' }))

app.listen(3333)
