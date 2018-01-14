package com.yinidemo2;


import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.yinidemo2.module.PhoneContact;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by ynpan on 09/01/2018.
 */

public class NativeModulePackage implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules(
            ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();

        modules.add(new PhoneContact(reactContext));

        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
