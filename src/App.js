import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SharedLayout from './components/SharedLayout';
import Agents from './pages/Agents';
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';

// prettier-ignore
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="dashboard" element={<SharedLayout />}>
            <Route index path="stats" element={"Stats"} />
            <Route path="listings" element={"Listings"} />
            <Route path="properties" element={"Properties"} />
            <Route path="market" element={"Markets"} />
            <Route path="profile" element={"User profile"} />
          </Route>
          <Route path="/" element={<Landing />} />
          
          <Route path="/signin" element={<SignIn />} />
          <Route path="agents" element={<Agents />} />
        </Routes>
			<Footer />
      </Router>

    </>
  );
}

export default App;
