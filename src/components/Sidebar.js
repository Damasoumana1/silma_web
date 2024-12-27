import React from 'react';

function Sidebar({ setActiveSection }) {
  return (
    <div className="bg-gray-800 w-64 h-screen text-white flex flex-col fixed top-0 left-0">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
      </div>
      <ul className="flex flex-col p-4 space-y-2">
        <li
          onClick={() => setActiveSection('tableau_de_bord')}
          className="hover:bg-gray-700 p-2 rounded cursor-pointer"
        >
          Tableau de bord
        </li>
        <li
          onClick={() => setActiveSection('actualites')}
          className="hover:bg-gray-700 p-2 rounded cursor-pointer"
        >
          Actualités
        </li>
        <li
          onClick={() => setActiveSection('emploi')}
          className="hover:bg-gray-700 p-2 rounded cursor-pointer"
        >
          Emploi
        </li>
        <li
          onClick={() => setActiveSection('partenaires')}
          className="hover:bg-gray-700 p-2 rounded cursor-pointer"
        >
          Partenaires
        </li>
        <li
          onClick={() => setActiveSection('formation')}
          className="hover:bg-gray-700 p-2 rounded cursor-pointer"
        >
          Formation
        </li>
        <li
          onClick={() => setActiveSection('newsLetters')}
          className="hover:bg-gray-700 p-2 rounded cursor-pointer"
        >
          Newsletters
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
