import React from 'react';
import { LinearProgress } from 'rmwc/LinearProgress';

const LoadingPage = () => (
    <div style={{margin: '0'}} >
        <LinearProgress determinate={false} />
    </div>
);

export default LoadingPage;