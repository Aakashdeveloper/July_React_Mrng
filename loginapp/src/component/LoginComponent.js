import React,{Component} from 'react';

const registerUrl = "http://localhost:5000/api/auth/login";

class LoginComponent extends Component{
    constructor(){
        super()

        this.state={
            name:'',
            email:'',
            password:''
        }
    }

    handleEmail = (event) => {
        this.setState({email:event.target.value})
    }
    handlePassword = (event) => {
        this.setState({password:event.target.value})
    }
    handleSubmit=(event) => {
        var data={
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
       .then((res) => res.json())
       .then((data) => {
           sessionStorage.setItem('_ltk',data.token)
           this.props.history.push('/profile')
       })
    }
    render(){
        return(
            <div>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        Login
                    </div>
                    <div className="panel-body">
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
                        <button type="button" className="btn btn-success"
                        onClick={this.handleSubmit}>
                            Login
                        </button>

                    </div>
                </div>

            </div>
        )
    }
}

export default LoginComponent