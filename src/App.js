import React from 'react';
import Navbar from './components/NavBar';
import ProfileSection from './components/ProfileSection';

import SkillGrid from './components/SkillGrid';
import './App.css';
import logo from './logo.svg';

function App() {
    return (
        <div className="App bg-dark-bg min-h-screen">
            <Navbar />
            <ProfileSection /> 
            
        </div>
    );
}

export default App;