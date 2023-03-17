import React from "react";
import { ContactsItem } from "components/ContactsItem";
import {ContactsListWrapper} from './ContactList.styled';

export const ContactsList = ({contacts, onDeleteContact}) => (
        <ContactsListWrapper>
            <h2>Contacts</h2>
            {contacts.map(({id, name, number}) => (
                <li key={id} >
                    <ContactsItem id={id} name={name} number={number} onDeleteContact={onDeleteContact}/>
                </li>
            ))}
        </ContactsListWrapper>
    );
