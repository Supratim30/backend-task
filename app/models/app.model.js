const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
  datas:{
    type: Array,
    required: true
  },
  //type
  //breed
  //age
  // type:{
  //   type: String,
  //   required: true
  // },
  // breed:{
  //   type: String,
  //   required: true
  // },
  // age:{
  //   type: Number,
  //   required: true 
  // }
});

module.exports = mongoose.model("App", AppSchema);