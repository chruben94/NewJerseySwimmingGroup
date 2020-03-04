const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  Day: { type: String, required: true },
  Time: { type: String, required: true },
  Lane: { type: Number, required: true },
  Student: String,
  Status: { type: String, required: true }
});

const Appointment = mongoose.model("Book", appointmentSchema);

module.exports = Appointment;
