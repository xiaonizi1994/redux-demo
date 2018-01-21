/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import PhoneContactListApp from './app/reducers/PhoneContactList'
import {logger, crashReporter} from './app/utilities/middleswares/middleware'


import PhoneContactListContainer from './app/containers/PhoneContactListContainer';

// let store = createStore(PhoneContactListApp)
let createStoreWithMiddleware = applyMiddleware(logger, crashReporter)(createStore);
let store = createStoreWithMiddleware(PhoneContactListApp);

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
