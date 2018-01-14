import React from 'react';
import {Router,Stack,Scene} from 'react-native-router-flux';
import PhoneContactList from '../components/PhoneContactList';
import Detail from '../components/Detail';

const AppRouter=()=>{
    <Router>
        <Stack key="root">
            <Scene
                key="phoneContactList"
                component={PhoneContactList}
                title="通讯录"
                initial
            />
            <Scene
                key="detail"
                component={Detail}
                title="详情"
            />
        </Stack>
    </Router>
}

export default AppRouter;