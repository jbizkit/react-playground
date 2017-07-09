import * as React from 'react';
import ReactCSSTransitionGroup = require('react-addons-css-transition-group');

import "./Child.scss";

interface Props {
    text: string,
};

export const Child: React.StatelessComponent<Props> = (props) => {
    return (
        <h2>{props.text}</h2>
    );
};