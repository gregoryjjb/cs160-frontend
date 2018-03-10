import React, { Component } from 'react';
import AutoLogin from 'containers/AutoLogin';

import PageRouterContainer from 'containers/PageRouterContainer';
import ToasterContainer from 'containers/ToasterContainer';

const App = () => (
    <div>
        <PageRouterContainer />
        <AutoLogin />
		<ToasterContainer />
    </div>
);

export default App;