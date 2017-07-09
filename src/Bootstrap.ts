import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Test } from './components';

export function init(): void {
    ReactDOM.render(React.createElement(Test, { texts: [
        'First World', 'Nana BTS', 'Central Mall'
    ] }), document.getElementById("test-root"));
}