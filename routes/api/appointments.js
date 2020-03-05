const router = require("express").Router();
const appointmentsController = require("../../controllers/appointmentsController");
let Appointment = require('../../models/appointment')

// Matches with "/api/books"
router.route("/")
  .get(appointmentsController.findAll)
  .post(appointmentsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(appointmentsController.findById)
  .put(appointmentsController.update)
  .delete(appointmentsController.remove);

// router.route('/update/:id').post((req, res) => {
//   Appointment.findbyId(req.params.id)
//     .then(appointment => {
//       appointment.Day = req.body.Day;
//       appointment.Time = req.body.Time;
//       appointment.Lane = req.body.Lane;
//       appointment.Student = req.body.Student;
//       appointment.Status = req.body.Status;

//       appointment.save()
//         .then(() => res.json('Appointment updated'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
// })

module.exports = router;