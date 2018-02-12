import * as React from 'react';

import './bar.scss';

interface Props { }
interface State { }

const renderContent = (value: number, dir: string) => {
    const leftNumber = (value / 24) * 100;
    const left = leftNumber + '%';
    const width = 100 - leftNumber + '%';

    return {
        width,
        left: dir === 'forward' ? left : '0',
        right: dir === 'backward' ? left : '0',
    };
};

const renderAbsoluteContent = (v1: number, v2: number) => {
    const diff = (v2 - v1);
    const leftNumber = (diff / 24) * 100;
    const left = leftNumber + '%';
    const width = 100 - leftNumber + '%';

    const temp = (v1 / 24) * 100;

    return {
        left: temp + '%',
        width: left,
    };
};

export class Bar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span className="timebar">
                    <span className="timebar__core">
                        <span className="timebar__base">
                            <span className="timebar__bar" style={renderContent(9, 'forward')}></span>
                        </span>
                    </span>
                </span>
                <br />
                <span className="timebar">
                    <span className="timebar__core">
                        <span className="timebar__base">
                            <span className="timebar__bar" style={renderContent(9, 'backward')}></span>
                        </span>
                    </span>
                </span>
                <br />
                <span className="timebar">
                    <span className="timebar__core">
                        <span className="timebar__base">
                            <span className="timebar__bar" style={renderAbsoluteContent(12, 14)}></span>
                        </span>
                    </span>
                </span>
            </div>
        );
    }
}
