import axios from "axios";

export default {
  // Gets all appointments
  getAppointments: function () {
    return axios.get("/api/appointments");
  },
  // Gets the appointment with the given id
  getAppointment: function (id) {
    return axios.get("/api/appointments/" + id);
  },
  // Deletes the appointment with the given id
  deleteAppointment: function (id) {
    return axios.delete("/api/appointments/" + id);
  },
  // Saves an appointment to the database
  saveAppointment: function (appointmentData) {
    return axios.post("/api/appointments", appointmentData);
  }
};
