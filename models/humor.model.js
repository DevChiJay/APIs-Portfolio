const mongoose = require('mongoose');

const HumorSchema = new mongoose.Schema(
  {
    title: String,
    status: String,
  },
  { collection: 'humors' }
);

module.exports = mongoose.model('Humor', HumorSchema);
