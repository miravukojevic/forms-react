import React, { Component } from 'react';
import Input from './Input';
import Button from './Button'
import { BrowserRouter as Router, withRouter } from "react-router-dom";

class SignIn extends Component {
    state = { 
        name: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        confirmPass: ''
     }

    handleChange = (nameOfInput, event) => {
        this.setState({
            [nameOfInput]: event.target.value
        })
    }
    handleClick= () => {
        this.props.history.push({
            pathname: `/profile`
        })
    }
    render() { 
        return ( 
            <>
                <h6>Please complete to create your account.</h6>
                <div className="row">
                    <div className="col-sm-6">
                        <Input label="First Name" name="name" type="text" onChange={(e) => this.handleChange('name', e)}/>
                    </div>
                    <div className="col-sm-6">
                        <Input label="Last Name" name="lastname" type="text" onChange={(e) => this.handleChange('lastname', e)}/>
                    </div>
                  
                </div>
            </>
         );
    }
}

 
export default withRouter(SignIn);