const TextSchema = new moongoose.Schema({
    note: {type: String, required: true},
    status: {type: Boolean, required: true, default: false},  
   
});
const Text = mongoose.model('Text', TextSchema);

module.exports= Text;