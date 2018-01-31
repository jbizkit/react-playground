import * as React from 'react';
import Carousel from 'nuka-carousel';

interface Props { }
interface State { }

export class Nuka extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Carousel>
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
            </Carousel>
        );
    }
}