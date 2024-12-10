import { ContactAdress } from "../ContactAdress/ContactAdress";

export const Contact = (contact) => {

  const { avatar_url, full_name, company, details, email, phone_number, addresses } = contact;
  return (
    <div>
      <div>
        <img src={avatar_url} alt="profile image" />
        Frontend Challenge - Amalgama 2<h3>{full_name}</h3> -{" "}
        <h4>{company}</h4>
      </div>
      <p>{details}</p>
      <ul>
        <li>email: {email}</li>
        <li>phone: {phone_number}</li>
        <li>
          {addresses.length > 1 ? (
            <h4>Addresses:</h4>
          ) : (
            <h4>Address:</h4>
          )}
          {addresses.map((address) => (
            <ContactAdress key={address.id} address={address} />
          ))}
        </li>
      </ul>
    </div>
  );
};
