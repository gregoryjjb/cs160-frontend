import React, { Component } from 'react';
import AutoLogin from 'containers/AutoLogin';

import PageRouterContainer from 'containers/PageRouterContainer';

const App = () => (
    <div>
        <PageRouterContainer />
        <AutoLogin />
    </div>
);

export default App;