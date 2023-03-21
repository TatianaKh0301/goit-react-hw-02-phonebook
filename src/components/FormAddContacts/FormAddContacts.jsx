import React from "react";
import shortid from "shortid";
import PropTypes from 'prop-types';
import { Formik } from "formik";
import { FormWrapper, MainTitle, LabelForm, InputForm, ButtonForm } from "./FormAddContacts.styled";

const initialValues = {
    name: '',
    number: '',
}


export const FormAddContacts = () => {
    // state = {
    //     name: '',
    //     number: '',
    // };
    
    let nameInputId = shortid.generate();
    let numberInputId = shortid.generate();

    let handleSubmit = (values, { resetForm }) => {
        console.log("values", values);
        console.log("action", { resetForm });
        // this.props.onSubmit(values);
        resetForm();
    };

    // handleChange = event => {
    //     const { name, value} = event.currentTarget;
    //     this.setState({
    //       [name]: value,
    //     });
    // };

    // handleSubmit = event => {
    //     event.preventDefault();
    //     this.props.onSubmit(this.state);
    //     this.clearForm();        
    // };
    
    // clearForm = () => {
    //     this.setState({name: '', number:''});
    // };

    return(
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <FormWrapper autoComplete="off">
                <MainTitle>Phonebook</MainTitle>
                <LabelForm htmlFor={nameInputId}>Name
                <InputForm
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required

                    id={nameInputId}
                    // value={this.state.name}
                    // onChange={this.handleChange}
                />
                </LabelForm>
                <LabelForm htmlFor={numberInputId}>Phone
                <InputForm
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required

                    id={numberInputId}
                    // value={this.state.number}
                    // onChange={this.handleChange}
                />
                </LabelForm>
                    <ButtonForm type="submit">Add contact</ButtonForm>              
            </FormWrapper>
        </Formik>            
        );
}; 

FormAddContacts.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}