import React, { useState } from 'react';

const CallAmbulanceForm = () => {
  const [equipment, setEquipment] = useState([]);
  const [symptoms, setSymptoms] = useState([]);
  const symptomsList = [
    'Difficulty Breathing',
    'Chest Pain',
    'Severe Bleeding',
    'Unconsciousness',
    'Seizures',
    'Allergic Reaction (Anaphylaxis)',
    'Cardiac Arrest',
  ];
  const equipmentList = [
    'OxygenCylinder',
    'Bag Valve Mask',
    'Electrocardiogram (ECG)',
    'Nitrogylerin',
    'Hemostatic Agents',
    'Tourniquet',
    'Automated External Defibrillator (AED)',
    'Glucose monitor',
    'Diazepam / Antiepileptic',
    'Airway management equipment',
    'EpiPen',
    'Antihistamines',
    'Defibrillator',
    'ACLS drugs and equipment',
  ];

  const handleEquipmentChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setEquipment((prevEquipment) => [...prevEquipment, value]);
    } else {
      setEquipment((prevEquipment) =>
        prevEquipment.filter((item) => item !== value)
      );
    }
  };

  const handleSymptomsChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSymptoms((prevSymptoms) => [...prevSymptoms, value]);
    } else {
      setSymptoms((prevSymptoms) =>
        prevSymptoms.filter((item) => item !== value)
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your submission logic here
    console.log('Equipment:', equipment);
    console.log('Symptoms:', symptoms);
  };

  return (
    <div className="p-8 mx-auto bg-base-200 rounded shadow-xl md:px-12 my-6">
      <h2 className="text-3xl font-bold mb-4 ">Call Ambulance Now!</h2>
      <form onSubmit={handleSubmit} >
        <div className='flex gap-4 flex-col lg:flex-row'>
          <div className="my-4">
            <label className="font-medium">Symptoms:</label>
            <div className="mt-2 space-y-2 flex flex-col">
              {symptomsList.map((item, key) => (
                <label key={key}>
                  <input
                    type="checkbox"
                    value={item}
                    onChange={handleSymptomsChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">{item}</span>
                </label>
              ))}

            </div>
          </div>
          <div className='divider lg:divider-horizontal'>OR</div>
          <div className="my-4">
            <label className="font-medium">Equipment Needed:</label>
            <div className="mt-2 space-y-2 flex flex-col">
              {equipmentList.map((item, key) => (
                <label key={key}>
                  <input
                    type="checkbox"
                    value={item}
                    onChange={handleEquipmentChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div
          type="submit"
          className="btn btn-secondary font-bold py-2 px-4 rounded"
        >
          Call Now
        </div>
      </form>
    </div>
  );
};

export default CallAmbulanceForm;