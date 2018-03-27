const mongoose = require('mongoose')

mongoose.Promise = Promise

if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect('mongodb://localhost/starving-artist')
}

module.exports = mongoose
