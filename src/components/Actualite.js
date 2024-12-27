import React, { useState } from 'react';

const initialActualitesData = [
  { id: 1, photo: 'https://via.placeholder.com/50', titre: 'Titre A', description: 'Actualité A' },
  { id: 2, photo: 'https://via.placeholder.com/50', titre: 'Titre B', description: 'Actualité B' },
  { id: 3, photo: 'https://via.placeholder.com/50', titre: 'Titre C', description: 'Actualité C' },
];

function Actualite() {
  const [actualites, setActualites] = useState(initialActualitesData);
  const [newActualite, setNewActualite] = useState({ photo: '', titre: '', description: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Gestion des changements de formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewActualite({ ...newActualite, [name]: value });
  };

  // Ajouter une actualité
  const handleAddActualite = () => {
    if (newActualite.photo && newActualite.titre && newActualite.description) {
      setActualites([...actualites, { id: Date.now(), ...newActualite }]);
      setNewActualite({ photo: '', titre: '', description: '' });
    }
  };

  // Supprimer une actualité
  const handleDeleteActualite = (id) => {
    setActualites(actualites.filter((actualite) => actualite.id !== id));
  };

  // Commencer la modification d'une actualité
  const handleEditActualite = (id) => {
    const actualiteToEdit = actualites.find((a) => a.id === id);
    setNewActualite({ photo: actualiteToEdit.photo, titre: actualiteToEdit.titre, description: actualiteToEdit.description });
    setIsEditing(true);
    setEditingId(id);
  };

  // Mettre à jour une actualité
  const handleUpdateActualite = () => {
    setActualites(
      actualites.map((actualite) =>
        actualite.id === editingId ? { ...actualite, ...newActualite } : actualite
      )
    );
    setNewActualite({ photo: '', titre: '', description: '' });
    setIsEditing(false);
    setEditingId(null);
  };

  return (
    <div className="p-1 bg-white shadow rounded-md ml-64"> {/* ml-64 : marge à gauche pour décaler le contenu vers la droite */}
      <h2 className="text-2xl font-bold mb-4">Gestion des Actualités</h2>

      <div className="mb-4">
        <input
          type="text"
          name="photo"
          placeholder="URL de la photo"
          value={newActualite.photo}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="titre"
          placeholder="Titre de l'actualité"
          value={newActualite.titre}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="description"
          placeholder="Description de l'actualité"
          value={newActualite.description}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        {isEditing ? (
          <button onClick={handleUpdateActualite} className="bg-blue-500 text-white p-2 rounded">
            Mettre à jour
          </button>
        ) : (
          <button onClick={handleAddActualite} className="bg-green-500 text-white p-2 rounded">
            Ajouter
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {actualites.map((actualite) => (
          <div key={actualite.id} className="flex flex-col bg-gray-100 p-4 rounded-md">
            <img src={actualite.photo} alt="Actualité" className="w-12 h-12 mb-2" />
            <h3 className="text-lg font-semibold">{actualite.titre}</h3>
            <p className="text-md">{actualite.description}</p>
            <div className="mt-2 flex space-x-2">
              <button
                onClick={() => handleEditActualite(actualite.id)}
                className="bg-blue-600 text-white p-2 rounded"
              >
                Modifier
              </button>
              <button
                onClick={() => handleDeleteActualite(actualite.id)}
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

export default Actualite;
