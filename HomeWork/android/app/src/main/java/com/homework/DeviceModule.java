package com.homework;

import android.os.Build;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by duanvh on 10/16/18.
 */

public class DeviceModule extends ReactContextBaseJavaModule {

  private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";

  public DeviceModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "DeviceModule";
  }

  /*
  JavaScript will call getDeviceName() and get data from
  callback.
  */
  @ReactMethod
  public void getDeviceName(Callback cb) {
    try {
      cb.invoke(Build.MODEL, null);
    } catch (Exception e) {
      cb.invoke(null, e.toString());
    }
  }

  @ReactMethod
  public void show(String message, int duration) {
//    Toast.makeText(getReactApplicationContext(), message, duration).show();  // su dung HashMap
    if (duration == 0)
      Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT).show();
    else
      Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_LONG).show();
  }

  @Override
  public Map<String, Object> getConstants() {
    /*So sanh key de lay ra value tuong ung*/
    final Map<String, Object> constants = new HashMap<>();
    constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
    constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
    return constants;
  }

  @ReactMethod
  public String getDataDemo(int i) {
    List<String> data = new ArrayList<>();
    data.add("Duan");
    data.add("Dung");
    data.add("Giang");
    data.add("Chi");
    data.add("Dat");
    data.add("Cong");
    return data.get(i);
  }

}
