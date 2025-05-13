import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  document: string;
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
  isAuthenticate: boolean;
  status: string;
}

const initialState: AuthState = {
  user: null,
  isAuthenticate: false,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUserState: (state, action) => {
      //   Redux Toolkit nos permite escribir lógica "mutante" en reductores. En
      //   realidad no muta el estado porque usa la librería Immer,
      //   que detecta cambios en un "estado borrador" y produce un nuevo
      //   estado inmutable basado en esos cambios
      state.user = action.payload.user;
      state.isAuthenticate = true;
      state.status = "succeeded";
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticate = false;
      state.status = "idle";
    },

    setLoading: (state) => {
      state.status = "loading";
    },

    setFailed: (state) => {
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUserState, logout, setLoading, setFailed } = authSlice.actions;

export default authSlice.reducer;
