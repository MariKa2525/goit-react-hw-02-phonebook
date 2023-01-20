import React, { Component } from 'react';
import  ContactForm  from "./ContactForm/ContactForm"
import { nanoid } from 'nanoid'
import {ContactList} from './ContactList/ContactList'


export class App extends Component {
  state = {
    contacts: [],
  }

  addContact = (data) => {
    const newContact = {
      id: nanoid(),
      ...data
    }
    this.setState((prevState)=>{
      return {
        contacts: [...prevState.contacts, newContact]
    }
    
  })
    
  }

  render() {
    return (
      <div>
  <h1>Phonebook</h1>
  <ContactForm  onSubmit={this.addContact}/>

  <h2>Contacts</h2>
  {/* <Filter ... /> */}
  <ContactList  contacts={this.contacts}/>
</div>


      
    );
  }
  
};
