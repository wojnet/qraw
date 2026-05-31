import { createSlice } from "@reduxjs/toolkit";

interface IDevtoolsState {
  enabled: boolean;
}

const initialState: IDevtoolsState = {
  enabled: false,
}

const devtoolsSlice = createSlice({
  name: "devtools",
  initialState,
  reducers: {
    toggleDevtools: (state) => {
      state.enabled = !state.enabled;
    }
  },
});

export const { toggleDevtools } = devtoolsSlice.actions;
export default devtoolsSlice.reducer;