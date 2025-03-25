import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Weapon } from '@/data';

interface WeaponsState {
  weapons: Weapon[];
  fetchStatus: 'not-loaded' | 'loading' | 'success' | 'error';
}

const initialState: WeaponsState = {
  weapons: [],
  fetchStatus: 'not-loaded',
};

const weaponsSlice = createSlice({
  name: 'weapons',
  initialState,
  reducers: {
    setWeapons: (state, action: PayloadAction<Weapon[]>) => {
      state.weapons = action.payload;
      state.fetchStatus = 'success';
    },
    setFetchStatus: (state, action) => {
      state.fetchStatus = action.payload;
    },
  },
});

export const { setWeapons, setFetchStatus } = weaponsSlice.actions;
export default weaponsSlice.reducer;
