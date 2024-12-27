import React from 'react';
import { Bar, Pie, Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Enregistrement des composants nécessaires dans Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

function Dashboard() {
  // Données pour les Actualités (Bar Chart)
  const newsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Articles publiés',
        data: [5, 8, 6, 9, 7],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  // Données pour les Emplois (Pie Chart)
  const jobsData = {
    labels: ['Technique', 'Marketing', 'RH'],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // Données pour les Partenaires (Doughnut Chart)
  const partnersData = {
    labels: ['Entreprises', 'ONG', 'Institutions'],
    datasets: [
      {
        data: [25, 15, 10],
        backgroundColor: ['#4BC0C0', '#FF9F40', '#9966FF'],
      },
    ],
  };

  // Données pour les Formations (Line Chart)
  const trainingsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Participants',
        data: [10, 20, 30, 25, 40],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  // Données pour les Bulletins d'information (Stacked Bar Chart)
  const newslettersData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Newsletters envoyées',
        data: [5, 7, 8, 10, 12],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
      {
        label: 'Taux de clics (%)',
        data: [50, 60, 55, 65, 70],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      },
    ],
  };

  // Options pour les graphiques
  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Statistiques des Abonnés et Offres d\'Emploi',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Mois',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Quantité',
        },
        beginAtZero: true,
      },
    },
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Participants aux Formations',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Mois',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Participants',
        },
        beginAtZero: true,
      },
    },
  };

  const stackedBarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Bulletins d\'information',
      },
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'Mois',
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Quantité / Taux de clics (%)',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 pt-24 ml-64">
      {/* Statistiques générales */}
      <div className="col-span-1 lg:col-span-3 bg-white p-4 rounded shadow flex justify-between">
        <div className="text-center w-1/4">
          <h4 className="text-lg font-semibold">Nouveaux abonnés</h4>
          <p className="text-2xl font-bold">128</p>
        </div>
        <div className="text-center w-1/4">
          <h4 className="text-lg font-semibold">Offres d'emploi</h4>
          <p className="text-2xl font-bold">20</p>
        </div>
        <div className="text-center w-1/4">
          <h4 className="text-lg font-semibold">Demandes de stage</h4>
          <p className="text-2xl font-bold">15</p>
        </div>
        <div className="text-center w-1/4">
          <h4 className="text-lg font-semibold">Formations</h4>
          <p className="text-2xl font-bold">5</p>
        </div>
      </div>

      {/* Actualités */}
      <div className="bg-white p-4 rounded shadow h-80 md:h-96 col-span-1">
        <h3 className="text-xl font-bold mb-4">Actualités</h3>
        <Bar data={newsData} options={barOptions} />
      </div>

      {/* Emplois */}
      <div className="bg-white p-4 rounded shadow h-80 md:h-96 col-span-1 lg:col-span-2">
        <h3 className="text-xl font-bold mb-4">Emplois</h3>
        <Pie data={jobsData} options={pieOptions} />
      </div>

      {/* Partenaires */}
      <div className="bg-white p-4 rounded shadow h-80 md:h-96 col-span-1 lg:col-span-2">
        <h3 className="text-xl font-bold mb-4">Partenaires</h3>
        <Doughnut data={partnersData} options={doughnutOptions} />
      </div>

      {/* Formations */}
      <div className="bg-white p-4 rounded shadow h-80 md:h-96 col-span-1">
        <h3 className="text-xl font-bold mb-4">Formations</h3>
        <Line data={trainingsData} options={lineOptions} />
      </div>

      {/* Bulletins d'information */}
      <div className="bg-white p-4 rounded shadow h-80 md:h-96 col-span-1 lg:col-span-3">
        <h3 className="text-xl font-bold mb-4">Bulletins d'information</h3>
        <Bar data={newslettersData} options={stackedBarOptions} />
      </div>
    </div>
  );
}

export default Dashboard;
