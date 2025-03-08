import { fetchWeaponData } from '@/data';

import ClientPage from './ClientPage';

export default async function Page({ params, }: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const weapon = fetchWeaponData(id);

    // Pass the fetched data as props to the client component
    return <ClientPage weapon={weapon!} />;
}