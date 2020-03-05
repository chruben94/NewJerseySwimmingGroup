import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import "./style.css";
import fire from "./Fire";


class Appointments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appointments: [],
      Day: "",
      Time: "",
      Lane: "",
      Student: "",
      Status: ""
    }
  };

  componentDidMount() {
    this.loadAppointments();
  }

  loadAppointments = () => {
    API.getAppointments()
      .then(res =>
        this.setState({ appointments: res.data, Day: "", Time: "", Lane: "", Student: "", Status: "" })
      )
      .catch(err => console.log(err));
  };

  deleteAppointment = id => {
    API.deleteAppointment(id)
      .then(res => this.loadAppointments())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.Day && this.state.Time) {
      API.saveAppointment({
        Day: this.state.Day,
        Time: this.state.Time,
        Lane: this.state.Lane,
        Student: this.state.Student,
        Status: this.state.Status,

      })
        .then(res => this.loadAppointments())
        .catch(err => console.log(err));
    }
  };

  logout() {
    fire.auth().signOut();
  }

  render() {

    const appointment = this.state.Day
    console.log(appointment)
    return (
      <Container fluid>
        <button style={buttonStyle} onClick={this.logout}>Logout</button>
        <Row>
          <Col size="md-6">
            <h1>Create Appointment</h1>
            <form>
              <Input
                value={this.state.Day}
                onChange={this.handleInputChange}
                name="Day"
                placeholder="Day (required)"
              />
              <Input
                value={this.state.Time}
                onChange={this.handleInputChange}
                name="Time"
                placeholder="Time (required)"
              />
              <Input
                value={this.state.Lane}
                onChange={this.handleInputChange}
                name="Lane"
                placeholder="Lane (required)"
              />
              <Input
                value={this.state.Student}
                onChange={this.handleInputChange}
                name="Student"
                placeholder="Student (required)"
              />
              <Input
                value={this.state.Status}
                onChange={this.handleInputChange}
                name="Status"
                placeholder="Status (required)"
              />
              <FormBtn
                disabled={!(this.state.Day && this.state.Time)}
                onClick={this.handleFormSubmit}
              >
                Schedule
              </FormBtn>
            </form>

          </Col>
          <Col size="md-6 sm-12">
            <h1>Booked Appointments</h1>
            {this.state.appointments.length ? (
              <List>
                {this.state.appointments.map(appointment => (
                  <ListItem key={appointment._id}>
                    <Link to={"/appointments/" + appointment._id}>
                      <strong>
                        Day: {appointment.Day} , Time: {appointment.Time}, Lane: {appointment.Lane}, Student: {appointment.Student}, Status: {appointment.Status}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteAppointment(appointment._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>

        </Row>

      </Container>
    );
  }
}

const buttonStyle = {
  color: 'black',
  padding: '5px',
  borderRadius: '10px',
  background: 'lightblue',
  float: 'right'
}

export default Appointments;
