// models/StartupReport.js
const mongoose = require('mongoose');

const startupReportSchema = new mongoose.Schema({
  mobile: { 
    type: String, 
    required: true, 
    index: true 
  },
  idea: { 
    type: String, 
    required: true 
  },
  result: { 
    type: Object, 
    required: true 
  }
}, { timestamps: true });

module.exports = mongoose.model('StartupReport', startupReportSchema);
