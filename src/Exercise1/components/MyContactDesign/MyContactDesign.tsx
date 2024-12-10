interface ContactI {
  avatar: string;
  first_name: string;
  last_name: string;
  company: string;
  details: string;
  email: string;
  phone_number: string;
  address: string;
}

const ContactInfo = ({ label, value }: { label: string; value: string }) => (
  <div className="mb-4">
    <strong className="text-gray-700">{label}:</strong>
    <p className="text-gray-600">{value}</p>
  </div>
);

const contact: ContactI = {
  avatar:
    "https://preview.redd.it/sat81hhv0g671.jpg?auto=webp&s=a036d5f9b236f3508f465e2d8146533b87f5c7d1",
  first_name: "Goku",
  last_name: "Kakaroto",
  company: "Kame House",
  details: "The guy that saves earth all the time",
  email: "iLikeFood@mail.com",
  phone_number: "+123456789",
  address: "58N 018, 439 East District",
};

export const MyContactDesign = () => {
  return (
    <div className="max-w-xl mx-auto p-6 mt-6 bg-gray-200 rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <img
          src={contact.avatar}
          alt="Avatar"
          className="w-24 h-24 rounded-full border-2 border-gray-300"
        />
        <div className="ml-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            {contact.first_name} {contact.last_name}
          </h1>
          <h2 className="text-xl text-gray-600">{contact.company}</h2>
        </div>
      </div>

      <div>
        <ContactInfo label="Details" value={contact.details} />
        <ContactInfo label="Email" value={contact.email} />
        <ContactInfo label="Phone Number" value={contact.phone_number} />
        <ContactInfo label="Address" value={contact.address} />
      </div>
    </div>
  );
};
