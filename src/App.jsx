import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './component/shared/Layout';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Companies from './pages/Operators';
import Reservations from './pages/Reservations';
import AdminSignIn from './pages/AdminSignIn';

import './index.css';
import Opearators from './pages/Operators';

function App() {
  return (
    <Router>
      <Routes>
        {/* Display AdminSignIn component when user navigates to the root path */}
        <Route path="/" element={<AdminSignIn />} />

        {/* Display Layout component for nested routes */}
        <Route path="/dashboard/*" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="clients/*" element={<Clients />} />
          <Route path="operateurs/*" element={<Opearators />} />
          <Route path="reservations/*" element={<Reservations />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
