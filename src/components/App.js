import React, { Component } from 'react';
import AutoLogin from 'containers/AutoLogin';

import PageRouterContainer from 'containers/PageRouterContainer';
import ToasterContainer from 'containers/ToasterContainer';

const appStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
}

const App = () => (
    <div style={appStyle} >
        <PageRouterContainer />
        <AutoLogin />
		<ToasterContainer />
    </div>
);

export default App;