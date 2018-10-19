import { Platform, PermissionsAndroid } from 'react-native';
const RNFS = require('react-native-fs');
import Permissions from 'react-native-permissions';
import OpenSettings from 'react-native-open-settings';

export const dirHome = Platform.select({
  ios: `${RNFS.DocumentDirectoryPath}/Centar Srce`,
  android: `${RNFS.ExternalStorageDirectoryPath}/Centar Srce`
});

export const copyFile = (filePath, destPath) =>
  RNFS.copyFile(filePath, destPath)


export const moveAttachment = async (filePath, newFilepath) => {
  return new Promise((resolve, reject) => {
    RNFS.mkdir(dirHome)
      .then(() => {
        RNFS.copyFile(filePath, newFilepath)
          .then(() => resolve(true))
          .catch(error => reject(error));
      })
      .catch(err => reject(err));
  });
};

export const mkDir = () => RNFS.mkdir(dirHome);

export const read = (path) =>
  RNFS.readDir(path)
    .then((result) => {
      return result;
    })
    .catch(() => {
    });

export const requestStoragePermission = async () => {
  try {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    )
  } catch (err) {
  }
}

export const requestCameraPermission = async () => {
  try {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    )
  } catch (err) {
  }
}


export const askPermissions = async () => {
  if (Platform.OS === 'ios') {
    await Permissions.checkMultiple(['photo', 'mediaLibrary', 'camera'])
      .then((response) => {
        if (response.photo !== 'authorized' || response.mediaLibrary !== 'authorized' || response.camera !== 'authorized') {
          OpenSettings.openSettings();
        }
      });
  }
  else if (Platform.OS === 'android') {
    await Permissions.checkMultiple(['storage', 'camera'])
      .then( async (response) => {
        if (response.storage !== 'authorized') {
          await requestStoragePermission();
        }
        if (response.camera !== 'authorized') {
          await requestCameraPermission();
        }
      });
  }
}