import WeaponsGridClient from './weapons-grid-client';

async function fetchWeapons() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch('http://localhost:4000/weapons');

    if (!response.ok) {
      console.log(`Failed to fetch weapons: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function WeaponsGrid() {
  const weapons = await fetchWeapons();

  return <WeaponsGridClient fetchedWeapons={weapons} />;
}
