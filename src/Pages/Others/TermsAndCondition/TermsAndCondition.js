import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h3>here is our terms and condition</h3>
            <p>Go back to home:<Link to= '/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCondition; 