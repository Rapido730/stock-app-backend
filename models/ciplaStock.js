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

      required: true,
    },
    Close: {
      type: Number,

      required: true,
    },
    Low: {
      type: Number,
      required: true,
    },
    High: {
      type: Number,

      required: true,
    },
    AdjClose: {
      type: Number,

      required: true,
    },
    Volume: {
      type: Number,

      required: true,
    },
  },
  { timestamps: true }
);

const cipla = mongoose.model("CIPLA", stockSchema);
module.exports = cipla;
