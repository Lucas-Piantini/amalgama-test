import { useMemo } from "react";
import { Contact } from "./components/Contact/Contact";
import { Link } from 'react-router-dom';


export const ContactsScreen = ({ contacts, cities, states }) => {

  const contactsToDisplay = useMemo(() => contacts.map((contact) => ({
    id: contact.id,
    avatar_url: contact.avatar_url,
    full_name: `${contact.first_name} ${contact.last_name}`,
    company: contact.company,
    details: truncate(contact.details, 100),
    email: contact.email,
    phone_number: `(${contact.phone.area_code}) ${contact.phone.number}`,
    addresses: contact.addresses.map((address) => ({
      line_1: address.line_1,
      line_2: address.line_2,
      zip_code: address.zip_code,
      city: findById(cities, address.city_id),
      state: findById(states, address.state_id),
    })),
  })), [contacts, cities, states]);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/contacts">My Contacts</Link>
          </li>
        </ul>
      </nav>
      <h1>Contacts 👥</h1>
      {contactsToDisplay.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};
