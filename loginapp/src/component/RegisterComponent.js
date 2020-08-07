import React,{Component} from 'react';

const registerUrl = "http://localhost:5000/api/auth/register";

class RegisterComponent extends Component{
    constructor(){
        super()

        this.state={
            name:'',
            email:'',
            password:''
        }
    }

    handleName = (event) => {
        this.setState({name:event.target.value})
    }
    handleEmail = (event) => {
        this.setState({email:event.target.value})
    }
    handlePassword = (event) => {
        this.setState({password:event.target.value})
    }
    handleSubmit=(event) => {
        var data={
            "name":this.state.name,
            "email":this.state.email,
            "password":this.state.password
        }
        fetch(registerUrl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(this.props.history.push('/login'))
    }
    render(){
        return(
            <div>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        Register
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control"
                            value={this.state.name}
                            onChange={this.handleName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control"
                            value={this.state.email}
                            onChange={this.handleEmail}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" className="form-control"
                            value={this.state.password}
                            onChange={this.handlePassword}
                            />
                        </div>
                        <button type="button" className="btn btn-primary"
                        onClick={this.handleSubmit}>
                            Register
                        </button>

                    </div>
                </div>

            </div>
        )
    }
}

export default RegisterComponent