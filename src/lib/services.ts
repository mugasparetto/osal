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
    throw error;
  }
}

export async function fetchComponents(weaponId: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(
      `http://localhost:4000/weapons/${weaponId}?_embed=components`
    );

    if (!response.ok) {
      console.log(`Failed to fetch components: ${response.status}`);
      throw Error('404');
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}
