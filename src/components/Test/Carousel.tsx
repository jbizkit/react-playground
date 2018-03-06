import * as React from 'react';
import './carousel.scss';
import { MouseEventHandler } from 'react';

interface Props { };
interface State {
    items: number[];
    left: number;
};

export class Carousel extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            left: 0,
        };
    }

    setLeft = (e: React.MouseEvent<HTMLDivElement>, i: number) => {
        const item = document.getElementById(`carousel-item-${i}`);

        const n = document.getElementById('carousel').offsetWidth;
        const o = document.getElementById('carousel-container').offsetWidth;
        const r = document.getElementById(`carousel-item-${i}`).offsetWidth;
        const _ = document.getElementById(`carousel-item-${i}`).getBoundingClientRect();
        let a = n / 2 - r / 2 - (_ ? _.left : 0);
        a > 0 ? a = 0 : n - o + 10 > a && (a = n - o + 10);
        const finalValue = (a >= 0) ? a : (a - 10);
        this.setState({ left: finalValue });
    }

    render() {
        return (
            <div className="carousel" id="carousel">
                <div style={{ left: this.state.left + 'px' }} className="carousel-container" id="carousel-container">
                    {
                        this.state.items.map((item, i) => {
                            return (
                                <div
                                    id={`carousel-item-${i}`}
                                    key={i}
                                    onClick={(e) => this.setLeft(e, i)}
                                    className="carousel-item">{i}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
};