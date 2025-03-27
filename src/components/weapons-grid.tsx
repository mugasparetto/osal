import WeaponsGridClient from './weapons-grid-client';
import { fetchWeapons } from '@/lib/services';

export default async function WeaponsGrid() {
  try {
    const weapons = await fetchWeapons();
    return <WeaponsGridClient fetchedWeapons={weapons} />;
  } catch (error) {
    throw error;
  }
}
