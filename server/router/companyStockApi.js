const express = require('express')
const router = express.Router()

router.use(express.json())
require('../db/conn.js')

const ashokley = require('../models/ashokleyStock.js')
const cipla = require('../models/ciplaStock.js')
const eichermot = require('../models/eichermotStock.js')
const reliance = require('../models/relianceStock.js')
const tatasteel = require('../models/tatasteelStock.js')
router.post('/', async (req, res) => {
    res.json({status : 'hello'})
})

router.get('/', async(req, res) => {
   // const {startDate, endDate, Company} = req.body
   const {Company} = req.body
    if(!Company) return res.json({status : 'error in data'})
    let id = JSON.stringify(Company).toLowerCase()
    try {

        if (Company == 'ashokley') {
           
            // const dataLoad = await ashokley.find({ 
            //     Date: {
            //           $gte: new Date(new Date(startDate).setHours(00, 00, 00)),
            //           $lt: new Date(new Date(endDate).setHours(23, 59, 59))
            //            }
            //     }, function(err, results){
                   
            //     }).sort({ Date: 'asc'}).clone()

            

            const dataLoad = await ashokley.find({}).clone()
            res.status(200).json({ status:'success', data: dataLoad })
           
        }
        else if (Company == 'eichermot') {
            const dataLoad = await eichermot.find({ }).clone()
         
            res.status(200).json({ status:'success', data: dataLoad })
        }
        else if (Company == 'cipla') {
            const dataLoad = await cipla.find({ }).clone()

            

         
            res.status(200).json({ status:'success', data: dataLoad })
        }
        else if (Company == 'reliance') {
            const dataLoad = await reliance.find({}).clone()

            

         
            res.status(200).json({ status:'success', data: dataLoad })
        }
        else if (Company == 'tatasteel') {
            const dataLoad = await tatasteel.find({}).clone()

            

         
            res.status(200).json({ status:'success', data: dataLoad })
        }
        else {
            return res.status(400).json({ status: 'error in Company name!' })
        }
    }
    catch (error) {
        return res.status(400).json({ status: error })
    }
})


module.exports=router;