const { Schema, model } = require('mongoose');


const productSchema = new Schema({
   
    productname: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        
        
    }
},

    {
        timestamps: true
    }
);


module.exports = model('products', productSchema);