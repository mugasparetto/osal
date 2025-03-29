'use client';
import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
  DataGrid,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
  gridClasses,
} from '@mui/x-data-grid';

import { useTheme } from '@mui/material/styles';

import { Component } from '@/data';

function Toolbar() {
  const theme = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'end',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <GridToolbarFilterButton />
      <GridToolbarQuickFilter sx={{ ml: 2 }} />
    </div>
  );
}

const columns = [
  {
    field: 'component',
    headerName: 'Component',
    disableColumnMenu: true,
    flex: 1,
  },
  {
    field: 'country',
    headerName: 'Country',
    disableColumnMenu: true,
    flex: 1,
  },
  {
    field: 'companies',
    headerName: 'Companies',
    disableColumnMenu: true,
    flex: 1,
  },
  {
    field: 'location',
    headerName: 'Location',
    disableColumnMenu: true,
    flex: 1,
  },
];

export default function ComponentsTableClient({
  components,
}: {
  components: Component[];
}) {
  const router = useRouter();
  const rows = useMemo(
    () =>
      components.map((c) => ({
        id: c.id,
        component: c.title,
        country: c.country,
        companies: c.company,
        location: c.location,
      })),
    [components]
  );

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      autoPageSize
      slots={{
        toolbar: Toolbar,
      }}
      sx={{
        [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]: {
          outline: 'none',
        },
        [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]: {
          outline: 'none',
        },
        [`& .${gridClasses.row}`]: { cursor: "pointer" }
      }}
      disableRowSelectionOnClick
      onRowClick={(params) => {
        router.push(`/component/${params.id}`);
      }}
    />
  );
}
