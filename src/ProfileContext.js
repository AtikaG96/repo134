import React, { createContext, useState, useEffect } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Simulert API-anrop (kan være en ekstern API eller en lokal JSON-fil)
    const fetchData = async () => {
      const response = await fetch('/profile.json'); // Eller ditt API-endepunkt
      const data = await response.json();
      setProfileData(data);
    };

    fetchData().catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <ProfileContext.Provider value={profileData}>
      {children}
    </ProfileContext.Provider>
  );
};
