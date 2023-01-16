const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const Schema = mongoose.Schema;
var objectId = Schema.objectId;
const stockSchema = new Schema(
  {
    Date: {
      type: Date,
      required: true,
    },
    Open: {
      type: Number,

      default: 0.0,
    },
    Close: {
      type: Number,

      default: 0.0,
    },
    Low: {
      type: Number,
      default: 0.0,
    },
    High: {
      type: Number,

      default: 0.0,
    },
    AdjClose: {
      type: Number,

      default: 0.0,
    },
    Volume: {
      type: Number,

      default: 0,
    },
  },
  { timestamps: true }
);

const nse = mongoose.model("NSE", stockSchema);
module.exports = nse;
