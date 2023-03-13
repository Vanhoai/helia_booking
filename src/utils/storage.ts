import EncryptedStorage from 'react-native-encrypted-storage';

export class Storage {
    static async setItem(key: string, data: string) {
        data = typeof data === 'string' ? data : JSON.stringify(data);
        try {
            await EncryptedStorage.setItem(key, data);
        } catch (e) {
            console.error(e);
        }
    }

    static async getItem(key: string) {
        try {
            let value = (await EncryptedStorage.getItem(key)) + '';
            try {
                return JSON.parse(value);
            } catch (e) {
                return value;
            }
        } catch (e) {
            return null;
        }
    }

    static async removeItem(key: string) {
        try {
            await EncryptedStorage.removeItem(key);
        } catch (e) {
            console.error(e);
        }
    }

    static async clear() {
        try {
            await EncryptedStorage.clear();
        } catch (e) {
            console.error(e);
        }
    }
}
