import React from 'react';
import Links from './nav-links'


import './header.css';

export default function Header (props) {
    return (
        <div className="header">
        {/* <nav className="nav"> */}
<Links />
 {/* </nav> */}
        </div>
    );
};

