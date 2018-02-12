declare module 'nuka-carousel' {
    import * as React from 'react';

    namespace Carousel {
        interface Props {
            slidesToShow?: string;
            dragging?: boolean;
            swiping?: boolean;
        }
    }

    export = Carousel;
    class Carousel extends React.Component<Carousel.Props, any> { }
}
