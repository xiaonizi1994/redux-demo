import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import PhoneContactList from '../components/PhoneContactList'
import {setPhoneContactList} from '../actions/PhoneContactList'


function mapStateToProps(state) {
    return {
        phoneList: state.PhoneContactList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setPhoneContactList: (phoneContactList) => {
            dispatch(setPhoneContactList(phoneContactList))}
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneContactList)