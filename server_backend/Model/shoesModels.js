const mongoose = require('mongoose');

const shoesSchema = new mongoose.Schema({
    name: { type: String, require },
    size: [],
    price: [],
    category: { type: String, require },
    image: { type: String, require },
    description: { type: String, require }
},
    {
        timeStamps: true,
    })

const shoesModel = mongoose.model('dash-shoe-datas', shoesSchema);

module.exports = shoesModel;
