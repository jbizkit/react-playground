import * as React from 'react';
import { Bar } from './Bar'

import './test.scss';

interface Props { }
interface State {
    items: Item[];
}

interface Item {
    imageUrl: string;
    text: string;
    hidden: boolean;
}

export class Test extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            items: [
                {
                    imageUrl: 'https://pix6.agoda.net/city/1622/1622-7x3.jpg?s=300x300&p=true&cachebuster=true',
                    text: 'First Image',
                    hidden: false,
                },
                {
                    imageUrl: 'https://pix6.agoda.net/city/9395/9395-7x3.jpg?s=300x300&p=true&cachebuster=true',
                    text: 'Second Image',
                    hidden: false,
                },
                {
                    imageUrl: 'https://pix6.agoda.net/city/9590/9590-7x3.jpg?s=300x300&p=true&cachebuster=true',
                    text: 'Third Image',
                    hidden: false,
                },
            ],
        };
    }

    onClick = (index: number) => {
        const items = this.state.items;
        items[index].hidden = true;
        this.setState({ items: items });
    };

    renderItem = (a: Item, i: number) => {
        return (
            <div className={`image-block ${a.hidden ? 'animate-hide' : ''}`}>
                <div className="image-close" onClick={(e) => this.onClick(i)} >X</div>
                <div className="image-div">
                    <img className="image-image" src={a.imageUrl} />
                </div>
                <div className="image-text">
                    {a.text}
                </div>
            </div>
        );
    }

    renderImages = (a: Item, i: number) => {
        return (
            <div className={`table-col-image ${a.hidden ? 'animate-table-hide' : ''}`}>
                <div className="image-close" onClick={(e) => this.onClick(i)} >X</div>
                <img className="table-image" src={a.imageUrl} />
            </div>
        );
    }

    renderText = (a: Item, i: number) => {
        return (
            <div className={`table-col-text ${a.hidden ? 'animate-table-hide' : ''}`}>
                {a.text}
            </div>
        );
    }

    render() {
        return (
            // <Bar />
            <div>
                {
                    this.state.items.map((a, i) => {
                        return this.renderItem(a, i);
                    })
                }
                <br />
                <br />
                <div className="table-parent">
                    <div className="table">
                        <div className="table-row">
                            {
                                this.state.items.map((a, i) => {
                                    return this.renderImages(a, i);
                                })
                            }
                        </div>
                        <div className="table-row">
                            {
                                this.state.items.map((a, i) => {
                                    return this.renderText(a, i);
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}