import React, { Component } from 'react'

class Test extends Component {

    state = {
        test:'test'
    }

    ComponentDidUpdate () {
        console.log("ComponentDidUpdate...");
    }
    ComponentWillUpdate () {
        console.log("ComponentWillUpdate...");
    }
    ComponentWillReceiveProps (nextProps, nextState) {
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