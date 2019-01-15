## Getting started
1. Install VS Code
2. Install bunch of extension for VS Code
    a. Bracket Pair Colorizer
    b. VS Code ES7 React/Redux/React-Native/JS snippets
    c. Live Server 
    d. Prettier - Code formatter
3. Modify this extension

## ES6 Refresher
1. const and let
2. Arrow Functions
3. array forEach
4. array map
5. array filter
6. spread
7. class
8. subclass
9. destructuring
10. modules

## Create React App
1. npm install create-react-app
2. npm start
3. http://localhost:3000/about

## jsx
1. javascript extension which allows html to insert in javascript
    a. className instead of class
    b. label hmtlFor instead of for
    c. return single parent element
2. {name} - any javascript expression goes into curly braces
3. {showHello ? <h4>Hello</h4> : null}
4. render returns jsx

## Create component
rcc tab
```
import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
export default Contact
```

## create functional component
rfc tab for functional component
```
import React from 'react'

 const Header = () => {
  return (
    <div>
      
    </div>
  )
}

export default Header;
```

## props
pass data to component
```
app.js
<Header branding="Contacts Manager v1.0"/>

Header.js
const Header = props => {
  const { branding } = props;  // Destructuring
  return (
      <div>
        <h1> {brandng} </h1>
      </div>
  )
}
```

for class based component

`use {this.props.branding}`

## Typechecking with propTypes
```
Header.js
const Header = props => {
  const { branding } = props;  // Destructuring
  return (
      <div>
        <h1> {brandng} </h1>
      </div>
  )
}

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;

## CSS in React
Header.js
const Header = props => {
  const { branding } = props;  // Destructuring
  return (
      <div>
        <h1 style={{color:'red', fontSize: '50px' }}> {brandng} </h1>
      </div>
  )
}

## State & The Context API
 class AddContact extends Component {
  
  state = {
    name: '',
    email: '',
    phone: ''
  }

  render() {
    const {name, email, phone, errors}= this.state;
    return(
      <div>
      {name}
      {email}
      {phone}
      </div>
    )}
 }

 export default AddContact;
```
## Events in React
```
onDeleteClick = (id, dispatch) => {

}
render() {
return (
    <div>
        <i className="fas fa-times"
                        style={{cursor:'pointer', float:'right', color:'red'}}
                        onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>
    </div>                        
)}                        
```                        
## Changing State
- Use <React.Fragment> instead of the container div under render() method since it removes unnecessary div's on the container, However if your container has css classes defined on it then leave it alone
- `state` of a component is **immutable**, to modify the state use setState({showInfo:false});`
- One tedious way of making the states available across component is through usage of props. 
- For smaller application, state can be stored at a higher level which can then be accessed across the application. This can be achieved using `Context API`.
- For larger application, usage of `Redux` is highly recommended.

## Context
- https://reactjs.org/docs/context.html
- In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree
- Context lets you “broadcast” such data, and changes to it, to all components below
- Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes. One Provider can be connected to many consumers.
- All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.
- The **contextType** property on a class can be assigned a Context object created by React.createContext(). This lets you consume the nearest current value of that Context type using **this.context**. You can reference this in any of the lifecycle methods including the render function.




