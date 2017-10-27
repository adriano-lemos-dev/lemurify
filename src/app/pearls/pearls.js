import React from 'react';
import phrases from './phrases.json';

export default class Pearls extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            interval: null,
            pearl: phrases[0]
        };
    }

    componentDidMount() {

        let size = phrases.length;

        let interval = setInterval(() => {
            let index = (Math.floor((this.state.index +1)/size) > 0 ? 0 : this.state.index +1 );

            this.setState({
                interval: interval,
                index: index,
                pearl: phrases[index]
            });
                
        }, 5000);

    }    

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <h1>{this.state.pearl}</h1>
        )
    }
};