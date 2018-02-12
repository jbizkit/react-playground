/// <reference path="../../declarations/nuka-carousel/index.d.ts" />
import * as React from 'react';
import * as Carousel from 'nuka-carousel';

interface Props { }
interface State { }

export class Nuka extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Carousel slidesToShow="3" dragging={false} swiping={false}>
                    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
                    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
                    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
                    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
                    <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
                </Carousel>
                <br />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
            </div>
        );
    }
}