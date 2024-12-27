import React, { useState } from 'react';
import SearchBar from './SearchBar';

const initialNewslettersData = [
  { id: 1, email: 'example1@mail.com', information: 'Info 1' },
  { id: 2, email: 'example2@mail.com', information: 'Info 2' },
];

function Newsletters() {
  const [newsletters, setNewsletters] = useState(initialNewslettersData);
  const [newEmail, setNewEmail] = useState('');
  const [newInfo, setNewInfo] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handleInfoChange = (e) => {
    setNewInfo(e.target.value);
  };

  const handleAddEmail = () => {
    if (newEmail && validateEmail(newEmail)) {
      setNewsletters([...newsletters, { id: Date.now(), email: newEmail, information: newInfo }]);
      setNewEmail('');
      setNewInfo('');
    }
  };

  const handleDeleteEmail = (id) => {
    setNewsletters(newsletters.filter((newsletter) => newsletter.id !== id));
  };

  const handleEditEmail = (id) => {
    const emailToEdit = newsletters.find((n) => n.id === id);
    setNewEmail(emailToEdit.email);
    setNewInfo(emailToEdit.information);
    setIsEditing(true);
    setEditingId(id);
  };

  const handleUpdateEmail = () => {
    setNewsletters(
      newsletters.map((newsletter) =>
        newsletter.id === editingId
          ? { ...newsletter, email: newEmail, information: newInfo }
          : newsletter
      )
    );
    setNewEmail('');
    setNewInfo('');
    setIsEditing(false);
    setEditingId(null);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="ml-64 p-6">
      <h2 className="text-2xl font-bold mb-4">Gestion des Newsletters</h2>

      <div className="mb-4">
        <input
          type="email"
          placeholder="Entrez l'e-mail"
          value={newEmail}
          onChange={handleInputChange}
          className="border p-2 mr-2 rounded"
        />
        <input
          type="text"
          placeholder="Entrez l'information"
          value={newInfo}
          onChange={handleInfoChange}
          className="border p-2 mr-2 rounded"
        />
        {isEditing ? (
          <button onClick={handleUpdateEmail} className="bg-blue-500 text-white p-2 rounded">
            Mettre à jour
          </button>
        ) : (
          <button onClick={handleAddEmail} className="bg-green-500 text-white p-2 rounded">
            Ajouter
          </button>
        )}
      </div>

      <ul className="list-disc pl-6">
        {newsletters.map((newsletter) => (
          <li key={newsletter.id} className="flex justify-between items-center mb-2">
            <div>
              <span>{newsletter.email}</span> - <span>{newsletter.information}</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEditEmail(newsletter.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Modifier
              </button>
              <button
                onClick={() => handleDeleteEmail(newsletter.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Supprimer
              </button>
              <button className="bg-purple-500 text-white px-4 py-2 rounded">
                Envoyer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Newsletters;
