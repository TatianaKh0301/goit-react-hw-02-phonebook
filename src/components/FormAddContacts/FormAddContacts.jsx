import React, { Component } from "react";
import { Form, LabelForm, LabelWrap, InputForm, ButtonWrap, ButtonForm } from './FormAddContacts.styled';

class FormAddContacts extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = event => {
      const { name, value} = event.currentTarget;
      console.log("name", name);
      console.log("value", value);
      this.setState({[name] : value});
    }
    
    handleSubmit = event => {
      event.preventDefault();

      this.props.onSubmit(this.state);
      this.reset();
    }

    reset = () => {
      this.setState( { name: '', number: '',});
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <LabelForm> <LabelWrap>Name</LabelWrap>
                    <InputForm
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </LabelForm>
                <LabelForm> <LabelWrap>Number</LabelWrap>
                    <InputForm
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handleChange}
                    />
                </LabelForm>

                <ButtonWrap>
                    <ButtonForm type="onSubmit">Add contact</ButtonForm>
                </ButtonWrap>
        </Form>
        );
    };
}

export default FormAddContacts;