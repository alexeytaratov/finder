
const {Router} = require('express');
const router = Router();
const Requests = require('../models/Requests');

router.get('/', async (req, res) => {
  try {
    const requests = await Requests.find()
    res.json(requests)
  } catch (e) {
    console.log('Error: ', e.message)
  } 
})

router.post('/search',
  async (req, res) => {
    try {
    } catch (e) {
      console.log(e)
    }
  }
)

module.exports = router