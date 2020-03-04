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
