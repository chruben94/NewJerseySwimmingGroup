import React, { component } from 'react';
import axios from "axios";

export default class Edit extends Component {
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
            Status: "",
            appointments: []
        }


    }



    componentDidMount() {
        axios.get("/appointments" + this.props.match.params.id)
            .then(response => {
                this.setState({
                    Day: response.data.Day,
                    Time: response.data.Time,
                    Lane: response.data.Lane,
                    Student: response.data.Student,
                    Status: response.data.Status

                })
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get("/appointments")
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        appointments: response.data.map(appointment.Day)
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })
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
            Day: this.state.Day,
            Time: this.state.Time,
            Lane: this.state.Lane,
            Student: this.state.Student,
            Status: this.state.Status
        }

        console.log(appointment);

        axios.post("/appointments/appointments/update" + this.porps.match.params.id, appointment)
            .then(res => console, log(res.data));

        window.location = "/";
    }

    render() {
        return (
            <div>
                <h3>Edit Appointments</h3>
                <form onSubmit={this.onSubmit}>
                    {/* <div className="form-group">
                        <label>Day: </label>
                        <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}>
                            {
                                this.state.appointments.map(function(appointment) {
                                    return <option
                                    key={appointment}
                                    value={appointment}>{appointment}
                                    </option>;
                                })
                            }
                        </select>
                    </div> */}


                    <div className="form-group">
                        <label>DY</label>
                    </div>






                </form>


            </div>
        )
    }
