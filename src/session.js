import 'localstorage-polyfill'
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
}