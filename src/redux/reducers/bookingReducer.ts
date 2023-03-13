import { createSlice } from '@reduxjs/toolkit';

const initBookingState = {};

const bookingReducer = createSlice({
    name: 'booking',
    initialState: initBookingState,
    reducers: {},
});

export const BookingActions = bookingReducer.actions;
export default bookingReducer.reducer;
