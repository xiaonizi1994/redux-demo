export const ADD_PHONELIST = 'ADD_PHONELIST';
export const SET_PHONELIST = 'SET_PHONELIST';

export function addPhoneContactList(phone) {
    return {
        type: ADD_PHONELIST,
        familyName:phone.familyName,
        fullName:phone.fullName,
        phoneNumber:phone.phoneNumber
    }
}

export function setPhoneContactList(PhoneContactList) {
    return { type: SET_PHONELIST, PhoneContactList }
}