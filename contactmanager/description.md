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
```
