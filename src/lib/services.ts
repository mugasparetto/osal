export async function fetchWeapons() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch('http://localhost:4000/weapons', {
      cache: 'force-cache',
    });

    if (!response.ok) {
      console.log(`Failed to fetch weapons: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchComponents(weaponId: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(
      `http://localhost:4000/weapons/${weaponId}?_embed=components`
    );

    if (!response.ok) {
      console.log(`Failed to fetch weapon: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.log(error);
    return {};
  }
}
