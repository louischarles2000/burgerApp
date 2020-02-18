import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            Component: null
        }

        componentDidMount(){
            importComponent()
            .then(cmp => {
                this.setState({Component: cmp.default});
            });
        }

        render(){
            const C = this.state.Component;

            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;