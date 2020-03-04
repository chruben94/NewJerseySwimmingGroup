import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import "./style.css";

class Detail extends Component {
  state = {
    appointment: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getAppointment(this.props.match.params.id)
      .then(res => this.setState({
        appointment
          : res.data
      }))
      .catch(err => console.log(err));

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
            <article>
              <h1>Day:</h1>
              <p>
                {this.state.appointment.Day}
              </p>
              <h1>Time:</h1>
              <p>
                {this.state.appointment.Time}
              </p>
              <h1>Lane:</h1>
              <p>
                {this.state.appointment.Lane}
              </p>
              <h1>Student:</h1>
              <p>
                {this.state.appointment.Student}
              </p>
              <h1>Status:</h1>
              <p>
                {this.state.appointment.Status}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Appointments</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
