const mongoose = require('mongoose');

const surveyResultSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  mobile: { type: String, required: true },  // added mobile
  idea: { type: String, required: true },    // added idea
  q1:  { type: String, required: true },
  q2:  { type: String, required: true },
  q3:  { type: String, required: true },
  q4:  { type: String, required: true },
  q5:  { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('SurveyResult', surveyResultSchema);
