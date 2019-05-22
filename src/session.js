/*import 'localstorage-polyfill'
const SESSION_ID_KEY = `SESSIONID`;

export default {
    saveSessionId(sessionId) {
        localStorage.setItem(SESSION_ID_KEY, sessionId);
    },

    getSessionId() {
        return localStorage.getItem(SESSION_ID_KEY);
    },

    isLogged() {
        const sessionId = localStorage.getItem(SESSION_ID_KEY);
        return sessionId !== null;
    },

    clearSession() {
        localStorage.removeItem(SESSION_ID_KEY);
    }
}*/

import {AsyncStorage} from 'react-native';
const SESSION_ID_KEY = `SESSIONID`;

export const saveSessionId = async (sessionId) => {
    await AsyncStorage.setItem('SESSION_ID_KEY',sessionId);
}

export const getSessionId = async () => {
    return await AsyncStorage.getItem('SESSION_ID_KEY');
}

export const isLogged = async () => {
    const sessionId = await AsyncStorage.getItem('SESSION_ID_KEY');
    return sessionId !== null && typeof(sessionId) !== undefined;
}

export const clearSession = async () => {
    await AsyncStorage.removeItem('SESSION_ID_KEY');
}
