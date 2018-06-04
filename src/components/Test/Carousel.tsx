import * as React from 'react';
import './carousel.scss';
import { MouseEventHandler } from 'react';

interface Props { };
interface State {
    items: number[];
    left: number;
    active: number;
};

export class Carousel extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            left: 0,
            active: 0,
        };
    }

    setLeft = (e: React.MouseEvent<HTMLDivElement>, i: number) => {
        const item = document.getElementById(`carousel-item-${i}`);

        const n = document.getElementById('carousel-viewport').offsetWidth;
        const o = document.getElementById('carousel-container').offsetWidth;
        const r = item.offsetWidth;
        const _OffsetLeft = item.offsetLeft;
        let a = n / 2 - r / 2 - (_OffsetLeft ? _OffsetLeft : 0);
        a > 0 ? a = 0 : n - o + 10 > a && (a = n - o + 10);
        const finalValue = (a >= 0) ? a : (a - 10);
        this.setState({ left: finalValue, active: i });

//         var n = this.$thumbsViewport.width(), o = this.$thumbsContainer.width(), r = i.width(), _ = i.position(), a = n / 2 - r / 2 - (_ ? this.isRtl ? o - _.left - r - 10 :_.left :0);
// a > 0 ? a = 0 :n - o + 10 > a && (a = n - o + 10), this.$thumbsContainer.css(this.isRtl ? "right" :"left", a), _r_();
    }

    render() {
        return (
            <div className="carousel" id="carousel">
                <div className="carousel-viewport" id="carousel-viewport">
                    <div className="carousel-film">
                        <div style={{ left: this.state.left + 'px' }} className="carousel-container" id="carousel-container">
                            {
                                this.state.items.map((item, i) => {
                                    return (
                                        <div
                                            id={`carousel-item-${i}`}
                                            key={i}
                                            onClick={(e) => this.setLeft(e, i)}
                                            className={`carousel-item ${this.state.active == i ? 'carousel-item-active' : ''}`}>{i}
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};