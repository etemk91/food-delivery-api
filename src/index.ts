import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json())

// Basic route
app.get('/', (req, res) => {
  res.send('Food Delivery API')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
