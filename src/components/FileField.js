import React from 'react';
import { Button } from 'rmwc/Button';

const wrapperStyle = {
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block'
}

const fileInputStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: '100px',
    opacity: 0
}

const FileField = ({ buttonText="Select File", onChange }) => (
    <div style={wrapperStyle}>
        <Button stroked>{buttonText}</Button>
        <input type='file' style={fileInputStyle} onChange={onChange} />
    </div>
)

export default FileField;