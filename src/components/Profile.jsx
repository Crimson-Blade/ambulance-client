import React, { useState } from 'react';

const EditProfile = () => {
  const [phoneNumberCode, setPhoneNumberCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('123456789');
  const [fullName, setFullName] = useState('Lance Barreto');
  const [password, setPassword] = useState('*********');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your submission logic here
    console.log('Phone Number Country Code:', phoneNumberCode);
    console.log('Phone Number:', phoneNumber);
    console.log('Full Name:', fullName);
    console.log('Password:', password);
  };

  return (
    <div className="p-8 max-w-sm mx-auto bg-base-200 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="font-bold">Phone Number Country Code:</label>
          <input
            type="text"
            value={phoneNumberCode}
            onChange={(e) => setPhoneNumberCode(e.target.value)}
            className="input input-bordered w-full px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="font-bold">Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="input input-bordered w-full px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="font-bold">Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="input input-bordered w-full px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="font-bold">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered w-full px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="btn btn-secondary text-secondary-content font-bold py-2 px-4 rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;