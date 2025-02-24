const express = require('express')
const bodyParser = require('body-parser')
const weatherRequest = require('./requests/weather.request')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (request, response) => {
  response.render('index', { weather: null, error: null})
})

app.post('/', async (request, response) => {
  // console.log(request.params)
  // console.log(request.body)
  const { city } = request.body

  const {weather, error} = await weatherRequest(city)

  // console.log('Weather ', weather);
  // console.log('Error ', error);
  
  // console.log(city);
  response.render('index', { weather, error })
})



app.listen(3000, () => {
  console.log('Server has started on port 3000 ...');
  
})