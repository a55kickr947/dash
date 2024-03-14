import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Soldier from './Components/Soldier';
import Unit from './Components/Unit';
import MissionType from './Components/MissionType';
import MissionDuration from './Components/MissionDuration';
import EquipmentType from './Components/EquipmentType';
import EquipmentInfo from './Components/EquipmentInfo';
import Training from './Components/Training';
import TrainingDuration from './Components/TrainingDuration';

function App() {
  return (
    <Router>
      <Dashboard />
      <Routes>
        <Route path="/Soldier" element={<Soldier />} />
        <Route path="/Unit" element={<Unit />} />
        <Route path="/MissionType" element={<MissionType />} />
        <Route path="/MissionDuration" element={<MissionDuration />} />
        <Route path="/EquipmentType" element={<EquipmentType />} />
        <Route path="/EquipmentInfo" element={<EquipmentInfo />} />
        <Route path="/Training" element={<Training />} />
        <Route path="/TrainingDuration" element={<TrainingDuration />} />
      </Routes>
    </Router>
  );
}

export default App;



/*import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Soldier from './Components/Soldier';
import Unit from './Components/Unit';
import MissionType from './Components/MissionType';
import MissionDuration from './Components/MissionDuration';
import EquipmentType from './Components/EquipmentType';
import EquipmentInfo from './Components/EquipmentInfo';
import Training from './Components/Training';
import TrainingDuration from './Components/TrainingDuration';

function App() {
  return (
    <Router>
      <Dashboard />
      <Switch>
        <Route exact path="/Soldier" component={Soldier} />
        <Route exact path="/Unit" component={Unit} />
        <Route exact path="/MissionType" component={MissionType} />
        <Route exact path="/MissionDuration" component={MissionDuration} />
        <Route exact path="/EquipmentType" component={EquipmentType} />
        <Route exact path="/EquipmentInfo" component={EquipmentInfo} />
        <Route exact path="/Training" component={Training} />
        <Route exact path="/TrainingDuration" component={TrainingDuration} />
      </Switch>
    </Router>
  );
}

export default App;
*/
