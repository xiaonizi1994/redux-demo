import { combineReducers } from 'redux'
import { ADD_PHONELIST,SET_PHONELIST } from '../actions/PhoneContactList'

function PhoneContactList(state = [{
    familyName: 'pan',
    fullName: 'yini',
    phoneNumber: '1223233'}], action) {
    switch (action.type) {
        case ADD_PHONELIST:
            return [
                ...state,
                {
                    familyName: action.familyName,
                    fullName:action.fullName,
                    phoneNumber: action.phoneNumber
                }
            ]
        case SET_PHONELIST:
            return action.PhoneContactList
        default:
            return state
    }
}

const PhoneContactListApp = combineReducers({
    PhoneContactList
})

export default PhoneContactListApp