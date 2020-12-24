import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {

        super(props)
        this.state = {
            errorMessage: ''
        }
    }

    static getDerivedStateFromError(error) {
        return { errorMessage: error.toString() }
    }

    render() {

        if (this.state.errorMessage) {
            return <h1>{this.state.errorMessage}</h1>
        }
        else return this.props.children;
    }
}

export default ErrorBoundary
