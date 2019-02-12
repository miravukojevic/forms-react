import React, {Component} from 'react';
import SignUp from './SignUp';
import Background from '../images/food-bg.jpg';
import classes from '../css/Global.module.css';


class AuthLayout extends Component {
    render() { 
        return ( 
            <div className="row no-margin">
                <div style={{backgroundImage: "url(" + Background + ")"}} className={`${classes.Background} col-sm-6 `}>mira</div>
                <div className={`${classes.Container} col-sm-6 `}>
                    <h1 className={classes.Heading}>food-order</h1>
                    {this.props.children}
                </div>
            </div>
         );
    }
}
 
export default AuthLayout;