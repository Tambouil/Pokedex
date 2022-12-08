import { createSlice } from '@reduxjs/toolkit';

export type Pokemon = {
  id: number;
  name: string;
  image: string;
  types: {
    type: {
      name: string;
    };
  }[];
};

export type State = {
  favoritesPokemons: Pokemon[];
};

type Action = {
  type: string;
  payload: Pokemon;
};

const initialState = {
  favoritesPokemons: [],
};

export const favoritesPokemonsSlice = createSlice({
  name: 'favoritesPokemons',
  initialState,
  reducers: {
    addPokemon: (state: State, action: Action) => {
      const pokemonAlreadyExists = state.favoritesPokemons.some((pokemon) => pokemon.id === action.payload.id);
      if (!pokemonAlreadyExists) {
        state.favoritesPokemons.push(action.payload);
      } else {
        state.favoritesPokemons = state.favoritesPokemons.filter((pokemon) => pokemon.id !== action.payload.id);
      }
    },
    removePokemon: (state: State, action: Action) => {
      state.favoritesPokemons = state.favoritesPokemons.filter((pokemon) => pokemon.id !== action.payload.id);
    },
  },
});

export const { addPokemon, removePokemon } = favoritesPokemonsSlice.actions;

export default favoritesPokemonsSlice.reducer;
