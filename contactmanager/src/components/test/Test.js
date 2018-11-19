import React, { Component } from 'react'

class Test extends Component {

    state = {
        test:'test'
    }

    componentDidMount () {
        console.log("ComponentDidMount...");
    }

    componentWillMount () {
        console.log("ComponentWillMount...");
    }

    componentDidUpdate () {
        console.log("ComponentDidUpdate...");
    }
    componentWillUpdate () {
        console.log("ComponentWillUpdate...");
    }
    componentWillReceiveProps (nextProps, nextState) {
        console.log("ComponentWillReceiveProps...");
    }
    static getDerivedStateFromProps (nextProps, prevState) {
        console.log("getDerivedStateFromProps...");
        return null;
    }

  render() {
    console.log("render...")
    return (
      <div>
        <h1>Inside Test</h1>
      </div>
    );
  }
}

export default Test;