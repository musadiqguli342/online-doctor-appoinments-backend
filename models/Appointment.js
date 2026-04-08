const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  patientEmail: { type: String, required: true },
  datetime: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "confirmed"],
    default: "pending",
  },
});
appointmentSchema.index({ datetime: 1 }, { expireAfterSeconds: 86400 }); // 1 day after appointment datetime

module.exports = mongoose.model("Appointment", appointmentSchema);
