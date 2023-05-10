import React, { useState, useEffect } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [availableAmbulances, setAvailableAmbulances] = useState([]);
  const [availableHospitals, setAvailableHospitals] = useState([]);
  const [selectedAmbulance, setSelectedAmbulance] = useState('');
  const [selectedHospital, setSelectedHospital] = useState('');

  // Simulating server response for available ambulances and hospitals
  useEffect(() => {
    // Make an API call to fetch the available ambulances and hospitals
    const fetchAvailableData = async () => {
      try {
        // Simulating delay to mimic API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Dummy data for available ambulances and hospitals
        const dummyAmbulances = ['Ambulance 1', 'Ambulance 2', 'Ambulance 3', 'Ambulance 4', 'Ambulance 5'];
        const dummyHospitals = ['Hospital 1', 'Hospital 2', 'Hospital 3', 'Hospital 4', 'Hospital 5'];

        setAvailableAmbulances(dummyAmbulances);
        setAvailableHospitals(dummyHospitals);
      } catch (error) {
        console.error('Error fetching available data:', error);
      }
    };

    fetchAvailableData();
  }, []);

  // Simulating server response for ambulance requests
  useEffect(() => {
    // Make an API call to fetch the ambulance requests
    const fetchNotifications = async () => {
      try {
        // Simulating delay to mimic API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Dummy data for notifications
        const dummyNotifications = [
          {
            id: 1,
            equipment: ['Blood Pressure Machine', 'Oxygen Cylinder'],
            symptoms: ['Difficulty Breathing', 'Chest Pain'],
          },
          {
            id: 2,
            equipment: ['Oxygen Cylinder', 'IV Fluids'],
            symptoms: ['Unconsciousness'],
          },
          // Add more dummy notifications as needed
        ];

        setNotifications(dummyNotifications);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  const handleRequestClick = (request) => {
    setSelectedRequest(request);
  };

  const handleModalClose = () => {
    // Reset the state or make POST request to server
    setSelectedRequest(null);
    setSelectedAmbulance('');
    setSelectedHospital('');
  };

  const handleAmbulanceChange = (e) => {
    setSelectedAmbulance(e.target.value);
  };

  const handleHospitalChange = (e) => {
    setSelectedHospital(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform your submission logic here
    console.log('Selected Ambulance:', selectedAmbulance);
    console.log('Selected Hospital:', selectedHospital);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      {notifications.length === 0 ? (
        <p>Loading notifications...</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className="bg-base-200 hover:bg-base-300 transition duration-100 p-4 rounded cursor-pointer"
              onClick={() => handleRequestClick(notification)}
            >
              <div className="font-bold">Request #{notification.id}</div>
              <div className="text-sm">Equipment: {notification.equipment.join(', ')}</div>
              <div className="text-sm">Symptoms: {notification.symptoms.join(', ')}</div>
            </li>
          ))}
        </ul>
      )}

      {/* Modal for ambulance request */}
      {selectedRequest && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
          <div className="bg-base-100 rounded-lg p-8 max-w-sm mx-auto z-10">
            <h2 className="text-xl font-bold mb-4">Select Ambulance and Hospital</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block font-bold">Ambulance:</label>
                <select
                  value={selectedAmbulance}
                  onChange={handleAmbulanceChange}
                  className="input input-bordered w-full px-3 py-2"
                >
                  <option value="">Select an ambulance</option>
                  {availableAmbulances.map((ambulance) => (
                    <option key={ambulance} value={ambulance}>
                      {ambulance}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block font-bold">Hospital:</label>
                <select
                  value={selectedHospital}
                  onChange={handleHospitalChange}
                  className="input input-bordered w-full px-3 py-2"
                >
                  <option value="">Select a hospital</option>
                  {availableHospitals.map((hospital) => (
                    <option key={hospital} value={hospital}>
                      {hospital}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="btn btn-secondary font-bold py-2 px-4 rounded"
                  onClick={handleModalClose}
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="btn btn-primary text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
