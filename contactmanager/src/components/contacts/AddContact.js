import React, { Component } from 'react'
import uuid from 'uuid'
import {Consumer} from '../../context.js';
import TextInputGroup from '../layout/TextInputGroup'

 class AddContact extends Component {
  
  state = {
    name: '',
    email: '',
    phone: ''
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const {name, email, phone} = this.state;

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    }
    console.log(newContact);
    dispatch ({type:'ADD_CONTACT', payload:newContact});

    this.setState({name:'',email:'',phone:''});
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
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <TextInputGroup
                  label="Name"
                  placeholder="Enter name..."
                  value={name}
                  name="name"
                  onChange={this.onChange}
                />
                <TextInputGroup
                  label="Email"
                  placeholder="Enter email..."
                  value={email}
                  name="email"
                  type="email"
                  onChange={this.onChange}
                />
                <TextInputGroup
                  label="Phone"
                  placeholder="Enter phone..."
                  value={phone}
                  name="phone"
                  onChange={this.onChange}
                />
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