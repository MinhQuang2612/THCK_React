import { createSlice } from '@reduxjs/toolkit';

const bikeSlice = createSlice({
  name: 'bikes',
  initialState: {
    bikeList: [],  
  },
  reducers: {
    setBikes: (state, action) => {
      state.bikeList = action.payload;
    },
    addNewBike: (state, action) => {
      state.bikeList.push(action.payload); 
    },
    removeBike: (state, action) => {
      const bikeId = action.payload;
      state.bikeList = state.bikeList.filter(bike => bike.id !== bikeId);
    },
  },
});

export const { setBikes, addNewBike, removeBike } = bikeSlice.actions;
export default bikeSlice.reducer;
