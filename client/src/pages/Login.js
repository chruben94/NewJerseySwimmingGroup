import React , { Component } from "react";
import fire from './Fire';


class Login extends Component{
constructor(props)
{
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    // this.signup = this.signup.bind(this);
    this.state={
        email : "",
        password : ""
    }
}
login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}

handleSuccessfulAuth(e) {
    this.props.history.push("/Appointments");
}


handleChange(e){
    this.setState({[e.target.name] : e.target.value})
}
render()
{
    return(
        <div>
            
            <form>
                <input style={formStyle}
                type="email"
                id="email"
                name="email"
                placeholder="enter email address"
                onChange={this.handleChange}
                value={this.state.email}
                />
                <input style={formStyle}
                name="password"
                type= "password"
                onChange={this.handleChange}
                id="password"
                placeholder="enter password"
                value={this.state.password}
                />
                <button style={buttonLogin} onClick={this.login}>Login</button>
            </form>

        </div>
    )
}
}

const formStyle = {
    padding: '10px',
    margin: '100px',
    marginLeft: '100px',
    marginRight: 'auto'

}

const buttonLogin = {
    color: 'black',
    padding: '5px',
    borderRadius: '10px',
    background: 'lightblue',
    
}

export default Login;