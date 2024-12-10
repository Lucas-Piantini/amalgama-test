export const ContactAdress = ({ address }) => {
  const { line_1, line_2, zip_code, city, state } = address;
  return (
    <ul>
      <li>{line_1}</li>
      <li>{line_2}</li>
      <li>{zip_code}</li>
      <li>{city}</li>
      <li>{state}</li>
    </ul>
  );
};
