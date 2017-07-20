import React, { Component } from 'react';
import './Directory__style.css';
import { Link } from 'react-router';

import iconWarningSign from '../../../../images/icon-warning-sign.png';


const Directory = (props) => (
    <Link to={`directory/${props.directory.id}`} className="link_wrapper">
        <div className="directory_item">
                <div className="directory_item__img">
                    <img src={iconWarningSign} alt="icon-th"/>
                </div>
                <p className="directory_item__name">
                    {props.directory.name}
                </p>
        </div>
    </Link>
);


export default Directory;
