import android.util.Log;
import androidx.annotation.NonNull;
import com.google.firebase.messaging.FirebaseMessagingService;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;
import com.google.firebase.messaging.FirebaseMessaging;

public class MyFirebaseMessagingService extends FirebaseMessagingService {

    private static final String TAG = "MyFirebaseMsgService";

    /**
    * There are two scenarios when onNewToken is called:
    * 1) When a new token is generated on initial app startup
    * 2) Whenever an existing token is changed
    * Under #2, there are three scenarios when the existing token is changed:
    * A) App is restored to a new device
    * B) User uninstalls/reinstalls the app
    * C) User clears app data
    */
    @Override
    public void onNewToken(@NonNull String token) {
        Log.d(TAG, "Refreshed token: " + token);
        
        // If you want to send messages to this application instance or
        // manage this apps subscriptions on the server side, send the
        // FCM registration token to your app server.
        sendRegistrationToServer(token);
    }

    private void sendRegistrationToServer(String token) {
        // TODO: Add your logic to send token to your server.
        // 서버로 토큰 전송할 부분입니다.
    }
}
