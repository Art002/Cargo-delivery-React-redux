import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";

const WithRouter = (props) => {
    return (
        <Router>
            {props.children}
        </Router>
    )
}

export default WithRouter;