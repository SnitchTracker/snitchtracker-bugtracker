const mongoose = require ('mongoose');

const TitleSchema = new moongoose.Schema({
    subject: {type: String, required: true},
    status: {type: Boolean, required: true, default: false},  
    createdAt: {type: Date, default: Date.now}
});
const Title = mongoose.model('Title', TitleSchema);

module.exports= Title;