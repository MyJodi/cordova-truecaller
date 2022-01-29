var exec = require('cordova/exec');

function getColor(color) {
    return color;
}
const loginTextPrefix = {
    'To get started': 0,
    'To continue': 1,
    'To place order': 2,
    'To complete your order': 3,
    'To checkout': 4,
    'To complete your booking': 5,
    'To proceed with your booking': 6,
    'To continue with your booking': 7,
    'To get details': 8,
    'To view more': 9,
    'To continue reading': 10,
    'To proceed': 11,
    'For new updates': 12,
    'To get updates': 13,
    'To subscribe': 14,
    'To subscribe and get updates': 15,
};

const loginTextSuffix = {
    'Please verify mobile no': 0,
    'Please login': 1,
    'Please signup': 2,
    'Please login signup': 3,
    'Please register': 4,
    'Please sign in': 5,
};

const ctaTextPrefix = {
    'Use': 0,
    'Continue with': 1,
    'Proceed with': 2,
};

const consentMode = {
    'Popup': 4,
    'Fullscreen': 8,
    'Bottomsheet': 128,
};

const consentTitle = {
    'Login': 0,
    'Sign up': 1,
    'Sign in': 2,
    'Verify': 3,
    'Register': 4,
    'Get started': 5,
};

const buttonShape = {
    'Rounded': 1024,
    'Rectangle': 2048,
};

const footerType = {
    'Use another method': 256,
    'Enter details manually': 512,
    'Later': 4096,
    'Use another number': 2,
};

const sdkOption = {
    'Without otp': 16,
    'With otp': 32,
};

function generate(options) {
    let op = {};
    op['consentMode'] = consentMode[options.consentMode];
    op['buttonColor'] = getColor(options.buttonColor);
    op['buttonTextColor'] = getColor(options.buttonTextColor);
    op['loginTextPrefix'] = loginTextPrefix[options.loginTextPrefix];
    op['loginTextSuffix'] = loginTextSuffix[options.loginTextSuffix];
    op['ctaTextPrefix'] = ctaTextPrefix[options.ctaTextPrefix];
    op['buttonShapeOptions'] = buttonShape[options.buttonShape];
    op['privacyPolicyUrl'] = options.privacyPolicyUrl;
    op['termsOfServiceUrl'] = options.termsOfServiceUrl;
    op['footerType'] = footerType[options.footerType];
    op['consentTitleOption'] = consentTitle[options.consentTitle];
    op['sdkOptions'] = sdkOption[options.sdkOptions];

    return op;
}

exports.verify = function (options, success, error) {
    options = generate(options);
    exec(success, error, 'TruecallerPlugin', 'truecallerInit', [options]);
};

exports.check = function(success, error) {
    exec(success, error, 'TruecallerPlugin', 'checkTruecaller', []);
};

exports.clearSdk = function() {
    exec(null, null, 'TruecallerPlugin', 'clearSDk', []);
};


exports.initCustomVerification = function(options, success, error) {
    exec(success, error, 'TruecallerPlugin', 'initCustomVerification', [options]);
};

exports.hintNumbers = function(success, error) {
    exec(success, error, 'TruecallerPlugin', 'hintNumbers', []);
};