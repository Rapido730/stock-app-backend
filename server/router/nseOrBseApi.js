const express = require('express')
const router = express.Router()

router.use(express.json())
require('../db/conn.js')

const nse = require('../models/nseStock.js')
const bse = require('../models/bseStock.js')

router.get('/nse', async(req, res)=>
{
        try{

            const dataLoad = await nse.find({}).clone()
            res.status(200).json( dataLoad )
        }catch(error){
            res.status(404).json({ error: error });
        }
})


router.get("/bse", async (req, res) => {
  try {
    const dataLoad = await bse.find({}).clone();
    res.status(200).json( dataLoad );
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

module.exports = router