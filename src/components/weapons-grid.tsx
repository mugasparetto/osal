import WeaponsGridClient from './weapons-grid-client';
import { fetchWeapons } from '@/lib/services';

export default async function WeaponsGrid() {
  const weapons = await fetchWeapons();

  return <WeaponsGridClient fetchedWeapons={weapons} />;
}
