import React, {Component, PropTypes} from 'react'
import {View, Text, FlatList, StyleSheet, NativeModules} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Avatar from './Avatar';

const PhoneContact = NativeModules.PhoneContact;

/*
const data = [{
    familyName: 'pan',
    fullName: 'yini',
    phoneNumber: '1223233',
}, {
    familyName: 'pan',
    fullName: 'yini',
    phoneNumber: '1223233',
}, {
    familyName: 'pan',
    fullName: 'yini',
    phoneNumber: '1234323',
}, {
    familyName: 'pan',
    fullName: 'yini',
    phoneNumber: '132433',
}];
*/

class PhoneContactList extends Component {
    constructor(props) {
        super(props);
    }


    _keyExtractor = (item, index) => index;

    _renderItem = ({item}) => (
        <View style={styles.itemContainer} onPress={() => Actions.detail()}>
            <Avatar/>
            <Text>{item.familyName}</Text>
            <Text>{item.fullName}</Text>
            <Text>{item.phoneNumber}</Text>
        </View>
    )

    componentDidMount() {
        PhoneContact.show().then(data => this.props.setPhoneContactList(data))
    }

    render() {
        PhoneContact.show().then(data => console.log(data));
        return (
            <FlatList
                data={this.props.phoneList}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        )
    };
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: '#919191',
    }
})


export default PhoneContactList;
