const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/noderest', {
    useNewUrlParser:true,
    useUnifiedTopology:true,   
    useCreateIndex:true, 
    useFindAndModify:false
})
.then(response => console.log('Conected to Database..'))
.catch(error => console.log('error ->', error.message));

module.exports = mongoose;