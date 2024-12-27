import React, { useState } from 'react';

const initialPartenairesData = [
  { id: 1, logo: 'https://via.placeholder.com/50', name: 'Partenaire A' },
  { id: 2, logo: 'https://via.placeholder.com/50', name: 'Partenaire B' },
  { id: 3, logo: 'https://via.placeholder.com/50', name: 'Partenaire C' },
];

function Partenaires() {
  const [partenaires, setPartenaires] = useState(initialPartenairesData);
  const [newPartenaire, setNewPartenaire] = useState({ name: '', logo: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPartenaire({ ...newPartenaire, [name]: value });
  };

  const handleAddPartenaire = () => {
    if (newPartenaire.name && newPartenaire.logo) {
      setPartenaires([...partenaires, { id: Date.now(), ...newPartenaire }]);
      setNewPartenaire({ name: '', logo: '' });
    }
  };

  const handleDeletePartenaire = (id) => {
    setPartenaires(partenaires.filter((partenaire) => partenaire.id !== id));
  };

  const handleEditPartenaire = (id) => {
    const partenaireToEdit = partenaires.find((p) => p.id === id);
    setNewPartenaire({ name: partenaireToEdit.name, logo: partenaireToEdit.logo });
    setIsEditing(true);
    setEditingId(id);
  };

  const handleUpdatePartenaire = () => {
    setPartenaires(
      partenaires.map((partenaire) =>
        partenaire.id === editingId ? { ...partenaire, ...newPartenaire } : partenaire
      )
    );
    setNewPartenaire({ name: '', logo: '' });
    setIsEditing(false);
    setEditingId(null);
  };

  return (
    <div className="p-4 bg-white shadow rounded-md flex-1 ml-64">
      {/* flex-1 pour prendre tout l'espace disponible à droite */}
      <h2 className="text-2xl font-bold mb-4 ml-64">Gestion des Partenaires</h2>

      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Nom du partenaire"
          value={newPartenaire.name}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="logo"
          placeholder="URL du logo"
          value={newPartenaire.logo}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        {isEditing ? (
          <button onClick={handleUpdatePartenaire} className="bg-blue-500 text-white p-2 rounded">
            Mettre à jour
          </button>
        ) : (
          <button onClick={handleAddPartenaire} className="bg-green-500 text-white p-2 rounded">
            Ajouter
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {partenaires.map((partenaire) => (
          <div key={partenaire.id} className="bg-gray-100 shadow rounded p-4 flex flex-col items-center">
            <img src={partenaire.logo} alt={partenaire.name} className="w-24 h-24 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{partenaire.name}</h3>
            <div className="flex space-x-2 mt-4">
              <button
                onClick={() => handleEditPartenaire(partenaire.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Modifier
              </button>
              <button
                onClick={() => handleDeletePartenaire(partenaire.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partenaires;
