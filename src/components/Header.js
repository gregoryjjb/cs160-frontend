import React from 'react';
import { Typography } from 'rmwc/Typography';
import LogoutButtonContainer from 'containers/LogoutButtonContainer';

const style = {
    width: '100%',
    height: '7em',
    padding: '1em',
    borderBottom: '1px solid lightgrey',
    boxSizing: 'border-box'
}

const logoutStyle = {
    float: 'right',
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center'
}

const Header = ({titleText}) => (
    <div style={style}>
        <Typography use="display2">{titleText}</Typography>
        <div style={logoutStyle} >
            <LogoutButtonContainer />
        </div>
    </div>
)

export default Header;