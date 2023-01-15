const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const Schema = mongoose.Schema
var objectId = Schema.objectId
const stockSchema = new Schema({
    Date : {
        type: Date, required: true
        
    },
    Open : {
        type:mongoose.Types.Decimal128,

        default : 0.0
    },
    Close : {
        type:mongoose.Types.Decimal128,

        default : 0.0
    },
    Low : {
        type:mongoose.Types.Decimal128,
        default : 0.0
    },
    High : {
        type:mongoose.Types.Decimal128,
       
        default : 0.0
    },
    AdjClose : {
        type:mongoose.Types.Decimal128,

       default : 0.0
    },
    Volume : {
        type: Number,

        default : 0

    }


}, { timestamps: true })

const nse = mongoose.model('NSE', stockSchema)
module.exports = nse