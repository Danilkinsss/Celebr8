import express, { Router } from 'express'
import cors from 'cors'
import router from './router'
import morgan from 'morgan'

const app = express()
app.use(cors())

app.use(express.json())
app.use(morgan('dev'))
app.use(router)

app.listen(8080, () => {
  console.log('🍩 Server running and litening on http://localhost:8080')
})
