import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "ABC",
    initialState: null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload;
        },
        removeUser:(state,action)=>{
            return null;
        }
    }

})
export const {addUser,removeUser} = userSlice.reducer
export default userSlice;
export const userReducer = userSlice.reducer;