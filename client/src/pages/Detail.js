import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import "./style.css";
import axios from 'axios'

class Detail extends Component {
  constructor(props) {
    super(props);

    this.onChangeDay = this.onChangeDay.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeLane = this.onChangeLane.bind(this);
    this.onChangeStudent = this.onChangeStudent.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      appointment: {}
    };
  }

  componentDidMount() {
    API.getAppointment(this.props.match.params.id)
      .then(res => this.setState({
        appointment
          : res.data
      }))
      .catch(err => console.log(err));

  }
  onChangeDay(e) {
    this.setState({
      Day: e.target.value
    })
  }

  onChangeTime(e) {
    this.setState({
      Time: e.target.value
    })
  }

  onChangeLane(e) {
    this.setState({
      Lane: e.target.value
    })
  }

  onChangeStudent(e) {
    this.setState({
      Student: e.target.value
    })
  }

  onChangeStatus(e) {
    this.setState({
      Status: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const appointment = {
      Day: this.state.appointment.Day,
      Time: this.state.appointment.Time,
      Lane: this.state.appointment.Lane,
      Student: this.state.appointment.Student,
      Status: this.state.appointment.Status
    }

    console.log(appointment);

    axios.post("/appointments/appointments/update" + this.porps.match.params.id, appointment)
      .then(res => console.log(res.data));

    window.location = "/appointments";
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Swimming Lesson Appointment
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">

            <form onSubmit={this.onSubtmit}>
              <div className="form-group">
                <label>Day:</label>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.appointment.Day}
                  onChange={this.onChangeDay}
                />
              </div>


              <div className="form-group">
                <label>Time:</label>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.appointment.Time}
                  onChange={this.onChangeTime}
                />
              </div>

              <div className="form-group">
                <label>Lane:</label>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.appointment.Lane}
                  onChange={this.onChangeLane}
                />
              </div>

              <div className="form-group">
                <label>Student:</label>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.appointment.Student}
                  onChange={this.onChangeStudent}
                />
              </div>

              <div className="form-group">
                <label>Status:</label>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.appointment.Status}
                  onChange={this.onChangeStatus}
                />
              </div>

              <div className="form-group">
                <input type="submit" value="Edit Appointment" className="btn btn-primary" />
              </div>







            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/appointments">← Back to Appointments</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
