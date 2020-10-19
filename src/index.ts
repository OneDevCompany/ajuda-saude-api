import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'

const origin = {
  // origin: isProduction ? 'https://dddforum.com' : '*',
  origin: '*',
}

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors(origin))
app.use(compression())
app.use(helmet())
app.use(morgan('combined'))

app.use('/api/v1', (req, res) => {
  const name = req.body?.name || 'Guest'

  const twoSeconds = 2000

  setTimeout(() => {
    res.status(200).json({
      message: `Hello, ${name}`,
    })
  }, twoSeconds)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`[App]: Listening on port ${port}`)
})
