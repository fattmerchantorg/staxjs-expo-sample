## Stax.js w/Expo sample

This is a small sample showcasing two ways to use Stax.js from a React Native w/Expo application.

### In-App Browser

This uses the `expo-web-browser` library to load an `SFSafariWebViewController` or `ChromeCustomTab` depending on the platform.

The preferred way of showing a payment form to your users. This explicitly loads a page that makes it clear that this is happening in a secure environment. This also makes it easier to pass Apple review as you are linking "out" of your application. The sample is located in [browser.tsx](https://github.com/fattmerchantorg/staxjs-expo-sample/blob/main/app/(tabs)/browser.tsx).

#### Auto-closing the In-App Browser Window

You can listen to the In-App Browser using the [Expo Linking library](https://docs.expo.dev/versions/latest/sdk/linking/#linkingaddeventlistenertype-handler) and can close the browser with [`WebBrowser.dismissBrowser()`](https://docs.expo.dev/versions/latest/sdk/webbrowser/#webbrowserdismissbrowser). This is not showcased in this app because it is highly dependant on how your page behaves.

### Embedded WebView

Alternatively, you can embed a WebView within your UI directly. This may be easiest and look the most seamless. This uses the [`react-native-webview`](https://docs.expo.dev/versions/latest/sdk/webview/) to display a `WkWebView` on iOS and a `WebView` on Android. 

#### App Review Note
There may be issues with your app review if you do not clearly handle a device that is offline. Make sure to handle the case when the WebView is unable to be loaded in order to bypass review issues with Apple and Google.