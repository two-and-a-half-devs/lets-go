const mongoose = require('mongoose');

/* ------------------ DATABASE  ------------------ */
mongoose.connect('mongodb://localhost/letsgo_data');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
  console.log('Successful connection to MongoDB');
});

const emptySchema = new mongoose.Schema({
  'name': String,
  'occupation': String,
});

const Empty = mongoose.model('Empty', emptySchema);

// TEST ENTRY
// const newInstance = new Empty({'name': 'Adrian', 'occupation': 'Hack Reactor'});
//  newInstance.save()
//    .then(function(saved) {
//      console.log('Saved', saved);
//    })
//    .catch(function(err) {
//      console.log('Err while saving', err);
//    });

module.exports = Empty;
