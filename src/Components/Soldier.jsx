import React, { useState } from 'react';

function Soldier() {
  const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [rank, setRank] = useState('');
  const [division, setDivision] = useState('');
   const [location, setLocation] = useState('');
    const [status, setStatus] = useState('');
   const [dob, setDOB] = useState('');
   const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleRankChange = (e) => setRank(e.target.value);
   const handleDivisionChange = (e) => setDivision(e.target.value);
   const handleLocationChange = (e) => setLocation(e.target.value);
   const handleStatusChange = (e) => setStatus(e.target.value);
  const handleDOBChange = (e) => setDOB(e.target.value);

  return (
    <div>
      <div>
         <label>First Name:</label>
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
      </div>
       <div>
        <label>Last Name:</label>
         <input type="text" value={lastName} onChange={handleLastNameChange} />
      </div>
       <div>
         <label>Rank:</label>
         <input type="text" value={rank} onChange={handleRankChange} />
      </ div>
      <div>
        <label>Division:</label>
         <input type="text" value={division} onChange={handleDivisionChange} />
      </div>
    <div>
        <label>Location:</label>
        <input type="text" value={location} onChange={handleLocationChange} />
       </div>
       <div>
        <label>Status:</label>
         <input type="text" value={status} onChange={handleStatusChange} />
      </div>
      <div>
        <label>Date of Birth:</label>
         <input type="date" value={dob} onChange={handleDOBChange} />
      </div>
    </ div>
   );
}

export default Soldier;
