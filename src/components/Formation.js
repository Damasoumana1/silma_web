import React, { useState } from 'react';

const initialFormationsData = [
  { id: 1, title: 'Formation A', description: 'Description de la formation A', photo: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Formation B', description: 'Description de la formation B', photo: 'https://via.placeholder.com/150' },
];

function Formations() {
  const [formations, setFormations] = useState(initialFormationsData);
  const [newFormation, setNewFormation] = useState({ title: '', description: '', photo: '' });
  const [editingFormation, setEditingFormation] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingFormation) {
      setEditingFormation({ ...editingFormation, [name]: value });
    } else {
      setNewFormation({ ...newFormation, [name]: value });
    }
  };

  const handleAddFormation = () => {
    if (newFormation.title && newFormation.description && newFormation.photo) {
      setFormations([...formations, { id: Date.now(), ...newFormation }]);
      setNewFormation({ title: '', description: '', photo: '' });
    }
  };

  const handleEditFormation = (formation) => {
    setEditingFormation(formation);
  };

  const handleUpdateFormation = () => {
    setFormations(
      formations.map((formation) =>
        formation.id === editingFormation.id ? editingFormation : formation
      )
    );
    setEditingFormation(null);
  };

  const handleDeleteFormation = (id) => {
    setFormations(formations.filter((formation) => formation.id !== id));
  };

  return (
    <div className="ml-64 p-6">
      <h2 className="text-2xl font-bold mb-4">Gestion des Formations</h2>

      <div className="mb-6">
        <input
          type="text"
          name="title"
          placeholder="Titre de la formation"
          value={editingFormation ? editingFormation.title : newFormation.title}
          onChange={handleInputChange}
          className="border p-2 mr-2 rounded"
        />
        <input
          type="text"
          name="description"
          placeholder="Description de la formation"
          value={editingFormation ? editingFormation.description : newFormation.description}
          onChange={handleInputChange}
          className="border p-2 mr-2 rounded"
        />
        <input
          type="text"
          name="photo"
          placeholder="URL de la photo"
          value={editingFormation ? editingFormation.photo : newFormation.photo}
          onChange={handleInputChange}
          className="border p-2 mr-2 rounded"
        />
        {editingFormation ? (
          <button
            onClick={handleUpdateFormation}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Modifier
          </button>
        ) : (
          <button
            onClick={handleAddFormation}
            className="bg-green-500 text-white p-2 rounded"
          >
            Ajouter
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {formations.map((formation) => (
          <div key={formation.id} className="bg-gray-100 shadow rounded p-4">
            <img src={formation.photo} alt={formation.title} className="w-full h-32 object-cover mb-4" />
            <h3 className="text-lg font-semibold mb-2">{formation.title}</h3>
            <p className="text-sm mb-4">{formation.description}</p>
            <div className="flex justify-between">
              <button
                onClick={() => handleEditFormation(formation)}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Modifier
              </button>
              <button
                onClick={() => handleDeleteFormation(formation.id)}
                className="bg-red-500 text-white p-2 rounded"
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

export default Formations;
