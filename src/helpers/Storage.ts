import AsyncStorage from '@react-native-async-storage/async-storage';

export class Storage {
  static Key = {
    TIME: 'TIME',
  };

  static async setItem(storeKey: string, value: any) {
    try {
      await AsyncStorage.setItem(storeKey, JSON.stringify(value));
    } catch (error) {
      console.error('Set item error.', error);
    }
  }

  static async getItem<K>(storeKey: string): Promise<K | undefined> {
    try {
      const value = await AsyncStorage.getItem(storeKey);
      if (value) {
        return JSON.parse(value);
      }
    } catch (error) {
      console.error('Get item error.', error);
    }
    return undefined;
  }

  static async removeItem(storeKey: string) {
    try {
      await AsyncStorage.removeItem(storeKey);
    } catch (error) {
      console.error('Remove item error.', error);
    }
  }
}
