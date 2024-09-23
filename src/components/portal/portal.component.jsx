import React from "react";
import ReactDOM from "react-dom";

import './portal.styles.scss';

const Portal = () => ReactDOM.createPortal(
        <div className="portal">
            TEST PORTALE
        </div>
    
    , document.getElementById('portal')   
);

export default Portal