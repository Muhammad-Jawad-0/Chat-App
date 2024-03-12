// import { createSlice } from "@reduxjs/toolkit";

// const INITIAL_STATE = {
//     count: 0
// }

// const counter = createSlice({
//     name: "counter",
//     initialState: INITIAL_STATE,
//     reducers: {
//         increment(state) {
//             state.count = state.count + 1
//         },
//         decrement(state) {
//             state.count = state.count - 1
//         }
//     }
// })

// export const { increment, decrement, incrementByAmount } = counter.actions;
// export default counter.reducer;

import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    count : 0
}

const counter = createSlice({
    name : 'counter',
    initialState : INITIAL_STATE,
    reducers : {
        increment(state) {
            state.count = state.count + 1
        },
        decrement(state) {
            state.count = state.count - 1
        }
    }
})

export const {increment , decrement , incremrntByAmount} = counter.actions;
export default counter.reducer;