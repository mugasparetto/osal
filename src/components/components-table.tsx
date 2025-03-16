import ComponentsTableClient from '@/components/components-table-client';

async function fetchComponents(id: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(
      `http://localhost:4000/weapons/${id}?_embed=components`
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

export default async function ComponentsTable({
  weaponId,
}: {
  weaponId: string;
}) {
  const { components } = await fetchComponents(weaponId);

  return <ComponentsTableClient components={components} />;
}
