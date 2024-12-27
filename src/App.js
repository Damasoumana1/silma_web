import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Actualite from './components/Actualite';
import Emploi from './components/Emploi';
import Partenaires from './components/Partenaires';
import Formation from './components/Formation';
import NewsLetters from './components/NewsLetters';
import Login from './components/Login'; // Importation du composant Login

function App() {
  // État pour contrôler la connexion de l'administrateur
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={setIsLoggedIn} /> // Affichage du composant Login si l'administrateur n'est pas connecté
      ) : (
        <div className="flex">
          <Sidebar setActiveSection={setActiveSection} />
          <div className="flex flex-col w-full">
            <Navbar />
            <div className="p-4">
              <Dashboard />
            </div>
            <div className="p-4">
              <Actualite />
            </div>
            <div className="p-4">
              {activeSection === 'emploi' && <Emploi />}
            </div>
            <div className="p-4">
              {activeSection === 'partenaires' && <Partenaires />}
            </div>
            <div className="p-4">
              {activeSection === 'formation' && <Formation />}
            </div>
            <div className="p-4">
              {activeSection === 'newsLetters' && <NewsLetters />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
