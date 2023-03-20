import React from "react";
import { ContactsItem } from "components/ContactsItem";
import {ContactsListWrapper, ContactsTitle} from './ContactList.styled';

export const ContactsList = ({contacts, onDeleteContact}) => (
        <ContactsListWrapper>
            <ContactsTitle>Contacts</ContactsTitle>
            {contacts.map(({id, name, number}) => (
                <li key={id} >
                    <ContactsItem id={id} name={name} number={number} onDeleteContact={onDeleteContact}/>
                </li>
            ))}
        </ContactsListWrapper>
    );
