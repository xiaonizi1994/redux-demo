package com.yinidemo2.module;

import android.content.ContentResolver;
import android.content.Context;
import android.database.Cursor;
import android.provider.ContactsContract;
import android.widget.Toast;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;

/**
 * Created by ynpan on 09/01/2018.
 */

public class PhoneContact extends ReactContextBaseJavaModule {

    public PhoneContact(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "PhoneContact";
    }

    @ReactMethod
    public void show(Promise promise) {
        //Toast.makeText(getReactApplicationContext(), "123", Toast.LENGTH_LONG).show();

        WritableNativeArray array=new WritableNativeArray();

        Context context=getReactApplicationContext();
        ContentResolver contentResolver=context.getContentResolver();
        Cursor cursor=contentResolver.query(ContactsContract.CommonDataKinds.Phone.CONTENT_URI,null,null,null,null);

        while (cursor.moveToNext()){
            String phoneNumber=cursor.getString(cursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER));
            String fullName=cursor.getString(cursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME));

            WritableMap map=new WritableNativeMap();
            map.putString("fullName",fullName);
            map.putString("phoneNumber",phoneNumber);
            array.pushMap(map);
        }

        promise.resolve(array);
    }
}
