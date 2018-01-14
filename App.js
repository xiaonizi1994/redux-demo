/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import PhoneContactListApp from './app/reducers/PhoneContactList'


import PhoneContactListContainer from './app/containers/PhoneContactListContainer';

let store = createStore(PhoneContactListApp)

export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <PhoneContactListContainer/>
                </View>
            </Provider>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    },
});
