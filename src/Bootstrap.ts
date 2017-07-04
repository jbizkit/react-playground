import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Test } from './components';

export function init(): void {
    ReactDOM.render(React.createElement(Test), document.getElementById("test-root"));
}