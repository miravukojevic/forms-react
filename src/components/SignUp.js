import React, { Component   } from 'react';
import Input from './Input';
import Button from './Button';
import AuthLayout from './AuthLayout';
import Col from './Col'

import { BrowserRouter as Router, withRouter } from "react-router-dom";
import classes from '../css/Global.module.css';

class SignUp extends Component {
    state = { 
        name: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        confirmPass: ''
     }

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }
    handleClick= () => {
        this.props.history.push({
            pathname: `/profile`
        })
    }
    handleLink = () => {
        this.props.history.push({
            pathname: `/login`
        })
    }
    render() { 
        return ( 
            <AuthLayout>
                <h6 className={classes.h6}>Please complete to create your account.</h6>
                <div className="row  no-padding">
                    <Col column="col-sm-6">
                        <Input label="First Name" name="name" type="text" onChange={this.handleChange}/>
                    </Col>
                    <Col column="col-sm-6">
                        <Input label="Last Name" name="lastname" type="text" onChange={this.handleChange}/>
                    </Col>
                    <Col column="col-sm-12">
                        <Input label="Username"  name="username" type="text" onChange={this.handleChange}/>
                    </Col>
                    <Col column="col-sm-12">
                        <Input label="Email" type="text" name="email" onChange={this.handleChange}/>
                    </Col>
                    <Col column="col-sm-12">
                        <Input label="Password" type="text" name="password" onChange={this.handleChange}/>
                    </Col>
                    <Col column="col-sm-12">
                    <Input label="Confirm Password" name="confirmPass" type="text" onChange={this.handleChange}/>
                    </Col>
                    <Col column="col-sm-12">
                    <Button buttonName="Sign Up" onClick={this.handleClick} />
                    </Col>
                    <a className={classes.Link} onClick={this.handleLink}>Already have an account.Sign in</a>
                </div>
            </AuthLayout>
         );
    }
}
 
export default withRouter(SignUp);
