import * as React from 'react';

import ClientHome from './client-page';

async function fetchWeapons() {
  try {
    const response = await fetch('http://localhost:4000/weapons');

    if (!response.ok) {
      console.log(`Failed to fetch weapons: ${response.status}`);
      // throw new Error(`Failed to fetch weapons: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const weapons = await fetchWeapons();
  return <ClientHome weapons={weapons} />;
}
