import React from 'react';

const Button = ({onClick, buttonName}) => {
    return ( 
        <button style={{margin: '20px auto'}} className="btn btn-default" onClick={onClick}>{buttonName}</button>
     );
}
 
export default Button;