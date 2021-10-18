---
title: Truecaller Authentication
description: Authenticate users with Truecaller.
---

# cordova-plugin-truecaller

__Supported Platforms__

- Android

__Generate Fingerprint/SHA1__
On Linux

    keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android

On Windows

    keytool -list -v -keystore "c:\users\your_user_name\.android\debug.keystore" -alias androiddebugkey -storepass android -keypass android 

You can get the fingerprint/SHA1 from the command output
## Generate partnerkey
*   Visit https://developer.truecaller.com/, create an account and login.
*   Navigate to your dashboard and add application.
*   Add your app name, package name and your fingerprint to add the application.
* Copy the generated App Key, which is the partner key.


## Installation


    cordova plugin add cordova-plugin-truecaller --variable PARTNER_KEY='<Your truecaller partnerkey>'

Alternatively, you can also install from git url

    cordova plugin add https://github.com/Deepaksai1919/cordova-truecaller.git --variable PARTNER_KEY='<Your truecaller partnerkey>'


---

<a name="module_camera"></a>

## truecaller

### truecaller.check(successCallback, errorCallback)
Can be used to find if the user has truecaller application installed on their device.

### truecaller.verify(options, successCallback, errorCallback)
Displays the truecaller dialog to authenticate the user.

**Example**  
```js
var options = {
  consentMode: 'Bottomsheet',
  loginTextPrefix: 'To continue',
  loginTextSuffix: 'Please verify mobile no',
  ctaTextPrefix: 'Use',
  buttonShape: 'Rounded',
  footerType: 'Later',
  consentTitle: 'Verify',
  sdkOptions: 'With otp',
};
cordova.plugins.truecaller.check(
    function (success) {
      cordova.plugins.truecaller.verify(
        options,
        function (profile) {
          console.log('Got profile', profile);
        },
        function (error) {
          console.error(error);
        }
      );
    },
    function (error) {
      if (error === 'Not installed')
        console.error('Truecaller is not installed on user device.');
      else console.error(error);
    }
  );
```
<a name="module_camera.cleanup"></a>

### options.consentMode : <code>string</code>
**Kind**: consentMode property of <code>[Options](#)</code>
**Default**: Bottomsheet
**Alowed Values**

| Value | Description |
| --- | --- |
| Bottomsheet | Displays a bottomsheet |
| Fullscreen | Displays a fullscreen modal |
| Popup | Displays a popup |

### options.buttonColor : <code>hex color code</code>
**Kind**: buttonColor property of <code>[Options](#)</code>
**Default**: #2979FF

### options.buttonTextColor : <code>hex color code</code>
**Kind**: buttonTextColor property of <code>[Options](#)</code>
**Default**: #FFFFFF

### options.loginTextPrefix : <code>string</code>
**Kind**: loginTextPrefix property of <code>[Options](#)</code>
**Default**: To continue
**Description**: Will display the same value.
**Alowed Values**

| Value |
| --- |
| To get started |
| To continue |
| To complete your order |
| To checkout |
| To proceed with your booking | 
| To continue with your booking | 
| To get details |
| To view more |
| To continue reading |
| For new updates |
| To get updates |
| To subscribe |
| To subscribe and get updates |

### options.loginTextSuffix : <code>string</code>
**Kind**: loginTextSuffix property of <code>[Options](#)</code>
**Default**: To continue
**Description**: Will display the same value.
**Alowed Values**

| Value |
| --- |
| Please verify mobile no |
| Please login |
| Please signup |
| Please login signup |
| Please register |
| Please sign in |

### options.ctaTextPrefix : <code>string</code>
**Kind**: ctaTextPrefix property of <code>[Options](#)</code>
**Default**: Proceed with
**Description**: Will display the same value.
**Alowed Values**

| Value |
| --- |
| Use |
| Continue with |
| Proceed with |


### options.buttonShape : <code>string</code>
**Kind**: buttonShape property of <code>[Options](#)</code>
**Default**: Rounded
**Description**: The shape of button.
**Alowed Values**

| Value |
| --- |
| Rectangle |
| Rounded |


### options.footerType : <code>string</code>
**Kind**: footerType property of <code>[Options](#)</code>
**Default**: Later
**Description**: Will display the same value in footer.
**Alowed Values**

| Value |
| --- |
| Later |
| Manually |
| Another method |


### options.consentTitle : <code>string</code>
**Kind**: consentTitle property of <code>[Options](#)</code>
**Default**: Verify
**Description**: Will display the same value.
**Alowed Values**

| Value |
| --- |
| Login |
| Sign up |
| Sign in |
| Verify |
| Register |
| Get started |

### options.sdkOptions : <code>string</code>
**Kind**: sdkOptions property of <code>[Options](#)</code>
**Default**: With otp
**Alowed Values**

| Value |
| --- |
| With otp |
| Without otp |

### truecaller.clearSdk()
Clears the trueScope.

**Example**  
```js
cordova.plugins.truecaller.clearSdk()
```