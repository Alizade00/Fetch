import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface FavoriteState {
    data: any[],
};

const initialState: FavoriteState = {
    data: [],
};

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<any>) => {
            if(!state.data.find(item => item.show.id === action.payload.show.id))
            state.data = [...state.data, action.payload];
        }
    },
});