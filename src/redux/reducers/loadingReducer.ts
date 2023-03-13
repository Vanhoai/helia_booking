import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stateLoading } from '../common/initState';
import { StateLoading } from '../common/types'; 

const loadingReducer = createSlice({
    name: 'loading',
    initialState: stateLoading,
    reducers: {
        setIsLoading: (state: StateLoading, action: PayloadAction<Boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const LoadingActions = loadingReducer.actions;
export default loadingReducer.reducer;
