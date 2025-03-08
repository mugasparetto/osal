import * as React from 'react';
import { fetchWeaponData } from '@/data';

export default async function Page({ params, }: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const weapon = fetchWeaponData(id)

    return <div>{weapon?.title}</div>
}