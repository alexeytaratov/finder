const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const parse = require('./parser.js');

const app = express()
const PORT = process.env.PORT || 5000
app.use(cors())
const dbUrl = 'mongodb+srv://admin:admin000@offerlist.dfj5o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


app.use(express.json({extended: true}))
app.use('/api/requests', require('./routes/requests.route'))

app.post('/search', async (req, res) => {
  // console.log(req.body);
  const result = await parse(req.body);
  // console.log('RESULT=', result.length);
  res.status(200).json(result);
})

async function start() {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    })
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`)
    })
  } catch (e) {
    console.error(e)
  }
}

start();
