const express = require('express')
const router = express.Router()

router.use(express.json())
require('../db/conn.js')

const nse = require('../models/nseStock.js')
const bse = require('../models/bseStock.js')

router.get('/', async(req, res)=>
{
    const {sensex} = req.body
    if(!sensex) return res.status(400).json({status : 'error in data'})
    if(sensex == 'nse')
    {
        const dataLoad = await nse.find({}).clone()
        res.status(200).json({ status:'success', data: dataLoad })

    }
    else if(sensex == 'bse'){
        const dataLoad = await bse.find({}).clone()
        res.status(200).json({ status:'success', data: dataLoad })
    }
    else{
        res.status(400).json({status : 'error'})
    }
})
module.exports = router