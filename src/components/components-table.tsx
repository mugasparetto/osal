import ComponentsTableClient from '@/components/components-table-client';
import { fetchComponents } from '@/lib/services';

export default async function ComponentsTable({
  weaponId,
}: {
  weaponId: string;
}) {
  const { components } = await fetchComponents(weaponId);

  return <ComponentsTableClient components={components} />;
}
