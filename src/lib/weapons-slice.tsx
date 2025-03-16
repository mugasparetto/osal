import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Weapon } from '@/data';

interface WeaponsState {
  weapons: Weapon[];
  selectedWeapon: Weapon | null;
}

const initialState: WeaponsState = {
  weapons: [],
  selectedWeapon: null,
};

const weaponsSlice = createSlice({
  name: 'weapons',
  initialState,
  reducers: {
    setWeapons: (state, action: PayloadAction<Weapon[]>) => {
      state.weapons = action.payload;
    },
  },
});

export const { setWeapons } = weaponsSlice.actions;
export default weaponsSlice.reducer;
