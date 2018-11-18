import React, { Component } from 'react'
import uuid from 'uuid'
import {Consumer} from '../../context.js';

 class AddContact extends Component {

  constructor (props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }


  static defaultProps = {
    name : 'Fred Smith',
    email : 'frd@gmail.com',
    phone : '666-666-6666'
  }
  
  onSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: uuid(),
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    }
    console.log(newContact);
  }
  onChange = (e) => this.setState({[e.target.name] : e.target.value});

  render() {
    const {name, email, phone}= this.props;
    return(
    <Consumer>
      {value=>{
        const {dispatch} = value;
        return (
          <div className="card mb-3">
          <div className="card-header">Add Contact
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="name"></label>
                  <input  type="text" 
                          className="form-control form-control-lg"
                          placeholder="Enter name..."
                          name="name"
                          defaultValue={name}
                          ref={this.nameInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email"></label>
                  <input  type="email" 
                          className="form-control form-control-lg"
                          placeholder="Enter email..."
                          name="email"
                          defaultValue={email}
                          ref={this.emailInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone"></label>
                  <input  type="text" 
                          className="form-control form-control-lg"
                          placeholder="Enter phone..."
                          name="phone"
                          defaultValue={phone}
                          ref={this.phoneInput}
                  />
                </div>
                <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
              </form>
            </div>
          </div>
        </div>  
        )
      }}
    </Consumer>
    )
  }
}

export default AddContact