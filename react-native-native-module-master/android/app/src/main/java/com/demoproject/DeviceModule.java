package com.demoproject;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by thaoth-ios on 10/3/18.
 */

public class DeviceModule extends ReactContextBaseJavaModule {
    public DeviceModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "Device";
    }

    @ReactMethod
    public void getDeviceName(Callback cb) {
        try {
            cb.invoke(android.os.Build.MODEL, null);
        } catch (Exception e) {
            cb.invoke(null, e.toString());
        }
    }
}



