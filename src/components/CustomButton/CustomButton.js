import React from 'react';
import './CustomButton.scss';

const CustomButtom = ({children, ...otherProps}) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
);

export default CustomButtom;