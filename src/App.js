import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';
import MaterialsList from './components/Materials/MaterialsList.js';
import CreateMaterial from './components/Materials/CreateMaterial.js';
import UpdateMaterial from './components/Materials/UpdateMaterial.js';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/materials" element={<MaterialsList />} />
                <Route path="/materials/create" element={<CreateMaterial />} />
                <Route path="/materials/:id" element={<UpdateMaterial />} />
            </Routes>
        </Router>
    );
}

export default App;