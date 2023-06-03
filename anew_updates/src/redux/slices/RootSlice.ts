import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        name: 'Name',
        type: 'Type',
        item: 'Item',
        level: 'Level',
    },
    reducers: {
        chooseName: (state, action) => {state.name = action.payload },
        chooseType: (state, action) => {state.type = action.payload },
        chooseItem: (state, action) => {state.item = action.payload },
        chooseLevel: (state, action) => {state.level = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseType, chooseItem, chooseLevel } = rootSlice.actions