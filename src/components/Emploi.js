import React, { useState } from 'react';

function Emploi() {
  // State pour gérer la liste des offres d'emploi
  const [jobList, setJobList] = useState([
    { id: 1, title: 'Développeur Web', description: 'Nous recherchons un développeur web junior.', submission: 'Ouvert' },
    { id: 2, title: 'Responsable Marketing', description: 'Responsable pour le marketing digital.', submission: 'Ouvert' }
  ]);

  // States pour les informations d'une nouvelle ou une offre modifiée
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newSubmission, setNewSubmission] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Ajouter une nouvelle offre d'emploi
  const addJob = () => {
    if (newTitle && newDescription && newSubmission) {
      const newJob = {
        id: jobList.length + 1,
        title: newTitle,
        description: newDescription,
        submission: newSubmission
      };
      setJobList([...jobList, newJob]);
      setNewTitle('');
      setNewDescription('');
      setNewSubmission('');
    }
  };

  // Commencer la modification d'une offre d'emploi
  const editJob = (id) => {
    const jobToEdit = jobList.find(job => job.id === id);
    setNewTitle(jobToEdit.title);
    setNewDescription(jobToEdit.description);
    setNewSubmission(jobToEdit.submission);
    setIsEditing(true);
    setEditingId(id);
  };

  // Mettre à jour une offre d'emploi
  const updateJob = () => {
    setJobList(
      jobList.map(job =>
        job.id === editingId ? { ...job, title: newTitle, description: newDescription, submission: newSubmission } : job
      )
    );
    setNewTitle('');
    setNewDescription('');
    setNewSubmission('');
    setIsEditing(false);
    setEditingId(null);
  };

  // Supprimer une offre d'emploi
  const deleteJob = (id) => {
    setJobList(jobList.filter(job => job.id !== id));
  };

  return (
    <div className="p-4 ml-64"> {/* Ajustement pour ajouter un padding gauche et éviter que le contenu soit caché sous le Sidebar */}
      <h2 className="text-2xl font-bold mb-4">Gérer les Offres d'Emploi</h2>
      
      {/* Formulaire d'ajout ou de modification d'une offre d'emploi */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">
          {isEditing ? 'Modifier l\'offre d\'emploi' : 'Ajouter une nouvelle offre d\'emploi'}
        </h3>
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            placeholder="Titre du poste"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="px-4 py-2 rounded bg-gray-100"
          />
          <input
            type="text"
            placeholder="Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="px-4 py-2 rounded bg-gray-100"
          />
          <input
            type="text"
            placeholder="Soumission (Ouvert/Fermé)"
            value={newSubmission}
            onChange={(e) => setNewSubmission(e.target.value)}
            className="px-4 py-2 rounded bg-gray-100"
          />
          <button
            onClick={isEditing ? updateJob : addJob}
            className={`px-4 py-2 rounded mt-2 ${isEditing ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
          >
            {isEditing ? 'Mettre à jour' : 'Ajouter l\'offre d\'emploi'}
          </button>
        </div>
      </div>

      {/* Liste des offres d'emploi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobList.map(job => (
          <div key={job.id} className="bg-white shadow rounded p-4">
            <h3 className="text-xl font-bold">{job.title}</h3>
            <p className="text-gray-700">{job.description}</p>
            <p className="text-gray-500 mt-2">Soumission : {job.submission}</p>
            <div className="flex space-x-2 mt-2">
              <button
                onClick={() => editJob(job.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Modifier
              </button>
              <button
                onClick={() => deleteJob(job.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
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

export default Emploi;
