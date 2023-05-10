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
    <div className="p-8 max-w-sm m-auto bg-base-200 rounded shadow">
      <div className="tabs">
        <ul className="tab-group">
          <li className={`tab ${activeTab === 'login' ? 'active' : ''}`} onClick={() => handleTabChange('login')}>
            Login
          </li>
          <li className={`tab ${activeTab === 'register' ? 'active' : ''}`} onClick={() => handleTabChange('register')}>
            Register
          </li>
        </ul>
        <div className="tab-content">
          <div className={`tab-pane ${activeTab === 'login' ? 'active' : ''}`}>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-bold">Phone Number:</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="border rounded w-full px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold">Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border rounded w-full px-3 py-2"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Login
              </button>
            </form>
          </div>
          <div className={`tab-pane ${activeTab === 'register' ? 'active' : ''}`}>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-bold">Phone Number:</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="border rounded w-full px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold">Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border rounded w-full px-3 py-2"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffAuthForm;
