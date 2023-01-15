const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const Schema = mongoose.Schema

const stockSchema = new Schema({
    Date : {
        type: Date, required: true
        
    },
    Open : {
        type:mongoose.Types.Decimal128,

       required : true
    },
    Close : {
        type:mongoose.Types.Decimal128,

       required : true
    },
    Low : {
        type:mongoose.Types.Decimal128,
        required : true
    },
    High : {
        type:mongoose.Types.Decimal128,
       
        required : true
    },
    AdjClose : {
        type:mongoose.Types.Decimal128,

       required : true
    },
    Volume : {
        type: Number,

        required: true

    }


}, { timestamps: true })

const stock = mongoose.model('stock', stockSchema)
module.exports = stock