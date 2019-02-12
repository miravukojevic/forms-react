import React from 'react';

const Col = ({column, children}) => {
    return ( 
        <div className={`${column}`}>
            {children}
        </div>
     );
}
 
export default Col;