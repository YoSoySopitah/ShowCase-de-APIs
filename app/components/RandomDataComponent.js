"use client"; 

import { useEffect, useState } from 'react';

const RandomDataComponent = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.results[0]);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching random data:', error));
  }, []);

  if (loading) return <p>Cargando datos aleatorios...</p>;

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">Información de Usuario Aleatorio (randomuser api)</h2>
      <p><strong>Nombre:</strong> {userData.name.first} {userData.name.last}</p>
      <img src={userData.picture.medium} alt="Usuario" className="rounded-full" />
      <p><strong>Correo Electrónico:</strong> {userData.email}</p>
      <p><strong>Teléfono:</strong> {userData.phone}</p>
      <p><strong>Dirección:</strong> {userData.location.street.number} {userData.location.street.name}, {userData.location.city}, {userData.location.country}</p>
      <p><strong>Fecha de Nacimiento:</strong> {new Date(userData.dob.date).toLocaleDateString()}</p>
    </div>
  );
};

export default RandomDataComponent;
