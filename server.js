import express from 'express'
import morgan from 'morgan'
import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'

import routes from './routes/index.js'
import { getStats } from './utils/stats.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(morgan('dev'))
app.use(express.json())
app.use(express.static('public'))

app.use('/api', routes)

app.get('/', (req, res) => {
  const stats = getStats()
  res.render('dashboard', { stats })
})

app.listen(PORT, () => console.log(`💻 Adonix API v2 running on http://localhost:${PORT}`))
