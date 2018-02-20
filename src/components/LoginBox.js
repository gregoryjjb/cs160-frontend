import React, {Component} from 'react';
import { Elevation } from 'rmwc/Elevation';

const boxStyle = {
    padding: '1em',
    margin: '5em auto 0 auto',
    width: '20em',
    borderRadius: '0.25em',
    backgroundColor: 'white'
}

const LoginBox = ({children}) => (
        <Elevation z='6' style={boxStyle} >
            {children}
        </Elevation>
);

export default LoginBox;