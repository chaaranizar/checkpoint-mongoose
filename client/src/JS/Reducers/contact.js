/// importation

import { FAIL_CONTACT, LOAD_CONTACT, ONE_CONTACT, SUCC_CONTACT } from "../ActionType/contact";


// initialState
const initialState = {
    listContacts : [],
    error: null,
    load: false,
    oneContact: {},
}

// reducer
const contactReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_CONTACT:
            return {...state, load: true};
        case SUCC_CONTACT:
            return {...state, load : false, listContacts: payload.listContacts};
        case ONE_CONTACT:
            return {...state, load: false, oneContact: payload.oneContact};    
        case FAIL_CONTACT:
            return {...state, load: false, error: payload};
        default:
            return state;
    }
};

export default contactReducer;