import React from "react";
import { nanoid } from 'nanoid';

class App extends React.Component{
  state = {
    name: '',
    number: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState([name], value)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { name, value } = event.target;
    const { contact, addContact } = this.props;
    if (contects.some((contact) => contact.name === name)) {
      alert(`This ${name} is already in contacts`);
      return
    }
  }
}