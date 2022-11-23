const mongoose = require("mongoose");

const CaseSchema = mongoose.Schema({
  caseNo: {
    type: Number,
    required: [true, "Enter case number."],
    min: [1000, "Case Number should be more then 1000."],
    max: [99999, "Case Number should be less then 99999."],
  },
  branch: {
    type: String,
    required: [true, "Enter branch."],
  },
  reportingMethod: {
    type: String,
    required: [true, "Enter reporting method."],
  },
  date: {
    type: Date,
    default: new Date(),
  },
  category: {
    type: String,
    required: [true, "Enter category."],
  },
  subCategory: {
    type: String,
    required: [true, "Enter sub category."],
  },
  priority: {
    type: String,
    default: "Low",
  },
  nature: {
    type: String,
    required: [true, "Enter nature."],
  },
  caseManager: {
    type: String,
    required: [true, "Enter case manager."],
  },
  caseReporter: {
    type: String,
    required: [true, "Enter case reporter."],
  },
  caseStatus: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Case", CaseSchema);
