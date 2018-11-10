import React, { Component } from 'react';
import Contact from './Contact.js';

class Contacts extends Component {
  state = {
      contacts : [
        {
          id: 1,
          name: 'John Doe',
          email: 'jdoe@gmail.com',
          phone: '555-555-5555'
        },
        {
          id: 2,
          name: 'Karen Smith',
          email: 'karen@gmail.com',
          phone: '222-222-2222'
        },
        {
          id: 3,
          name: 'Henry Johnson',
          email: 'henry@gmail.com',
          phone: '333-333-3333'
        }
      ]
    }

    deleteContact = (a_id) => {
      const {contacts} = this.state;
      const newContacts = contacts.filter(contact => contact.id !== a_id);
      this.setState({contacts:newContacts});
    }
  
  render() {
    const {contacts} = this.state;
    return (<div> {
                  contacts.map(contact=> 
                    <Contact key={contact.id} contact={contact} 
                             onDeleteHandler={this.deleteContact.bind(this, contact.id)} />)
                  }
            </div>
           );
     
  }
}


export default Contacts;