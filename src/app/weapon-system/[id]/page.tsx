import ClientPage from './client-page';

async function fetchWeapon(id: string) {
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

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const weapon = await fetchWeapon(id);

  return <ClientPage weapon={weapon} />;
}
