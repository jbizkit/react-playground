import * as React from 'react';

import "./Test.scss";

interface Props {

}

export const Test: React.StatelessComponent<Props> = (props) => {
    return (
        <div className="test">Test Div</div>
    );
};