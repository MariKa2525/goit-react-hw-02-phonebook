import { Contact } from '../Contact/Contact';


export const ContactList = ({ contacts }) => {
    console.log(contacts)
    return (
      <ul>
        <li>
              <Contact
                contacts={contacts}
              />
            </li>


        {/* {contacts.map(item => {
          return (
            <li key={item.id}>
              <Contact
                contact={contacts}
              />
            </li>
          );
        })} */}
      </ul>
    );
  };