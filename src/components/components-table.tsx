import ComponentsTableClient from '@/components/components-table-client';
import { fetchComponents } from '@/lib/services';

export default async function ComponentsTable({
  weaponId,
}: {
  weaponId: string;
}) {
  try {
    const { components } = await fetchComponents(weaponId);

    return <ComponentsTableClient components={components} />;
  } catch (error) {
    throw error;
  }
}
