const fs = require('fs');
const PLUGIN_NAME = 'cordova-truecaller';

const str = 'android.useAndroidX';
const gradelPropertiesPath = './platforms/android/gradle.properties';

function log(message) {
  console.log(PLUGIN_NAME + ': ' + message);
}

function onError(error) {
  log('ERROR: ' + error);
}

function run() {
  let gradleProperties = fs.readFileSync(gradelPropertiesPath);
  if (gradleProperties) {
    let updatedGradleProperties = false;
    gradleProperties = gradleProperties.toString();
    if (gradleProperties.includes(`${str}=true`)) {
      return;
    }
    if (gradleProperties.includes(`${str}=false`)) {
      gradleProperties = gradleProperties.replace(
        `${str}=false`,
        `${str}=true`
      );
      updatedGradleProperties = true;
    } else if (!gradleProperties.includes(str)) {
      gradleProperties = gradleProperties.trimEnd();
      gradleProperties += '\n' + str + '=true';
      updatedGradleProperties = true;
    } else if (!gradleProperties.includes(`${str}=true`)) {
      gradleProperties = gradleProperties.split('\n');
      for (var i = 0; i < gradleProperties.length; i++) {
        if (gradleProperties[i].includes(str)) {
          let prop = gradleProperties[i].split('=');
          prop[1] = 'true';
          gradleProperties[i] = prop.join('=');
          break;
        }
      }
      gradleProperties = gradleProperties.join('\n');
      updatedGradleProperties = true;
    }

    if (updatedGradleProperties) {
      fs.writeFileSync(gradelPropertiesPath, gradleProperties, 'utf-8');
    }
  } else {
    log('gradle.properties file is not found');
  }
}

module.exports = function () {
  return new Promise((resolve, reject) => {
    try {
      run();
      resolve();
    } catch (e) {
      onError('Exception: ' + e.toString());
      reject(e);
    }
  });
};
