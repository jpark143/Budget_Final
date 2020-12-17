const mongoose = require('mongoose');

//Connecting to mongodb
mongoose.connect('mongodb://localhost/budget');

mongoose.connection.once('open'.function(){
    console.log('Connection complete')
}).on('error'.function(error){
    console.log('Connection error: '. error);
});