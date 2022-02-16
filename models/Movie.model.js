//  Add your code here


const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    title : {
      type: String,
    },
    genre  : {
      type: String
    },

    plot : {
      type: String,
    },

    cast : {
      type: []
    }
  });

  
module.exports = model("Movie", movieSchema);
