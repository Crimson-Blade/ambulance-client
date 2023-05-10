import React, { useState } from 'react';

const StaffAuthForm = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your login or register logic here
    localStorage.setItem('isLoggedIn', true);
    // reload
    window.location.reload();
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
  };

  return (
    <div className="p-8 max-w-sm m-auto bg-transparent ">
      <div className="tabs w-full ">
        <a className={`tab tab-lifted lab-lg ${activeTab === 'login' ? 'tab-active [--tab-bg:hsl(var(--b2))]' : '[--tab-border-color:transparent]'}`} onClick={() => handleTabChange('login')}>
          Login
        </a>
        <a className={`tab tab-lifted lab-lg ${activeTab === 'register' ? 'tab-active [--tab-bg:hsl(var(--b2))]' : '[--tab-border-color:transparent]'}`} onClick={() => handleTabChange('register')}>
          Register
        </a>
      </div>
      <div className={`tab-content px-12 py-4 rounded-lg ${activeTab === 'login' ? 'rounded-tl-none':''} bg-base-200`}>
        {activeTab === 'login' && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-bold">Phone Number:</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="input input-bordered w-full px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full px-3 py-2"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </form>
        )}
        {activeTab === 'register' && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-bold">Phone Number:</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="input input-bordered w-full px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full px-3 py-2"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary text-white font-bold py-2 px-4 rounded"
            >
              Register
            </button>
          </form>
        )}
      </div>

    </div>
  );
};

export default StaffAuthForm;
