import * as React from 'react';
import { Bar } from './Bar'

interface Props { }
interface State { }

export class Test extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Bar />
        );
    }
}