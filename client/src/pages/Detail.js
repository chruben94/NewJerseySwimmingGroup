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
      Day: "",
      Time: "",
      Lane: "",
      Student: "",
      Status: ""
    };
  }

  componentDidMount() {
    API.getAppointment(this.props.match.params.id)
      .then(res =>
        this.setState({
          Day: res.data.Day,
          Time: res.data.Time,
          Lane: res.data.Lane,
          Student: res.data.Student,
          Status: res.data.Status
        }))
      .catch(err => console.log(err));

  }
  onChangeDay(e) {
    this.setState({
      // appointment: {
      Day: e.target.value
      // }
    })
  }

  onChangeTime(e) {
    this.setState({
      // appointment: {
      Time: e.target.value
      // }
    })
  }

  onChangeLane(e) {
    this.setState({
      // appointment: {
      Lane: e.target.value
      // }
    })
  }

  onChangeStudent(e) {
    this.setState({
      // appointment: {
      Student: e.target.value
      // }
    })
  }

  onChangeStatus(e) {
    this.setState({
      // appointment: {
      Status: e.target.value
      // }
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const appointment = {
      Day: this.state.Day,
      Time: this.state.Time,
      Lane: this.state.Lane,
      Student: this.state.Student,
      Status: this.state.Status
    }

    console.log(appointment);
    API.updateAppointment(
      this.props.match.params.id,
      {
        Day: this.state.Day,
        Time: this.state.Time,
        Lane: this.state.Lane,
        Student: this.state.Student,
        Status: this.state.Status,
      })
      .then(res => this.loadAppointments())
      .catch(err => console.log(err));
  };
  // e.preventDefault();

  // const appointment = {
  //   Day: this.state.Day,
  //   Time: this.state.Time,
  //   Lane: this.state.Lane,
  //   Student: this.state.Student,
  //   Status: this.state.Status
  // }

  // console.log(appointment);

  // axios.post("/appointments/update/" + this.props.match.params.id, appointment)
  //   .then(res => console.log(res.data));

  // window.location = "/appointments/" + this.props.match.params.id;
  // }

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

            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Day:</label>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.Day}
                  onChange={this.onChangeDay}
                />
              </div>


              <div className="form-group">
                <label>Time:</label>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.Time}
                  onChange={this.onChangeTime}
                />
              </div>

              <div className="form-group">
                <label>Lane:</label>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.Lane}
                  onChange={this.onChangeLane}
                />
              </div>

              <div className="form-group">
                <label>Student:</label>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.Student}
                  onChange={this.onChangeStudent}
                />
              </div>

              <div className="form-group">
                <label>Status:</label>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.Status}
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
