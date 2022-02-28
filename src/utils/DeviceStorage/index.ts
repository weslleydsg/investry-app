import AsyncStorage from '@react-native-async-storage/async-storage';
import { DeviceStorageData, DeviceStorageKeys } from '~/types';

const storeData = async <T extends DeviceStorageKeys>(
  key: T,
  value: DeviceStorageData[T],
) => {
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem(key, jsonValue);
};

const getData = async <T extends DeviceStorageKeys>(
  key: T,
): Promise<DeviceStorageData[T] | null> => {
  const jsonValue = await AsyncStorage.getItem(key);
  if (jsonValue === null) return null;
  return JSON.parse(jsonValue) as DeviceStorageData[T];
};

export const DeviceStorage = { storeData, getData };
