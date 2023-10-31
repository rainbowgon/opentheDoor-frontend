package com.openthedoor;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;
import com.google.firebase.messaging.FirebaseMessaging;

public class MainActivity extends ReactActivity {


  private static final String TAG = "MainActivity";

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);

      // FCM 토큰 가져오기
      FirebaseMessaging.getInstance().getToken()
          .addOnCompleteListener(task -> {
              if (!task.isSuccessful()) {
                  Log.w(TAG, "Fetching FCM registration token failed", task.getException());
                  return;
              }

              // Get new FCM registration token
              String token = task.getResult();

              // Log and toast (for demonstration purposes)
              String msg = "Token: " + token;
              Log.d(TAG, msg);
              Toast.makeText(MainActivity.this, msg, Toast.LENGTH_SHORT).show();
          });
  }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "opentheDoor";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled());
  }
}
