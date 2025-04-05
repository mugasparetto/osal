import { Suspense } from 'react';
import { redirect } from 'next/navigation';

import ComponentDetails from '@/components/component-details';
import ComponentSkeleton from '@/components/component-skeleton';

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ variation: string }>;
}

export default async function Page({ params, searchParams }: PageProps) {
  const { id } = await params;
  const { variation } = await searchParams;

  if (variation == null) {
    const updatedParams = new URLSearchParams({
      variation: '1',
    });

    redirect(`?${updatedParams.toString()}`);
  }

  return (
    <Suspense key={variation} fallback={<ComponentSkeleton />}>
      <ComponentDetails id={id} variation={variation} />
    </Suspense>
  );
}
