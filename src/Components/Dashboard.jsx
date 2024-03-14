import React from 'react';
import { Link } from 'react-router-dom'; 


function Dashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: '200px',height:'700px', background: '#333', color: '#fff', padding: '20px' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</Link>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/Soldier" style={{ color: '#fff', textDecoration: 'none'}}>Soldier</Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/Unit" style={{ color: '#fff', textDecoration: 'none' }}>Unit</Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/MissionType" style={{ color: '#fff', textDecoration: 'none' }}>Mission Type</Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/MissionDuration" style={{ color: '#fff', textDecoration: 'none' }}>Mission Duration</Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/EquipmentType" style={{ color: '#fff', textDecoration: 'none' }}>Equipment Type</Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/EquipmentInfo" style={{ color: '#fff', textDecoration: 'none' }}>Equipment Info</Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/Training" style={{ color: '#fff', textDecoration: 'none' }}>Training</Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/TrainingDuration" style={{ color: '#fff', textDecoration: 'none' }}>Training Duration</Link>
          </li>
        </ul>
      </div>
      <div style={{ flex: 1, padding: '20px', paddingTop: '20px' }}>
        <h2 style={{marginLeft:'280px'}}>Army Management</h2>
      </div>
    </div>
  );
}

export default Dashboard;
