import React, { Component } from 'react'
import uuid from 'uuid'
import {Consumer} from '../../context.js';

 class AddContact extends Component {
  
  state = {
    name: '',
    email: '',
    phone: ''
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {name, email, phone} = this.state;

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    }
    console.log(newContact);
  }
  onChange = (e) => this.setState({[e.target.name] : e.target.value});

  render() {
    const {name, email, phone}= this.state;
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
                          value={name}
                          onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email"></label>
                  <input  type="email" 
                          className="form-control form-control-lg"
                          placeholder="Enter email..."
                          name="email"
                          value={email}
                          onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone"></label>
                  <input  type="text" 
                          className="form-control form-control-lg"
                          placeholder="Enter phone..."
                          name="phone"
                          value={phone}
                          onChange={this.onChange}
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