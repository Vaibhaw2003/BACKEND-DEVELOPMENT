import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('jay shri ram')
})

app.get('/profile', (req, res, next) => {
  return next(new Error("somthing went wrong"));
})


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


app.listen(3000);