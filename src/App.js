import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as Pages from './pages';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="team" element={<Pages.Team />} />
        <Route path="attributions" element={<Pages.Attributions />} />
        <Route path="collaborations" element={<Pages.Collaborations />} />
        <Route path="communication" element={<Pages.Communication />} />
        <Route path="contribution" element={<Pages.Contribution />} />
        <Route path="description" element={<Pages.Description />} />
        <Route path="engineering" element={<Pages.Engineering />} />
        <Route path="experiments" element={<Pages.Experiments />} />
        <Route path="implementation" element={<Pages.Implementation />} />
        <Route path="notebook" element={<Pages.Notebook />} />
        <Route path="proof-of-concept" element={<Pages.ProofOfConcept />} />
        <Route path="part-collection" element={<Pages.PartCollection />} />
        <Route path="parts" element={<Pages.Parts />} />
        <Route path="improve" element={<Pages.Improve />} />
        <Route path="safety" element={<Pages.Safety />} />
        <Route path="human-practices" element={<Pages.HumanPractices />} />
        <Route path="education" element={<Pages.Education />} />
        <Route path="inclusivity" element={<Pages.Inclusivity />} />
        <Route path="measurement" element={<Pages.Measurement />} />
        <Route path="model" element={<Pages.Model />} />
        <Route path="team" element={<Pages.Team />} />
        <Route path="sustainable" element={<Pages.Sustainable />} />
        <Route path="*" element={<Pages.Error />} />
      </Routes>
    </Router>
  );
}

export default App;
