const mongoose = require("mongoose");
const db = require("../models");

// This file empties the appointments collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/njsg2", function (error) {
  if (error) console.log(error);
  console.log("SUCCESSFULLpt2");
});

const appointmentSeed = [

  {
    Day: "Monday",
    Time: "4:00 - 5:00pm",
    Lane: 1,
    Student: " ",
    Status: "Booked"
  },

  /* 2 */
  {

    Day: "Monday",
    Time: "4:00 - 5:00pm",
    Lane: 2,
    Student: " ",
    Status: "Open"
  },

  /* 3 */
  {

    Day: "Monday",
    Time: "4:00 - 5:00pm",
    Lane: 3,
    Student: " ",
    Status: "Open"
  }

];


db.Appointment
  .remove({})
  .then(() => db.Appointment.collection.insertMany(appointmentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
