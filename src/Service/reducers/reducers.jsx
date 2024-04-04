import { buyBook } from "../constants"

const initialState = {
    Number_Of_Books: 10
}

export default function bookReducer (state=initialState, action) {
    switch(action.type){
        case buyBook: 
        console.warn('reducers', action)
        return {
            ...state, 
            Number_Of_Books: state.Number_Of_Books -1,
        }
        default:
            return state
    }
}