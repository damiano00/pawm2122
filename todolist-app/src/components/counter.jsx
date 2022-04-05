import React, { Component } from 'react';

class counter extends Component {
    state = {
        count: 0,
    };
    render() { 
        return (
        <div>
            <span>Hello World</span>
            <button>Incrementa</button>
        </div>);
    }
}
 
export default counter;