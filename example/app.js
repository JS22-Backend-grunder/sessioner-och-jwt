const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000

const userRouter = require('./routes/user')

app.use(express.json())

app.use('/api/user', userRouter)

app.listen(PORT, () => {
  console.log('Server started')
})
