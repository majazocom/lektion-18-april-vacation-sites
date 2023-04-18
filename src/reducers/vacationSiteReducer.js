import { store } from '../store/vacationStore';

const vacationSiteReducer = (state = store, action) => {
    switch (action.type) {
        case "ADD_VACATION_SITE":
            return {
                ...state,
                vacationSites: [...state.vacationSites, action.payload]
            }
        default:
            return state
    }
}

export default vacationSiteReducer;