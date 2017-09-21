import * as React from 'react';

export class Placeholder extends React.Component<any, any> {
    refs: {
        input?: any,
        placeholder?: any,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.updatePlaceholder();
    }

    componentDidUpdate() {
        //this.updatePlaceholder();
    }

    updatePlaceholder = () => {
        var input = this.refs.input;
        var placeholder = this.refs.placeholder;
        if (input.value !== '') {
            placeholder.style.display = 'none';
            return;
        }
        placeholder.style.display = 'block';

        // we'll suppose this is ie, which stores css props in `currentStyle`
        var inputStyle = input.currentStyle;

        console.log(input.currentStyle);
        if (!inputStyle) {
            var topOffset = 0;
            var leftOffset = 0;

            var placeholderStyle = placeholder.style;
            placeholderStyle.top = topOffset + 'px';
            placeholderStyle.left = leftOffset + 'px';
        }
    }

    handleChange = (e) => {
        if (e.target.value) {
            this.refs.placeholder.style.display = 'none';
        } else {
            this.refs.placeholder.style.display = 'block';
        }
    }

    render() {
        const wrapperStyle = { position: 'relative' };
        const placeholderStyle = {
            position: 'absolute',
            color: '#999999'
        };

        return (
            <div style={{ position: 'relative' }}>
                <textarea ref="input" onChange={this.handleChange}></textarea>
                <div
                    ref="placeholder"
                    style={{
                        position: 'absolute',
                        color: '#999999'
                    }}>
                    Hello World
                </div>
            </div>
        );
    }
}